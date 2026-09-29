import SeoHead from "../../_components/SeoHead";

const title = "Lean B2B Notes - Christopher Farah";
const description =
  "Reading notes on Lean B2B: finding real business problems, customer interviews, and validating B2B products before building them.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/lean-b2b"
      type="article"
      publishedTime="2026-05-24"
      section="Book Reviews"
      keywords={[
        "Lean B2B",
        "B2B product validation",
        "customer interviews",
        "startup ideas",
      ]}
    />
  );
}
