import FeatureBox from "./FeatureBox";

export default function FeatureImage() {
  return <>
    <FeatureBox container={{ x: 30, y: 226 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Upload images"
      desc="Like others text editors you can also upload images to Kompad."
    />
    <FeatureBox container={{ x: 474, y: 440 }}
      dash={{ x: 6, y: -6, width: 100 }}
      popup={{ x: 116, y: -60 }}
      title="Drag n drop"
      delay={700}
      desc="Besides, it also allows you to drag and drop image directly into it."
    />
    <FeatureBox container={{ x: 415, y: 25 }}
      dash={{ x: 6, y: -6, width: 137 }}
      popup={{ x: 158, y: -24 }}
      delay={900}
      title="Image button"
      desc="Insert direct image link through this button."
    />
  </>
}
