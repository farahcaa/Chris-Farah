import SeoHead from "../../_components/SeoHead";

const title = "Excursions and Travel - Christopher Farah";
const description =
  "Notes on the bigger trips taken while living and working in Germany: weekend excursions, nearby countries, castles, and historic places.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/excursions-and-travel"
      type="article"
      publishedTime="2026-07-31"
      section="International Work Experience"
      keywords={[
        "excursions",
        "travel in Europe",
        "weekend trips Germany",
        "castles",
        "international internship",
      ]}
    />
  );
}
