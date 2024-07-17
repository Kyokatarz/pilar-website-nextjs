import React from "react";
import Article from "@/components/Article";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import SeeMore from "@/components/SeeMore";
import getDictionary from "@/dictionaries/getDictionary";

const About = ({ lang }: { lang: string }) => {
  const dictionary = getDictionary(lang);
  return (
    <Section>
      <Article>
        <h1 className="text-5xl font-bold text-left mb-4">
          {dictionary.page.home.shortAbout.header}
        </h1>
        <Paragraph>
          My name is Pilar Miralles and I was born in Almería (Spain) in 1997. I
          am a composer and sound artist currently based in Helsinki (Finland).
          I completed my Master's Degrees in Electroacoustic Composition and
          Composition in Madrid and Helsinki, respectively, and now I am a
          doctoral candidate in the Arts Study Programme of DocMus Doctoral
          School, at the Sibelius Academy of the University of the Arts
          Helsinki. My artistic research project is titled{" "}
          <em>
            Nothing Much; Denormalizing Productivity through Sonic Underload
          </em>
          . My objective is to investigate and question, through an underloaded
          compositional practice, the normalization of a culture of the
          overload, whose main consequence is the lack of space for a reflexive
          construction of the self.
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
