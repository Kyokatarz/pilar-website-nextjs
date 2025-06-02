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
                Listening as remembrance: An autoethnography of presence in the
                age of disposability
              </em>
              <br />
              <br />
              <em>Listening as remembrance</em> is an artistic research project,
              meaning that my artistic doings are my main means of inquiry. In
              this research, I explore how the practice of remembering can
              contribute to regaining a deeper awareness of the time and place
              we inhabit, despite our embeddedness in a world of disposable
              nature. Being framed by sensorial autoethnography, this
              exploration resorts to listening as a means to retrieve,
              reimagine, and resignify memory. Listening (and what is listened
              to, that is, sound) is understood here beyond its conventional
              meaning, following Jean-Luc Nancy's idea of "listening as making
              sense". The ultimate objective of the project is to understand how
              we can make sense of and bestow value on things (objects, places,
              practices) through the acknowledgment of both their constant
              creation and deletion in our fast world, and their capacity to
              remain through our memory. The images, sounds, voices, and
              materials collected from my own practice of remembering in my
              homeland, in rural Southeastern Spain, are collectively recalled
              through a series of three multimedia installations in which I
              invite the audience to further engage with their own remembrances.
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
