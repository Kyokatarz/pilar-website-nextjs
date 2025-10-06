import React from "react";
import ListItem from "@/components/ListItem";

import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import SeeMore from "@/components/SeeMore";
import SubSectionHeader from "@/components/SubSectionHeader";

import PilarWorking from "@/../public/assets/About-photo.png";
import Image from "next/image";
import Link from "next/link";

const FullAbout = () => {
  return (
    <Section maxWidth="max-w-screen-sm lg:max-w-screen-xl">
      <h1 className="text-4xl font-bold text-center mb-6">About me</h1>
      <div className="justify-center items-center w-full flex flex-col lg:items-start lg:flex-row lg:flex-wrap lg:justify-center">
        <div className="max-w-lg lg:mr-10 mb-8 lg:w-4/12">
          <Image src={PilarWorking} alt="Pilar working" />
          <div className="mt-12 w-full text-left border-black border-4 p-4 hidden lg:block">
            <Paragraph>
              I use SuperCollider programming language for generating or
              processing sound in some of my works. You can check out my{" "}
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
            1997. I am a sound artist and researcher based in Helsinki
            (Finland). I speak Spanish, English, and a decent French. You can
            find my artist statement and short bio in the{" "}
            <Link href="/" className="text-blue-500">
              home page
            </Link>
            .
          </Paragraph>
          <br />
          <SubSectionHeader level={2}>Education</SubSectionHeader>
          <ul className="text-justify">
            <ListItem>
              Doctoral researcher (Arts Study Programme) at DocMus Doctoral
              School of the Sibelius Academy, University of the Arts Helsinki
              (Finland, ongoing)
            </ListItem>
            <ListItem>
              Preparatory doctoral researcher at DocMus Doctoral School of the
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
              <em>
                Listening through remembrance: An autoethnography of presence in
                the age of disposability
              </em>
              <br />
              <br />
              <em>Listening through remembrance</em> is an artistic research
              project, meaning that my artistic doings are my main means of
              inquiry. In this research, I am looking into the concept of
              presence to explore a relationship with the world that is not
              based on disposability, that is, on fast-paced discard and
              replacement (and, therefore, forgetfulness). For that, I am using
              the notions of remembrance and listening to find (or even create)
              the "anchor points" that we need to acknowledge ourselves as part
              of the reality we inhabit. Jean-Luc Nancy's continual ideas on
              presence and listening related to remaining open to the unfoldings
              of the world represent one of the theoretical pillars of the
              research. My objective is to understand remembrance as an access
              point to this kind of attitude toward the world, allowing meanings
              and values to be continuously restored through a sense of
              familiarity, intimacy, or closeness. My field practice takes place
              in my homeland, in rural Southeastern Spain, and the images,
              sounds, objects, and voices collected from it are collectively
              recalled in a series of three multimedia installations in which I
              invite the audience, back in Finland, to further engage with their
              own remembrances.
            </Paragraph>
          </ul>
          <br />
          <div className="mt-10 mb-10 w-full text-left border-black border-4 p-4 lg:hidden">
            <Paragraph>
              I use SuperCollider programming language for generating or
              processing sound in some of my works. You can check out my{" "}
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
