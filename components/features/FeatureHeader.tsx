import FeatureBox from "./FeatureBox";

export default function FeatureHeader() {
  return <>

    <FeatureBox container={{ x: 30, y: 156 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      title="Heading"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis. Nulla sem metus, gravida vel dictum vel,"
    />
    <FeatureBox container={{ x: 169, y: 54 }}
      dash={{ x: 6, y: -6, width: 117 }}
      popup={{ x: 139, y: -44 }}
      title="Heading button"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
    <FeatureBox container={{ x: 269, y: 454 }}
      dash={{ x: 6, y: -6, width: 195 }}
      popup={{ x: 214, y: -26 }}
      title="Markdown syntax"
      desc="Just typing # as h1, ## as h2 and so on. The editor will do the rest"
    />
  </>
}
