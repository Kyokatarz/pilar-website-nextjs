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
          I'm a sound artist and researcher currently living in Helsinki
          (Finland). My artistic activity focuses on situated practices that
          seek to restore a deep awareness of our fast and disposable reality
          and a sense of belonging to it, especially through the retrieval and
          resignification of memory. I'm currently expanding my practice to
          video filming, field recording, and site writing, finding in
          installation art a solution for the processual and open-ended nature
          of my work.
          <br />
          <br />I hold a Master's degree in Electroacoustic Composition from
          "Centro Superior Katarina Gurska" of Madrid, and a Master of Music in
          Composition from the Sibelius Academy of Uniarts Helsinki. My current
          doctoral artistic research is being conducted at the same institution.
          I have recently participated in artistic programs at the ULYSSES
          Network (EU), the FCAYC Foundation (Spain), and SPAIN arts & culture
          (US), among others, and my work has been supported by, Taiteen
          edistämiskeskus, Teosto, Musiikinedistämissäätiö, Pro Musica Säätiö,
          and Suomen Säveltäjät.
        </Paragraph>
        <SeeMore to="/about-me">
          See more about me and my research {">>"}
        </SeeMore>
      </Article>
    </Section>
  );
};

export default About;
