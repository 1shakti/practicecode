import React from "react";
import {Container, Inner, Pane, Item, Title, SubTitle, Image} from "./styles/jumbotron";

export default function Jumbotron({ children , direction = 'row', ...restProps }){

    return(
        <Item { ...restProps }>
            <Inner direction={direction}>
                {children}
            </Inner>      
        </Item>
    )

}

Jumbotron.Container = function JumbotronContainer({children , ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Jumbotron.Pane = function jumbotronPane({children, ...restProps}){
    return(
        <Pane {...restProps}>{children}</Pane>
    )
}

Jumbotron.Title = function jumbotronTitle({children, ...restprops}){
    return(
        <Title {...restprops}>{children}</Title>
    )
}

Jumbotron.SubTitle = function jumbotronSubTitle({children, ...restProps}){
    return(
        <SubTitle {...restProps}>{children}</SubTitle>
    )
}

Jumbotron.Image = function jumbotronImage({...restProps}){
    return(
        <Image {...restProps} />
    )
}