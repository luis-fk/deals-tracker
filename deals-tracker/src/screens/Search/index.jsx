import React, { useState } from "react";
import { ScrollView, ActivityIndicator, FlatList,
         View, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';

import { Header, HeaderImg, SearchInput, InputWrapper,
         InputBox, InputWrapperRight, InputWrapperLeft,
         FilterTitle, Background, Options, OptionsView,
         StyledPicker} from "./styles";
import headerImg from "../../assets/headerImg.png";

import { Button } from "../../components/Button";
import { GameListing } from "../../components/GameListing";
import { ListDivider } from "../../components/ListDivider";

export function Search() {
    /* Search Inputs will store all the values for the search on the API
       where some default values have already been set */
    const [searchInputs, setsearchInputs] = 
           useState({title: '', minPrice: '', maxPrice: '50', sortBy: 'DealRating', storeID: '1'});
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [showOptions, setShowOptions] = useState(false);

    /* Deals with the show more options menu. */
    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    /* Deals with the search inputs and a special case where maxPrice is
       set to nothing by the user, default it to 50 which is equal to 
       unlimited in the API. */
    function inputInfoSetter(text, name) {
        if (name === 'maxPrice' && text === ''){
            text = '50';
        }
        setsearchInputs({...searchInputs, [name]: text });
    }

    /* Deals with the API call, making the call with all the parameters
       set by the user, here is where the loading state is set and unset. */
    function handleSearch() {
        setLoading(true);
        // console.log(searchInputs);
        fetch('https://www.cheapshark.com/api/1.0/deals?storeID=1' +
               '&title=' + searchInputs.title +
               '&lowerPrice=' + searchInputs.minPrice +
               '&upperPrice=' + searchInputs.maxPrice +
               '&sortBy=' + searchInputs.sortBy +
               '&storeID='+ searchInputs.storeID)
        .then(response => response.json())
        .then(data => {
            setList(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <Background >
            <ScrollView>
                <Header>
                    <HeaderImg source={headerImg} resizeMode="contain"/>

                    <SearchInput 
                        placeholder="Buscar por título"
                        onChangeText={(text) => inputInfoSetter(text, 'title')}
                    />
                    
                    <OptionsView>
                        <TouchableOpacity onPress={toggleOptions}>
                            <Options
                                style={{marginBottom: showOptions ? 16 : 0}}
                            >
                                {showOptions ? 'Esconder opções' : 'Mostrar mais opções'}
                            </Options>
                        </TouchableOpacity>
                    </OptionsView>
                    
                    {/* Here are stored all the option the user has to filter
                        his search. */}
                    {showOptions && (
                        <View>
                            <InputWrapper>
                            <InputWrapperLeft>
                                <FilterTitle>MENOR PREÇO:</FilterTitle>
                                <InputBox 
                                    keyboardType="numeric" 
                                    onChangeText={(text) => inputInfoSetter(text, 'minPrice')}
                                />
                            </InputWrapperLeft>

                            <InputWrapperRight>
                                <FilterTitle>MAIOR PREÇO:</FilterTitle>
                                <InputBox 
                                    keyboardType="numeric" 
                                    onChangeText={(text) => inputInfoSetter(text, 'maxPrice')}
                                />
                            </InputWrapperRight>

                            </InputWrapper>

                            <InputWrapper>
                                <InputWrapperLeft>
                                    <FilterTitle>ORDENAR POR:</FilterTitle>
                                        <StyledPicker
                                            selectedValue={searchInputs.sortBy}
                                            onValueChange={(itemValue) => inputInfoSetter(itemValue, 'sortBy')}>
                                            <Picker.Item label="Melhores promoções" value="DealRating" />
                                            <Picker.Item label="Título" value="Title" />
                                            <Picker.Item label="Preço" value="Price" />
                                            <Picker.Item label="Nota" value="Metacritic" />
                                        </StyledPicker>
                                </InputWrapperLeft>

                                <InputWrapperRight>
                                    <FilterTitle>LOJA:</FilterTitle>
                                    <StyledPicker
                                        selectedValue={searchInputs.storeID}
                                        onValueChange={(itemValue) => inputInfoSetter(itemValue, 'storeID')}>
                                        <Picker.Item label="Steam" value="1" />
                                        <Picker.Item label="Uplay" value="13" />
                                        <Picker.Item label="GOG" value="7" />
                                        <Picker.Item label="Humble Store" value="11" />
                                        <Picker.Item label="Epic Games Store" value="25" />
                                    </StyledPicker>
                                </InputWrapperRight>

                            </InputWrapper>
                        </View>
                    )}

                    <Button 
                        text="Mostrar resultados"
                        activeOpacity={0.7}
                        onPress={handleSearch}
                    />
                </Header>
                
                {/* Loading animation while the API call is being made, which is set
                    at handleSearch. */}
                {loading && <ActivityIndicator size={'large'} />}
                
                {/* Here is where the results are displayed with a FlatList.
                    scrollEnabled is set to false because of Scroll view, otherwise
                    it throws an error with the FlatList since both are scrollable*/}
                {!loading && 
                    <FlatList 
                        data={list}
                        scrollEnabled={false}
                        keyExtractor={item => item.gameID}
                        renderItem={({ item }) => (
                            <GameListing data={item} />
                        )}
                        ItemSeparatorComponent={() => <ListDivider />}
                        showsVerticalScrollIndicator={false}
                    />}
            </ScrollView>
        </Background>
    );
}