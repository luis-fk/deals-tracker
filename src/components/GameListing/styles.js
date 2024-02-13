import styled  from 'styled-components/native';
import { theme } from '../../globals/Styles/theme';

export const Container = styled.View`
    padding-right: 16px;
    padding-left: 16px;
    background-color: #FFFFFF;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const GameTitle = styled.Text`
    font-size: 14px;
    font-family: ${theme.fonts.sansSemiBold};
    color: #222222;
    padding-bottom: 12px;
`;

export const ContainerImageScore = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const GameImage = styled.Image`
    height: 36px;
    width: 96px;
    border-radius: 4px;
    border: 1px solid grey;
`;

export const ScoreBox = styled.View`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => {
        if (props.score >= 75) {
            return theme.colors.metaCriticGreen;
        } else if (props.score >= 50) {
            return theme.colors.metaCriticYellow;
        } else {
            return theme.colors.metaCriticRed;
        } 
    }};
`;

export const MetaCriticScore = styled.Text`
    font-size: 14px;
    font-family: ${theme.fonts.sansSemiBold};
`;

export const ContainerPrices = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const NormalPrice = styled.Text`
    font-size: 14px;
    font-family: ${theme.fonts.SansRegular};
    color: #525252;
    text-decoration: line-through;
`;

export const SalePrice = styled.Text`
    font-size: 16px;
    font-family: ${theme.fonts.sansBold};
    color: #222222;
`;


