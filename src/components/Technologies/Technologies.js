import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider></SectionDivider>
    <br></br>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText></SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"></DiReact>
        <ListContainer>
          <ListTitle>Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            vue.js(V3) / vue.js(V2) / Nuxt.js / pinia / vuex / React.js /
            Next.js / redux / react-native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"></DiFirebase>
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
          <ListParagraph>
            Experience with <br />
            ES7+ / Typescript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>
          <ListTitle>UI Framework</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tailwindcss / Naive / Material / Vant / Ant Design
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>
          <ListTitle>Work flow</ListTitle>
          <ListParagraph>
            Experience with <br />
            Git flow / Github flow / Gitlab flow
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem"></DiZend>
        <ListContainer>
          <ListTitle>mobile development</ListTitle>
          <ListParagraph>
            Experience with <br />
            PWA / RWD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
