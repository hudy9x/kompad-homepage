
import FeatureBox from "./FeatureBox";

export default function FeatureInlineStyle() {
  return <>
    <FeatureBox container={{ x: 130, y: 156 }}
      dash={{ x: -161, y: -6, width: 166 }}
      popup={{ x: -381, y: -60 }}
      title="Strong, Strikethrough, Emphasis, Code"
      delay={500}
      desc="Create a strong, strike-through, emphasis and code text easily with markdown syntax."
    />
    <FeatureBox container={{ x: 354, y: 253 }}
      dash={{ x: 6, y: -6, width: 200 }}
      popup={{ x: 218, y: -36 }}
      title="Hyperlink"
      delay={700}
      desc="It also provide a hyperlink like this."
    />
    <FeatureBox container={{ x: 59, y: 422 }}
      dash={{ x: -121, y: -6, width: 126 }}
      popup={{ x: -345, y: -21 }}
      delay={900}
      title="Shortcut keys"
      desc={<>For quickly manipulation, you can also using shorcut keys like:
        <div className="flex gap-2 text-xs whitespace-nowrap mt-2">
          <div><kbd>Ctrl</kbd> <kbd>b</kbd></div>
          <div><kbd>Ctrl</kbd> <kbd>i</kbd></div>
          <div><kbd>Ctrl</kbd> <kbd>u</kbd></div>
        </div>
      </>}
    />
  </>
}
