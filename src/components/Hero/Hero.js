import React from "react";
import Link from "next/link";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Hello, Im Kaster </SectionText>
      <Button onClick={()=>{window.location = "https://github.com/kaikai0517"}}>
          Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
