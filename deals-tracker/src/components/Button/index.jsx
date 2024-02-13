import React from "react"
import { SearchButton, SearchButtonText } from "./styles";

/* This is just a simple button with modifiable text */
export function Button({ text, ...rest }) {
    return(
        <SearchButton
            {...rest}
        >
            <SearchButtonText>
                {text}
            </SearchButtonText>
        </SearchButton>
    );
}
    
    
