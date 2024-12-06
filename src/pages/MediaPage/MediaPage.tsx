import React from "react";

import ListItem from "../../components/ListItem/ListItem";
import Section from "../../components/Section";
import YoutubeCaptionPair from "../../components/YoutubeCaptionPair";
import soundCloud from "../../../constants/soundCloud";
import SoundCloudIframe from "../../components/SoundCloudIframe/SoundCloudIframe";
import Link from "next/link";

const youtubeMedia = [
  {
    title:
      '"En aquel cortijo no había luz", for cowbells (2024) - Stèles Duo at FCAYC',
    url: "https://www.youtube.com/watch?v=fXQoQF_aMEQ",
  },
  {
    title:
      '"Music to watch the clouds pass by on a windless day", for seven players (2023) - Ensemble Ascolta and students from the akademie kontemporär 2023',
    url: "https://www.youtube.com/watch?v=CVqphkx-Qlw",
  },
  {
    title:
      '"I don\'t expect anything from this afternoon", for violin, bass clarinet, violoncello and percussion (2023) – Norrbotten NEO',
    url: "https://www.youtube.com/watch?v=mq7E79WxZYg",
  },
  {
    title:
      '"My grandpa used to braid esparto grass for hours under the shadow of the fig tree", for symphony orchestra (2021) – Georgia Tech Symphony Orchestra',
    url: "https://www.youtube.com/live/Qovu0TSUjqE?feature=shared&t=1175",
  },
  {
    title:
      '"How Difficult It Is to Cry Today", for piano, cello and tape (2022) – Defunensemble',
    url: "https://youtu.be/Fxkw14wEIvw?t=1874",
  },
  {
    title:
      '"Grito al cielo" ("Scream to the Sky"), for wind quintet (2021) – Glauka Quintet',
    url: "https://www.youtube.com/watch?v=i21ZI6iVQdU&amp;list=PLmCBAACC1BUa5u5jDfHdnVzeZ46RxWjnX&amp;index=3",
  },
  {
    title: '"Hugs Catalogue", for eleven players (2021) – Zagros Ensemble',
    url: "https://youtu.be/m1DyHbCIPEk?t=3550",
  },
  {
    title:
      '"Hunger and Fear Bred Anger", for piano, cello and percussion (2021) – Members of NYKY Ensemble',
    url: "https://www.youtube.com/watch?v=Q12Duopu4mk&t=3337s",
  },

  {
    title:
      '"Caressing You till My Fingers Bleed", for computer-generated sound (2020) – MuTeFest 20’ (Festival of Musical Creation with Technology 2020)',
    url: "https://youtu.be/5KWVNMhr85w?t=1343",
  },
  {
    title:
      'Cello Concerto, "Five Pieces of Advice" (2019) - Orchestre national d’Île-de-France, with Victor Julien-Laferrière',
    url: "https://youtu.be/SoXzcFe78Jw?t=2645",
  },
  {
    title:
      '"Relative Distance", for flute and computer-generated sound (2019) – Francisco Rojas Huertas',
    url: "https://www.youtube.com/watch?v=2j2BSpcZgkA",
  },
  {
    title:
      'Piano Concerto, "Allegory of the Five Industrial Forces" (2022) – Orchestre national d’Île-de-France, with Marie-Ange Nguci',
    url: "https://www.youtube.com/watch?v=quXTd4CR1sw",
  },
];

const MediaPage = () => {
  return (
    <Section maxWidth="max-w-screen-2xl">
      <h1 className="text-4xl font-bold text-center mb-6">Media</h1>
      <span className="text-1xl italic text-gray-600 text-center mb-4">
        Many of the works composed before 2023 do not represent my current
        artistic interests (although I still cherish them).
        <br />
        Take a look at my{" "}
        <Link href="/#landing-introduction" className="text-blue-500">
          artist statement
        </Link>{" "}
        to get an idea of what I could be up to for upcoming creations.
        <br />
        You can take a look as well at the end of this page for a list of
        upcoming premieres.
      </span>
      <br />
      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center">
        {youtubeMedia.map((item, index) => (
          <div
            className="w-full max-w-full mb-8 md:w-[calc(50%-theme(space.4))] xl:w-[calc(33%-theme(space.12))] xl:mx-2"
            key={index}
          >
            <YoutubeCaptionPair url={item.url} caption={item.title} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-center">
        {soundCloud.map((item, index) => (
          <div
            className="w-full max-w-full mb-8 md:w-[calc(50%-theme(space.4))] xl:w-[calc(33%-theme(space.12))] xl:mx-2"
            key={index}
          >
            <SoundCloudIframe url={item.url} caption={item.caption} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col md:flex-row md:flex-wrap">
        <iframe
          style={{ borderRadius: "12px" }}
          title="media-page-spotift"
          src="https://open.spotify.com/embed/episode/2jGEQovaGjl280KeV5epeb?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
        <figcaption className="w-full text-center text-sm text-gray-500 mt-1">
          "Tiento", for computer-generated sound through GenoMus (computer-aided
          creativity tool based on autonomous metaprogramming of musical
          genotypes) – Collaborative composition with José López-Montes (2021)
        </figcaption>
      </div>

      <div className="w-full text-left mt-8 border-black border-4 p-4 ">
        <p className="underline">Upcoming premieres</p>
        <ul className="mt-8" id="premiers">
          <ListItem>
            "Nana", for classical guitar, kantele and harpsichord (2024) - To be
            premiered by Superpluck Trio during the Musica Nova Festival in
            Helsinki's Hietsun Paviljonki, on February 10, 2025
          </ListItem>
          <ListItem>
            "Agüilla fresca", for euphonium and fountain (2024) - To be
            premiered by Raúl Sabiote in Cerezales del Condado (Spain) on
            February 16, 2025, as part of{" "}
            <em>Programa de Residencias JME-FCAYC</em>
          </ListItem>
          <ListItem>
            "Done for the day", for any performers playing in a concert and tape
            (2024) - To be premiered by Vertixe Sonora and Hong Kong New Music
            Ensemble during Zagreb Biennale, in April 2025
          </ListItem>
          <ListItem>
            "Music for a potted plant", for classical guitar (2024) - To be
            premiered by Rody van Gemert in Almería (Spain) during the Winter
            2025, and in Helsinki’s Temppeliaukio Church as part of the Autumn
            2025 concert series of The Finnish Association of Soloists
          </ListItem>
        </ul>
      </div>
    </Section>
  );
};

export default MediaPage;
