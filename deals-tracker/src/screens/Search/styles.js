import  styled  from 'styled-components/native';
import Constants from 'expo-constants';
import { theme } from '../../globals/Styles/theme';
import { Picker } from "@react-native-picker/picker";

const statusBarHeight = Constants.statusBarHeight;

export const Header = styled.View`
    margin-top: ${statusBarHeight};
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.headerBackground};
    padding-bottom: 10px;
    margin-bottom: 16px;
    border-bottom-right-radius: 16px;
    border-bottom-left-radius: 16px;
`;

export const HeaderImg = styled.Image` 
    width: 70%;
    justify-content: center;
    align-items: center;
`;

export const SearchInput = styled.TextInput`
    border: 1px solid grey;
    width: 90%;
    height: 44px;
    border-radius: 3px;
    background-color: #FFF;
    padding-left: 16px;
    margin-bottom: 16px;
    font-size: 16px;
    font-family: ${theme.fonts.sansSemiBold};
`;

export const OptionsView = styled.View`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const Options = styled.Text`
    font-size: 14px;
    color: white;
    font-family: ${theme.fonts.sansSemiBold};
`;

export const InputWrapper = styled.View`
    width: 90%;
    height: auto;
    justify-content: space-between;
    flex-direction: row;
`;

export const InputBox = styled.TextInput`
    border-width: 1px;
    border-color: grey;
    width: 100%;
    height: 44px;
    border-radius: 3px;
    background-color: #FFF;
    padding-left: 16px;
    align-items: center;
    font-size: 16px;
    font-family: ${theme.fonts.sansSemiBold};
    margin-bottom: 16px;
`;

export const FilterTitle = styled.Text`
    font-size: 12px;
    color: white;
    font-family: ${theme.fonts.sansSemiBold};
`;

export const InputWrapperRight = styled.View`
    width: 48%;
    gap: 3px;
`;

export const InputWrapperLeft = styled.View`
    width: 48%;
    gap: 3px;
`;

export const StyledPicker = styled(Picker)`
    border-width: 1px;
    border-color: grey;
    width: 100%;
    height: 44px;
    border-radius: 3px;
    background-color: #FFF;
    padding-left: 16px;
    align-items: center;
    font-family: ${theme.fonts.sansSemiBold};
    margin-bottom: 16px;
`;

export const Background = styled.View`
    background-color: ${theme.colors.background};
    width: 100%;
    height: 100%;
`;


