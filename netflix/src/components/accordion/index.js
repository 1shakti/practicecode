import React, { useState, useContext, createContext } from "react";

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}){
    return(
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    );
};

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
};

Accordion.Frame = function AccordionFrame(){
    return <Frame {...restProps}>{children}</Frame>
};

Accordion.Item = function AccordionItem(){
    const [toggleShow, setToggleShow] = useState(false)
    return <Item {...restProps}>{children}</Item>
};

Accordion.Header = function AccordionHeader(){
    return <Header onClick={()=>setToggle()} {...restProps}>{children}</Header>
};
