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
          completed my Master's Degrees in Electroacoustic Composition and
          Composition in Madrid and Helsinki, respectively, and now I am a
          doctoral candidate in the Arts Study Programme of DocMus Doctoral
          School at the Sibelius Academy, University of the Arts Helsinki. My
          artistic research project is titled{" "}
          <em>Composer asleep; The creative (non)practice of not-doing</em>
          . In this project, I aim to rethink what resting means in the context
          of a productivity-driven society. Through the composition of three
          concert-long works, I question the role of the composer as active
          producer and explore alternative agencies leading to resting and
          allowing rest in the face of hyper-abundance and the consequent
          depletion it causes.
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
