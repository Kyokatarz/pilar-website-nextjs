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
          <SubSectionHeader level={2}>
            Current research project
          </SubSectionHeader>
          <ul className="text-justify">
            <Paragraph>
              <em>Composer asleep; The creative (non)practice of not-doing</em>
              <br></br>
              <br></br>
              What does it mean to rest in a world where everything is
              profitable? Can the artist let go of its role as producer in a
              context of global ecological, psychological, and emotional
              depletion? These are the questions I depart from in{" "}
              <em>Composer Asleep</em>, an artistic research project based on my
              practice as a composer. In this project, I aim to develop a
              composition practice based on inactivity with the objective of
              rethinking the meaning of rest in the context of permanent
              availability and self-exploitation of late capitalism. This
              understanding of rest as unproductive interruption to respond to
              the ongoing depletion crisis leads to a let go of my assumptions
              about the active role of the composer as producer. Through the
              composition of three concert-long works, I aim to explore and
              embody alternative (in)active roles of the composer leading
              instead to recovery and care. These works will be publicly
              premiered at the Helsinki Music Center and will act as case
              studies of my doctoral dissertation.
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
            Barcelona, and in September 2024 I will visit Georgia Tech
            University in Atlanta as part of my participation in the program
            Spanish Young Music Talents organized by the cultural area of the
            Embassy of Spain in Washington DC. Lastly, from time to time, I dust
            off my extra-official text-based work (the so-called <em>book</em>),
            my flute, and my collage notebook.
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
