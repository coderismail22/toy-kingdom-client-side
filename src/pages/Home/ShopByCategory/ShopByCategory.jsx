import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCardSection from "../../../componentChunks/ToyCardSection/ToyCardSection";

const ShopByCategory = () => {
const mathToys = "mathtoys";
const engineeringToys = "engineeringtoys";
const scienceToys = "sciencetoys";
  return (
    <Tabs>
      <TabList>
        <Tab>Math Toys</Tab>
        <Tab>Science Toys</Tab>
        <Tab>Engineering Toys</Tab>
      </TabList>
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
  );
};

export default ShopByCategory;
