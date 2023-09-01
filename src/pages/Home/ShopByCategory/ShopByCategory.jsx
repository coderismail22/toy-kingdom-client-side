import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCardSection from "../../../componentChunks/ToyCardSection/ToyCardSection";

const ShopByCategory = () => {
  const mathToys = "mathtoys";
  const engineeringToys = "engineeringtoys";
  const scienceToys = "sciencetoys";
  return (
    <div>
      <Tabs>
        <div className="flex flex-col items-center justify-center">
          <TabList>
            <Tab>Math Toys</Tab>
            <Tab>Science Toys</Tab>
            <Tab>Engineering Toys</Tab>
          </TabList>
        </div>
        <TabPanel>
          <ToyCardSection category={mathToys}></ToyCardSection>
        </TabPanel>
        <TabPanel>
          <ToyCardSection category={scienceToys}></ToyCardSection>
        </TabPanel>
        <TabPanel>
          <ToyCardSection category={engineeringToys}></ToyCardSection>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
