
import FeatureBox from "./FeatureBox";

export default function FeatureDiagram() {
  return <>
    <FeatureBox container={{ x: 20, y: 226 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Sequence diagram"
      desc={<>
        <p className="pb-2">Diplays sequence diagram in preview mode. Easy to update and switching to another diagram. </p>
        <p>For more information: <a className="text-yellow-500 hover:underline" target={"_blank"} href="https://mermaid-js.github.io/mermaid/syntax/sequenceDiagram.html">https://mermaid-js.github.io</a></p>
      </>}
    />
    <FeatureBox container={{ x: 495, y: 25 }}
      dash={{ x: 6, y: -6, width: 137 }}
      popup={{ x: 158, y: -24 }}
      delay={700}
      title="Diagram button"
      desc="Like other features, Kompad also provide a button to create a diagram quickly."
    />
  </>
}

