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
          My name is Pilar Miralles and I was born in Almería (Spain) in 1997. I
          am a composer and researcher currently based in Helsinki (Finland). I
          completed my Master's Degrees in Electroacoustic Composition and in
          Composition in Madrid and Helsinki, respectively, and now I am a
          doctoral candidate in the Arts Study Programme of DocMus Doctoral
          School at the Sibelius Academy, University of the Arts Helsinki. My
          artistic research project and overall practice as a composer aim at
          questioning the value of action and rethinking the meaning of rest in
          a social context of productive overload and permanent availability.
          <br />
          <br />
          My work as a composer has been supported by Teosto, MES, and Pro
          Musica Säätiö.
        </Paragraph>
        <SeeMore to="/about-me">See more about me {">>"}</SeeMore>
      </Article>
    </Section>
  );
};

export default About;
