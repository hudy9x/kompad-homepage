import FeatureBox from "./FeatureBox";

export default function FeatureCode() {
  return <>
    <FeatureBox container={{ x: 30, y: 226 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      title="Code highlight"
      delay={500}
      desc={<>
        Highlight your code syntax in markdown way:
        <p className="bg-gray-900 mt-3 py-2  px-4 whitespace-pre rounded">
          ```javascript<br />
          const n = 3;<br />
          ```
        </p>
      </>}
    />
    <FeatureBox container={{ x: 474, y: 440 }}
      dash={{ x: 6, y: -6, width: 100 }}
      popup={{ x: 116, y: -60 }}
      title="Dark theme"
      delay={700}
      desc="For better visual all themes would be displayed in dark mode."
    />
    <FeatureBox container={{ x: 470, y: 25 }}
      dash={{ x: 6, y: -6, width: 137 }}
      popup={{ x: 158, y: -24 }}
      title="Code button"
      delay={900}
      desc="Genereate code block quickly using this button."
    />
  </>
}

