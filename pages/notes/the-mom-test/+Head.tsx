import SeoHead from "../../_components/SeoHead";

const title = "The Mom Test Notes - Christopher Farah";
const description =
  "Reading notes on The Mom Test, customer discovery, honest feedback, and validating product ideas through better questions.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/the-mom-test"
      type="article"
      publishedTime="2026-10-04"
      section="Book Reviews"
      keywords={[
        "The Mom Test",
        "customer discovery",
        "startup ideas",
        "product feedback",
      ]}
    />
  );
}
