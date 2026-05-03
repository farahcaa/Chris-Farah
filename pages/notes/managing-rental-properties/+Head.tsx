import SeoHead from "../../_components/SeoHead";

const title = "Managing Rental Properties Notes - Christopher Farah";
const description =
  "Key takeaways on fair housing, tenant standards, documentation, cash for keys, contractor risk, and rental property management.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/managing-rental-properties"
      type="article"
      image="/scrum-manager.jpeg"
      publishedTime="2026-02-28"
      section="Book Reviews"
      keywords={[
        "rental property management",
        "fair housing",
        "landlord notes",
        "real estate book notes",
      ]}
    />
  );
}
