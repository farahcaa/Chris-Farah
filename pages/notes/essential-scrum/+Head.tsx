import SeoHead from "../../_components/SeoHead";

const title = "Essential Scrum Notes - Christopher Farah";
const description =
  "Reading notes on Essential Scrum, agile product development, estimation, roles, planning, and technical debt.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/essential-scrum"
      type="article"
      publishedTime="2026-03-01"
      section="Book Reviews"
      keywords={[
        "Essential Scrum",
        "scrum notes",
        "agile development",
        "software project management",
      ]}
    />
  );
}
