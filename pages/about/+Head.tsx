import SeoHead from "../_components/SeoHead";

const title = "About - Christopher Farah";
const description =
  "About Christopher Farah, a developer studying Computer Science at the University of Cincinnati and completing an internship abroad in Germany.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/about"
      type="profile"
      keywords={[
        "Christopher Farah",
        "University of Cincinnati",
        "Computer Science",
        "software engineering internship",
      ]}
    />
  );
}
