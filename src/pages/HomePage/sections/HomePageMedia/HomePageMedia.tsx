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
            url="https://www.youtube.com/watch?v=5KWVNMhr85w&t=1343s"
            caption={`"Caressing You till My Fingers Bleed", computer-generated sound through SuperCollider programming language (2020) – MuTeFest 20’ 
              (Festival of Musical Creation with Technology 2020)`}
          />
        </div>

        <div className="w-full">
          <YoutubeCaptionPair
            url="https://www.youtube.com/watch?v=mq7E79WxZYg"
            caption={
              '"I don\'t expect anything from this afternoon", for violin, bass clarinet, violoncello and percussion (2023) – Norrbotten NEO at Time of Music Festival 2023'
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
