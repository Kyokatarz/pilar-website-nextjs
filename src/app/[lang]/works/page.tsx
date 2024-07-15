import WorksPage from "../../../pages/WorksPage";

export default function Works({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log({ lang });
  return <WorksPage lang={lang} />;
}
