import SeoHead from "../../_components/SeoHead";

const title = "Weight Lifting Notes - Christopher Farah";
const description =
  "Coming soon: training notes, lifting progress, programming ideas, and lessons from the gym.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/weight-lifting"
      type="article"
      publishedTime="2026-05-03"
      section="Weight Lifting"
      keywords={[
        "weight lifting notes",
        "training notes",
        "lifting progress",
        "gym programming",
      ]}
    />
  );
}
