import React from "react";

import Article from "@/components/Article";
import Section from "@/components/Section";
import SeeMore from "@/components/SeeMore";
// import YoutubeCaptionPair from '@/components/YoutubeCaptionPair/YoutubeCaptionPair'
import { dedbirbSoundCloud } from "../../../../../constants/soundCloud";
import SoundCloudIframe from "@/components/SoundCloudIframe";
import dynamic from "next/dynamic";

const YoutubeCaptionPair = dynamic(
  () => import("@/components/YoutubeCaptionPair/YoutubeCaptionPair"),
  { ssr: false }
);

const Media = () => {
  return (
    <Section>
      <Article>
        <h1 className="text-4xl font-bold text-left mb-8 w-full">Media</h1>

        <div className="w-full mb-12">
          <YoutubeCaptionPair
            url="https://www.youtube.com/watch?v=fXQoQF_aMEQ"
            caption={`"En aquel cortijo no había luz", for cowbells (2024) – Stèles Duo at Programa de residencias JME-FCAYC`}
          />
        </div>

        <div className="w-full">
          <YoutubeCaptionPair
            url="https://www.youtube.com/watch?v=DY-9VJ2mDkg"
            caption={
              '"Nana (Lullaby)", for harpsichord, kantele, and guitar (2025) – Superpluck Trio at Musica nova Festival 2025'
            }
          />
        </div>

        <SeeMore to="/media"> See more media {">>"}</SeeMore>

        <div className="w-full">
          <SoundCloudIframe
            url={dedbirbSoundCloud.url}
            caption={dedbirbSoundCloud.caption}
          />
        </div>

        <SeeMore
          to="https://soundcloud.com/pilar-miralles-huh"
          external
          target="_blank"
        >
          See more in SoundCloud {">>"}
        </SeeMore>
      </Article>
    </Section>
  );
};

export default Media;
