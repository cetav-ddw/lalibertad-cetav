import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const TabsList = () => {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsList;
