import React from "react";
import { FaFacebook } from "react-icons/fa";
import { ImSoundcloud2, ImGithub } from "react-icons/im";
import { IconContext } from "react-icons";
import Image from "next/image";
import getDictionary from "@/dictionaries/getDictionary";

import Article from "@/components/Article";
import Section from "@/components/Section";
import Contact from "@/pages/HomePage/sections/Contact";
import ContactPhoto from "@/../public/assets/foto-contact.jpg";

const ContactPage = ({ lang }: { lang: string }) => {
  const dictionary = getDictionary(lang);
  return <Contact />;
};

export default ContactPage;
