import React from "react";
import { FaFacebook } from "react-icons/fa";
import { ImSoundcloud2, ImGithub } from "react-icons/im";
import Image from "next/image";

import Article from "@/components/Article";
import Section from "@/components/Section";
import ContactPhoto from "@/../public/assets/Contact-photo.png";

type ContactType = {
  hideImage?: boolean;
};

const Contact = ({ hideImage = false }: ContactType) => {
  return (
    <Section id="contact">
      <div className="flex flex-col gap-20 justify-center items-center lg:flex-row">
        {!hideImage && (
          <div className="flex items-center justify-center mb-6 max-w-sm flex-col">
            <Image
              src={ContactPhoto}
              alt=""
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        )}
        <Article>
          <h1 className="text-4xl font-bold text-left mb-8 w-full">Contact</h1>
          <p className="text-left mb-8 border-b-2 border-black pb-4 max-w-max">
            Please, feel free to reach me out for more information about my
            music or research, or any other enquiry.
          </p>
          <div className="flex flex-col items-start mb-8">
            <p>
              <span className="mr-8 font-semibold">Email: </span>
              <span>pilota97@gmail.com</span>
            </p>
            <p>
              <span className="mr-8 font-semibold">Phone: </span>
              <span>+358 414 955 736</span>
            </p>
          </div>
          <div className="flex flex-row mb-8">
            <a
              href="https://www.facebook.com/pilota.miralles"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <FaFacebook size="2.5em" color="#3b5998" />
            </a>
            <a
              href="https://soundcloud.com/pilar-miralles-huh"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
            >
              <ImSoundcloud2 size="2.5em" color="#ff7700" />
            </a>
            <a
              href="https://github.com/pilarmiralles"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub size="2.5em" color="#000000" />
            </a>
          </div>
        </Article>
      </div>
    </Section>
  );
};

export default Contact;
