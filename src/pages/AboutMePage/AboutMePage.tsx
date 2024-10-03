import React from "react";
import ListItem from "@/components/ListItem";

import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import SeeMore from "@/components/SeeMore";
import SubSectionHeader from "@/components/SubSectionHeader";

import PilarWorking from "@/../public/assets/foto-vertical.jpg";
import Image from "next/image";

const FullAbout = () => {
  return (
    <Section maxWidth="max-w-screen-sm lg:max-w-screen-xl">
      <h1 className="text-4xl font-bold text-center mb-6">About me</h1>
      <div className="justify-center items-center w-full flex flex-col lg:items-start lg:flex-row lg:flex-wrap lg:justify-center">
        <div className="max-w-lg lg:mr-10 mb-8 lg:w-4/12">
          <Image src={PilarWorking} alt="Pilar working" />
          <div className="mt-12 w-full text-left border-black border-4 p-4 hidden lg:block">
            <Paragraph>
              I use SuperCollider programming language for composing my
              electroacoustic works. You can check out my{" "}
              <a
                href="https://github.com/pilarmiralles/SuperCollider-theory"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                GitHub
              </a>{" "}
              for some SuperCollider tutorials and other specific codes I am
              developing.
            </Paragraph>
          </div>
        </div>
        <div className="lg:w-5/12">
          <Paragraph>
            Hi! My name is Pilar Miralles and I was born in Almería (Spain) in
            1997. I am a composer and researcher based in Helsinki (Finland). I
            speak Spanish, English, and a decent French. You can find my artist
            statement and short bio in the home page.
          </Paragraph>
          <br />
          <SubSectionHeader level={2}>Education</SubSectionHeader>
          <ul className="text-justify">
            <ListItem>
              Doctoral candidate, Arts Study Programme, at DocMus Doctoral
              School of the Sibelius Academy, University of the Arts Helsinki
              (Finland, ongoing)
            </ListItem>
            <ListItem>
              Preparatory doctoral student at DocMus Doctoral School of the
              Sibelius Academy, University of the Arts Helsinki (Finland, 2024)
            </ListItem>
            <ListItem>
              Master of Music in Composition at the Sibelius Academy, University
              of the Arts Helsinki (Finland, 2022)
            </ListItem>
            <ListItem>
              Master’s Degree in Electroacoustic Composition at "Centro Superior
              Katarina Gurska” of Madrid (Spain, 2020)
            </ListItem>
            <ListItem>
              Bachelor’s Degree in Composition at the Royal Higher Conservatory
              of Music “Victoria Eugenia” of Granada (Spain, 2019)
            </ListItem>
          </ul>
          <br />
          <SubSectionHeader level={2}>Ongoing research</SubSectionHeader>
          <ul className="text-justify">
            <Paragraph>
              As a doctoral candidate at DocMus, I do artistic research, meaning
              that my artistic practice, which is composing, is the main object
              of research, both as a methodological tool and as a research
              outcome in itself. In my ongoing research project, I aim to
              question the value of action and rethink the meaning of rest by
              developing a composition practice based on inactivity. This
              responds to a societal context of productive overload and
              permanent availability, in which the creation of spaces to{" "}
              <em>linger over sound</em>
              allows a reflection on time (and its disregard). The artistic
              output of the project consists of three new compositions that will
              be publicly premiered at the Helsinki Music Center, and which will
              act as case studies of my doctoral dissertation.
            </Paragraph>
          </ul>
          <br />
          <SubSectionHeader level={2}>
            Some more biographical stuff
          </SubSectionHeader>
          <Paragraph>
            My instrumental work has been internationally premiered by ensembles
            and orchestras, such as the Île-de-France National Orchestra,
            Orchester im Treppenhaus, Defunensemble, Vertixe Sonora, Ensemble
            Ascolta or Norrbotten NEO. On the other hand, my electroacoustic
            work has been developed at the Nordplus intensive course IMMEDIA
            2021 in Vilnius (Lithuania), the MuteFest ’20 and ’22 at the
            Sibelius Academy (Finland), or the Festival of Contemporary Art of
            Granada’s University 2021 in collaboration with composer and
            researcher José López-Montes (Spain). I have participated in other
            important new music festivals in Europe such as Musiikin aika (Time
            of Music) 2023 in Viitasaari (Finland), the Academy of ManiFeste
            2022 at the IRCAM in Paris (France), or the VI VANG series of
            CentroCentro in Madrid (Spain). My most recent recognition was the
            First Prize of the Young Composers Award organized by SGAE-CNDM in
            Madrid (November 2023), thanks to which I am the current resident
            composer of the Spanish Musical Youth Network (JME) for the 2024/25
            season. I also collaborate as a co-teacher of the SuperCollider
            programming workshop organized by the Music Technology department of
            the Sibelius Academy since 2023. During 2023-24, I have been invited
            by the Ulysses Network to join the Ulysses Journeys for Young
            Composers, attending composition courses in Viitasaari, Hamburg, and
            Barcelona, and during September 2024, I participated in the program
            Spanish Young Music Talents organized by SPAIN Arts & Culture,
            participating in composition seminars and premieres at Georgia Tech
            University (Atlanta), the University of Georgia (Athens), and the
            Spanish Cultural Center (Washington DC). Lastly, from time to time,
            I dust off my extra-official text-based work (the so-called{" "}
            <em>book</em>), my flute, and my collage notebook.
          </Paragraph>
          <div className="mt-10 mb-10 w-full text-left border-black border-4 p-4 lg:hidden">
            <Paragraph>
              I use SuperCollider programming language for composing my
              electroacoustic works. You can check out my{" "}
              <a
                href="https://github.com/pilarmiralles"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500"
              >
                GitHub
              </a>{" "}
              for some SuperCollider tutorials and other specific codes I am
              developing.
            </Paragraph>
          </div>
          <SeeMore to="/media">See more media {">>"}</SeeMore>
          <SeeMore to="/contact-me">Contact me {">>"}</SeeMore>
        </div>
      </div>
    </Section>
  );
};

export default FullAbout;
