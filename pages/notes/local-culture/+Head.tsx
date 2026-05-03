import SeoHead from "../../_components/SeoHead";

const title = "Local Culture - Christopher Farah";
const description =
  "Notes on local culture in Germany, Karneval, food, language, everyday trust, and daily life abroad.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/local-culture"
      type="article"
      image="https://europa.tips/wordpress/wp-content/uploads/binche_carnival-768x432.webp"
      publishedTime="2026-03-01"
      section="International Work Experience"
      keywords={[
        "Germany culture",
        "Karneval",
        "international internship",
        "daily life abroad",
      ]}
    />
  );
}
