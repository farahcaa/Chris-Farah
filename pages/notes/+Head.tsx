import SeoHead from "../_components/SeoHead";

const title = "Notes - Christopher Farah";
const description =
  "Notes from Christopher Farah on software, reading, international work, weight lifting, and things he is learning.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes"
      keywords={[
        "Christopher Farah notes",
        "software notes",
        "book notes",
        "international work experience",
      ]}
    />
  );
}
