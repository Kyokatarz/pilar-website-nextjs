import React from "react";
import Article from "@/components/Article";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import SeeMore from "@/components/SeeMore";

const About = () => {
  return (
    <Section>
      <Article>
        <h1 className="text-5xl font-bold text-left mb-4">Hi!</h1>
        <Paragraph>
          My name is Pilar Miralles and I was born in Almería (Spain) in 1997.
          I'm a sound artist and researcher currently based in Helsinki
          (Finland). I completed my Master's Degrees in Electroacoustic
          Composition and Composition in Madrid and Helsinki, respectively, and
          now I'm a doctoral candidate in the Arts Study Programme of DocMus
          Doctoral School at the Sibelius Academy, University of the Arts
          Helsinki. In my artistic doings, I'm preoccupied with how the rapidity
          of progress might render our relationship with the world shallow and
          obsolete. I focus on situated practices that seek to restore a deep
          awareness of our reality and a sense of belonging to it, especially
          through the retrieval and resignification of memory. I'm currently
          expanding my practice to video filming, field recording, and site
          writing, finding in installation art a solution for the processual and
          open-ended nature of my work.
          <br />
          <br />I have recently participated in artistic programs at the ULYSSES
          Network (EU), the FCAYC Foundation (Spain), and SPAIN arts & culture
          (US), among others. My work has been supported by Teosto,
          Musiikinedistämissäätiö, Pro Musica Säätiö, and Suomen Säveltäjät.
        </Paragraph>
        <SeeMore to="/about-me">See more about me {">>"}</SeeMore>
      </Article>
    </Section>
  );
};

export default About;
