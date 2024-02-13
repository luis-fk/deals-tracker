import  styled  from 'styled-components/native';
import { theme } from '../../globals/Styles/theme';

export const SearchButton = styled.TouchableOpacity`
    margin-top: 16px;
    margin-bottom: 6px;
    width: 90%;
    height: 44px;
    background-color: ${theme.colors.buttonCollor};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const SearchButtonText = styled.Text`
    color: ${theme.colors.buttonTextCollor};
    font-size: 16px;
`;