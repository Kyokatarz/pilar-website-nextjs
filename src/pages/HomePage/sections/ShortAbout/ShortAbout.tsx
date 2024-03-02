import React from 'react';
import Article from '@/components/Article';
import Paragraph from '@/components/Paragraph';
import Section from '@/components/Section';
import SeeMore from '@/components/SeeMore';

const About = () => {
  return (
    <Section>
      <Article>
        <h1 className='text-5xl font-bold text-left mb-4'>Hi!</h1>
        <Paragraph>
          My name is Pilar Miralles and I was born in Almería (Spain) in 1997. I
          am a composer and sound artist based in Helsinki (Finland). I
          completed my Master's Degree in Electroacoustic Composition in 2020 in
          Madrid (Spain) and my Master of Music in Composition in 2022 at the
          Sibelius Academy of the University of the Arts Helsinki (Finland).
          Currently, I continue my studies at the Sibelius Academy as a
          preparatory doctoral student at DocMus Doctoral School. My artistic
          research project is focused on the creation of situations of sonic
          underload as a response to the primacy of speed of production,
          consumption, optimization, and connectivity in today's mass-market
          society.
        </Paragraph>
        <SeeMore to='/about-me'>See more about me {'>>'}</SeeMore>
      </Article>
    </Section>
  );
};

export default About;
