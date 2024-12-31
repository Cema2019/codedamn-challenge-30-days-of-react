import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";

interface Person {
  name: string;
  age: number;
  occupation: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

const person: Person = {
  name: "John Doe",
  age: 32,
  occupation: "Developer",
};

const address: Address = {
  street: "1234 Main St",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
};

const TabContent = ({ activeTab }: { activeTab: string }) => {
  return (
    <Box sx={{ padding: 2 }}>
      {activeTab === "person" ? (
        <Box>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Occupation: {person.occupation}</p>
        </Box>
      ) : (
        <Box>
          <p>Street: {address.street}</p>
          <p>City: {address.city}</p>
          <p>State: {address.state}</p>
          <p>Zip: {address.zip}</p>
        </Box>
      )}
    </Box>
  );
};

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState<string>("person");

  const handleTabChange = (_: React.SyntheticEvent, newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <Box sx={{ width: 400 }}>
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="tabs">
        <Tab label="Person" value="person" />
        <Tab label="Address" value="address" />
      </Tabs>
      <TabContent activeTab={activeTab} />
    </Box>
  );
};

export default TabsComponent;
