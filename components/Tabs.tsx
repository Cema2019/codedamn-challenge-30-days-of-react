import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';

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
  name: 'John Doe',
  age: 32,
  occupation: 'Developer',
};

const address: Address = {
  street: '1234 Main St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94107',
};

const TabContent = ({ activeTab }: { activeTab: string }) => {
  const { name, age, occupation } = person;
  const { street, city, state, zip } = address;

  return (
    <Box sx={{ padding: 2 }}>
      {activeTab === 'person' ? (
        <Box>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Occupation: {occupation}</p>
        </Box>
      ) : (
        <Box>
          <p>Street: {street}</p>
          <p>City: {city}</p>
          <p>State: {state}</p>
          <p>Zip: {zip}</p>
        </Box>
      )}
    </Box>
  );
};

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState<string>('person');

  const handleTabChange = (_: React.SyntheticEvent, newTab: string) => {
    setActiveTab(newTab);
  };

  return (
    <Box
      sx={{
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90%',
        margin: 'auto',
      }}
    >
      <Tabs value={activeTab} onChange={handleTabChange} aria-label="tabs">
        <Tab
          label="Person"
          value="person"
          sx={{ border: 1, borderRadius: '8px', mr: 1 }}
        />
        <Tab
          label="Address"
          value="address"
          sx={{ border: 1, borderRadius: '8px' }}
        />
      </Tabs>
      <TabContent activeTab={activeTab} />
    </Box>
  );
};

export default TabsComponent;
