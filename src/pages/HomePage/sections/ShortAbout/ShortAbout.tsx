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
          <em>
            “Take a nap and change the world”: The artistic experience as a
            space of de-instrumentalized rest
          </em>
          . In this project, I aim to explore through the composition process
          the concept of unproductive rest, that is, rest as an end in itself
          rather than a means to enhance our productivity, in the face of a
          social context of permanent availability and instilled
          auto-exploitation. The objective is to open spaces where the audience
          can practice this kind of rest, which aims for self-reflection and
          inner connection, and is based on the collective awareness of our
          fatigue.
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
