
import FeatureBox from "./FeatureBox";

export default function FeatureCover() {
  return <>

    <FeatureBox container={{ x: 30, y: 156 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Inner shadow"
      desc="Displays an inner shadow for better visibility"
    />
    <FeatureBox container={{ x: 469, y: 74 }}
      dash={{ x: 6, y: -6, width: 117 }}
      popup={{ x: 139, y: -44 }}
      delay={700}
      title="Cover uploading"
      desc="Easy to change your favorite cover image"
    />
  </>
}
