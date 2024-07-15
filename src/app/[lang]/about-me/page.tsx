import AboutMePage from "../../../pages/AboutMePage";

export default function AboutMe({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log({ lang });
  return <AboutMePage lang={lang} />;
}
