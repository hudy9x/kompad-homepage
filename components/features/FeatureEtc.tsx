
import FeatureBox from "./FeatureBox";

export default function FeatureEtc() {
  return <>
    <FeatureBox container={{ x: 30, y: 339 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Blockqoutes"
      desc="Compatible with system emoji icons"
    />
    <FeatureBox container={{ x: 510, y: 420 }}
      dash={{ x: 6, y: -6, width: 50 }}
      popup={{ x: 66, y: -60 }}
      title="Dash bar"
      delay={700}
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis"
    />
    <FeatureBox container={{ x: 307, y: 89 }}
      dash={{ x: 6, y: -6, width: 247 }}
      popup={{ x: 265, y: -24 }}
      delay={900}
      title="Emoji"
      desc="Compatible with system emoji icons"
    />
  </>
}
