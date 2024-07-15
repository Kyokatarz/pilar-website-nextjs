import Image from "next/image";
import HTMLParser from "react-html-parser";

import SubSectionHeader from "@/components/SubSectionHeader";
import Paragraph from "@/components/Paragraph";
import Article from "@/components/Article";
import Section from "@/components/Section";
import TheUgly from "@/../public/assets/foto-horizontal.jpg";
import getDictionary from "../../../../dictionaries/getDictionary";
import RichText from "../../../../components/RichText";

const Introduction = ({ lang }: { lang: string }) => {
  const dictionary = getDictionary(lang);
  return (
    <Section id="landing-introduction">
      <div className="flex items-center justify-center mb-6 max-w-sm flex-col">
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
              {dictionary.page.home.introduction.jobTitle}
            </span>
          </h1>
        </header>

        <SubSectionHeader id="statement" level={2}>
          {dictionary.page.home.introduction.paragraph.artistStatement.header}
        </SubSectionHeader>
        <Paragraph className="mb-12">
          <RichText>
            {
              dictionary.page.home.introduction.paragraph.artistStatement
                .richTextContent
            }
          </RichText>
        </Paragraph>

        <SubSectionHeader level={2}>
          {" "}
          {dictionary.page.home.introduction.paragraph.acknowledgment.header}
        </SubSectionHeader>
        <Paragraph>
          <RichText>
            {
              dictionary.page.home.introduction.paragraph.acknowledgment
                .richTextContent
            }
          </RichText>
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
