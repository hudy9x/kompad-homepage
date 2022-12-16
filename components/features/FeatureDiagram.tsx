
import FeatureBox from "./FeatureBox";

export default function FeatureDiagram() {
  return <>
    <FeatureBox container={{ x: 20, y: 226 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Sequence diagram"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis. Nulla sem metus, gravida vel dictum vel,"
    />
    <FeatureBox container={{ x: 495, y: 25 }}
      dash={{ x: 6, y: -6, width: 137 }}
      popup={{ x: 158, y: -24 }}
      delay={700}
      title="Diagram button"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis"
    />
  </>
}

