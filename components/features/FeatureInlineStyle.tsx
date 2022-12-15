
import FeatureBox from "./FeatureBox";

export default function FeatureInlineStyle() {
  return <>
    <FeatureBox container={{ x: 130, y: 156 }}
      dash={{ x: -161, y: -6, width: 166 }}
      popup={{ x: -381, y: -60 }}
      title="Strong, Strikethrough, Emphasis, Code"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis. Nulla sem metus, gravida vel dictum vel,"
    />
    <FeatureBox container={{ x: 354, y: 253 }}
      dash={{ x: 6, y: -6, width: 200 }}
      popup={{ x: 218, y: -36 }}
      title="Hyperlink"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse eu ornare felis"
    />
    <FeatureBox container={{ x: 59, y: 422 }}
      dash={{ x: -121, y: -6, width: 126 }}
      popup={{ x: -345, y: -21 }}
      title="Shortcut keys"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />
  </>
}
