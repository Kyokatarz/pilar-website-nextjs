import ContactPage from "../../../pages/ContactPage";

export default function Contact({
  params: { lang },
}: {
  params: { lang: string };
}) {
  console.log({ lang });
  return <ContactPage lang={lang} />;
}
