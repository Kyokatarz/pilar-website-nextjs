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
          Sibelius Academy of the University of the Arts Helsinki (Finland). I
          recently got acepted as a doctoral candidate in the Arts Study
          Programme of DocMus Doctoral School at the Sibelius Academy. My
          artistic research project is titled{' '}
          <em>
            Nothing much; Denormalizing Productivity through Sonic Underload
          </em>
          . My objective is to investigate and question, through the
          compositional process, the normalization of a culture of the overload,
          whose main consequence is the lack of space for a reflexive
          construction of the self.
        </Paragraph>
        <SeeMore to='/about-me'>See more about me {'>>'}</SeeMore>
      </Article>
    </Section>
  );
};

export default About;
