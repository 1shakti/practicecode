import React from "react";
import { OptForm } from "../components";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer }  from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faqs";

export default function Home(){
    return (
      <>
        <HeaderContainer>
          <Feature>
            <Feature.Title>
                unlimited films tv programmes and more.
            </Feature.Title>
            <Feature.SubTitle>
                Watch anywere, Cancel it any time.
            </Feature.SubTitle>
          </Feature>
          <OptForm>
                <OptForm.Input Placeholder="Email address" />
                <OptForm.Button>Try It Now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
          </OptForm>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </>
    )
}