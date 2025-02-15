import React from "react";
import Image from "next/image";

import SubSectionHeader from "@/components/SubSectionHeader";
import Paragraph from "@/components/Paragraph";
import Article from "@/components/Article";
import Section from "@/components/Section";
import TheUgly from "@/../public/assets/Landing-photo.png";

const Introduction = () => {
  return (
    <Section id="landing-introduction">
      <div className="flex items-center justify-center mb-6 max-w-lg flex-col">
        <Image
          src={TheUgly}
          alt=""
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
      <Article>
        <header>
          <h1 className="text-4xl text-black mb-6 text-center ">
            <span>PILAR MIRALLES</span> <br />
            <span className="text-2xl italic text-gray-600">
              composer / researcher
            </span>
          </h1>
        </header>

        <SubSectionHeader id="statement" level={2}>
          Artist statement
        </SubSectionHeader>
        <Paragraph>
          I would like to question our approach to artistic expression in the
          mass-market era, our capacity to perceive and interpret the world and
          the self, and our subsequent consciousness and freedom. I dream about
          and work for a way of creation, interpretation, and reception of art
          within an environment free of market domination, academic technocracy,
          and administrative deception.
          <br />
          <br />
          As an artist, I am interested in the perceptive approach to creating
          situations and the literalness of perception while inhabiting them,
          their here and now. I feel that today's reality is a place where
          availability and immediacy have been absolutized. In such a reality,
          the simple fact of sitting in there and contemplating becomes
          extremely relevant.
          <br />
          <br />
          In my artistis <em>doings</em>, I question the goal- and
          future-orientation in which we are embedded and which have led us to a
          crisis of presence. My practice is approached as a source of
          continuous reflection rather than finalized products, a space to dwell
          that has found its latest creative motor in the rural context and its
          collective memory.
          <br />
          <br />
          <em>El regreso a los bosques es la solución</em> (Ñu - Cuentos de ayer
          y de hoy, 1978) <br />
          <br />
          <br />
          <br />
        </Paragraph>

        <SubSectionHeader level={2}>Acknowledgments</SubSectionHeader>
        <Paragraph>
          Thanks to Jean-Paul Sartre for{" "}
          <span className="italic">La Nausée</span>, John Kennedy Toole for{" "}
          <span className="italic">A Confederacy of Dunces</span>, John
          Steinbeck for <span className="italic">The Grapes of Wrath</span>, and
          José Luis Sampedro for{" "}
          <span className="italic">El río que nos lleva</span>. Thanks to Aldous
          Huxley <em>on the very whole</em>.
          <br />
          <br />
          Thanks to Galina Ustvolskaya, the truest composer, and to Éliane
          Radigue, Eva-Maria Houben, and Jakob Ullmann for defying the immediacy
          era. Thanks to William Basinski for being <em>nothing</em> enough.
          Thanks to any artist who has taught me to listen beyond notes and
          structures.
          <br />
          <br />
          Thanks to Dada (
          <em>
            dada m'dada, dada m'dada dada mhm, dada dera dada, dada Hue, dada
            Tza
          </em>
          ). Thanks to Fluxus. Thanks to what is meaningless, useless, and empty
          according to the mass-market society.
          <br />
          <br />
          And thanks to all artists yet to be discovered, lost in the ocean of
          information, that will guide and inspire my work at some point. I am
          constantly searching for you.
        </Paragraph>
        <br />
        <br />
        <p className={"italic text-left"}>
          This open-source website has been kindly designed and developed by{" "}
          <a
            href="https://fi.linkedin.com/in/giang-tran97"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            Giang Tran{" "}
          </a>
          <span className="not-italic">😎</span>. Still a work in progress!
        </p>
      </Article>
    </Section>
  );
};

export default Introduction;
