import FeatureBox from "./FeatureBox";

export default function FeatureImage() {
  return <>
    <FeatureBox container={{x: 30, y: 226}} 
      dash={{x: -58, y: -6, width: 63}} 
      popup={{x: -270, y: -60}}
      title="Upload images"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis. Nulla sem metus, gravida vel dictum vel,"
      />
    <FeatureBox container={{x: 474, y: 440}} 
      dash={{x: 6, y: -6, width: 100}} 
      popup={{x: 116, y: -60}}
      title="Drag n drop"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis"
      />
    <FeatureBox container={{x: 415, y: 25}} 
      dash={{x: 6, y: -6, width: 137}} 
      popup={{x: 158, y: -24}}
      title="Image button"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis"
      />
  </>
}
