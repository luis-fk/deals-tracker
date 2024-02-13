import React from "react";

import { GameImage, GameTitle, Container, ContainerRow, 
         ScoreBox, MetaCriticScore, ContainerImageScore,
         ContainerPrices, NormalPrice, SalePrice} from "./styles";

/* This module handles the layout of the items that get
   returned from the API call */
export function GameListing({ data }){

    return(
        <Container>
            <GameTitle>{data.title}</GameTitle>

            <ContainerRow>
                <ContainerImageScore>
                    <GameImage source={{uri: data.thumb}} />

                    <ScoreBox score={data.metacriticScore}>
                        <MetaCriticScore>
                            {data.metacriticScore}
                        </MetaCriticScore>
                    </ScoreBox>
                </ContainerImageScore>
                
                <ContainerPrices>
                    <NormalPrice>
                        $ {data.normalPrice}
                    </NormalPrice>

                    <SalePrice>
                        $ {data.salePrice}
                    </SalePrice>
                </ContainerPrices>
                
            </ContainerRow>
        </Container>
    );
}