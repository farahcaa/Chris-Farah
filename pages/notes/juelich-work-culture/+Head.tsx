import SeoHead from "../../_components/SeoHead";

const title = "Forschungszentrum Julich & Work Culture - Christopher Farah";
const description =
  "Notes on working at Forschungszentrum Julich, reactor safety software, containmentFoam, performance engineering, and work culture in Germany.";

export default function Head() {
  return (
    <SeoHead
      title={title}
      description={description}
      path="/notes/juelich-work-culture"
      type="article"
      image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhycologne.de%2Fwp-content%2Fuploads%2F2021%2F10%2Fforschungszentrumjuelich.jpg&f=1&nofb=1&ipt=c545b75b9fad89ddada0e50095c2a8d7c37be734b7b65a8b412c89f9c154afd0"
      publishedTime="2026-04-05"
      section="International Work Experience"
      keywords={[
        "Forschungszentrum Julich",
        "containmentFoam",
        "performance engineering",
        "reactor safety software",
      ]}
    />
  );
}
