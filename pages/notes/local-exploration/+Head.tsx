import SeoHead from "../../_components/SeoHead";

const title = "Local Exploration & Favorite Places - Christopher Farah";
const description =
  "Notes on exploring my host city in Germany: bike commutes, long runs, favorite spots like Cafe Extrablatt, trips to Köln and Düsseldorf, and life relying on local transportation.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/local-exploration"
      type="article"
      image="/blog-local-5.jpeg"
      publishedTime="2026-07-05"
      section="International Work Experience"
      keywords={[
        "local exploration",
        "public transportation Germany",
        "Köln",
        "Düsseldorf",
        "international internship",
      ]}
    />
  );
}
