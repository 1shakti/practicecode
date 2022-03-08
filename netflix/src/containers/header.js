import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }){
    <Header>
        <Header.Frame>
            <Header.Logo to={ROUTES.HOME} src="logo.svg" alt="Netflix"/>
            <Header.Button to={ROUTES.SIGN_IN}>Sign in</Header.Button>
        </Header.Frame>
        { children }
    </Header>
}