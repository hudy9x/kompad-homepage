
import FeatureBox from "./FeatureBox";

export default function FeatureList() {
  return <>
    <FeatureBox container={{ x: 30, y: 226 }}
      dash={{ x: -58, y: -6, width: 63 }}
      popup={{ x: -270, y: -60 }}
      delay={500}
      title="Change list type"
      desc="There are two type of listing that you can use: ordered list and unodered list."
    />
    <FeatureBox container={{ x: 474, y: 340 }}
      dash={{ x: 6, y: -6, width: 100 }}
      popup={{ x: 116, y: -60 }}
      delay={700}
      title="Tasks"
      desc={<>Additional, Kompad also have a task list. Find it on control button section or just typing: 
        <div className="bg-gray-900 px-3 py-2 mt-2 rounded">
          <div>[] task 1</div>
          <div>[x] task 2</div>
        </div>
      </>}
    />
  </>
}
