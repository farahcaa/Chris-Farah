import SeoHead from "../_components/SeoHead";

const title = "Christopher Farah - Developer";
const description =
  "Christopher Farah is a full-stack developer focused on backend systems, product surfaces, and practical software.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/"
      keywords={[
        "Christopher Farah",
        "software developer",
        "full-stack developer",
        "backend engineer",
      ]}
    />
  );
}
