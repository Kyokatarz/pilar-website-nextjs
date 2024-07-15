import MediaPage from "@/pages/MediaPage";

export default function Media({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log({ lang });
  return <MediaPage lang={lang} />;
}
