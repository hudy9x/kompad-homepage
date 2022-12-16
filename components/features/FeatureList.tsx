
import FeatureBox from "./FeatureBox";

export default function FeatureList() {
  return <>
    <FeatureBox container={{ x: 30, y: 226 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Change list type"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis. Nulla sem metus, gravida vel dictum vel,"
    />
    <FeatureBox container={{ x: 474, y: 340 }}
      dash={{ x: 6, y: -6, width: 100 }}
      popup={{ x: 116, y: -60 }}
      delay={700}
      title="Tasks"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis"
    />
  </>
}
