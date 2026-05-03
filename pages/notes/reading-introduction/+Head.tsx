import SeoHead from "../../_components/SeoHead";

const title = "Introduction to My Reading - Christopher Farah";
const description =
  "An introduction to Christopher Farah's reading notes on software, design, finance, real estate, productivity, and practical learning.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/reading-introduction"
      type="article"
      image="https://www.popsci.com/wp-content/uploads/2024/07/buy_physical_books.jpg?quality=85"
      publishedTime="2026-01-15"
      section="Book Reviews"
      keywords={[
        "book notes",
        "reading notes",
        "software books",
        "practical learning",
      ]}
    />
  );
}
