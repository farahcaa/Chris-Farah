import SeoHead from "../../_components/SeoHead";

const title = "Awaken the Giant Within Notes - Christopher Farah";
const description =
  "Reading notes on Tony Robbins' Awaken the Giant Within: decisions, beliefs, rules, and changing the associations that drive behavior.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/awaken-the-giant-within"
      type="article"
      publishedTime="2026-09-29"
      section="Book Reviews"
      keywords={[
        "Awaken the Giant Within",
        "Tony Robbins",
        "personal development",
        "decision making",
        "habits",
      ]}
    />
  );
}
