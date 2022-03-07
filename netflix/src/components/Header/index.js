import React from "react";
import { Link as RouterLink } from "react-router-dom";

export default function Header({ bg=true, children, ...restProps }){
    return bg ? ( <Background { ...restProps }>{ children }</Background> ) : ( children )
}

Header.Frame = function HeaderFrame({ children, ...restProps }){
    return <Frame { ...restProps }>{ children }</Frame>;
}

Header.Button =  function HeaderButton({ children, ...restProps }){
    return <Button { ...restProps }>{ children }</Button>;
}

Header.Logo = function HeaderLogo({ ...restProps }){
    return <Logo { ...restProps } />;
}