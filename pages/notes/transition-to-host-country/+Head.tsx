import SeoHead from "../../_components/SeoHead";

const title = "Transition to Host Country - Christopher Farah";
const description =
  "Notes on arriving in Germany, adjusting to life abroad, language learning, Cologne, Bonn, and early culture shock.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/transition-to-host-country"
      type="article"
      image="/family-lunch.JPG"
      publishedTime="2026-01-10"
      section="International Work Experience"
      keywords={[
        "Germany internship",
        "international work experience",
        "culture shock",
        "Cologne Germany",
      ]}
    />
  );
}
