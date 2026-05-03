import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
  ssr: false,
  prerender: true,
  extends: [vikeReact],
  title: "Christopher Farah",
  description:
    "Personal site and notes from Christopher Farah, a developer studying Computer Science at the University of Cincinnati.",
  favicon: "/code-brackets.svg",
  lang: "en",
} satisfies Config;
