"use client";

import React, { useState } from 'react';
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Checkbox,
  Flex,
  Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function FilterDropdown({ onFilterChange }) {
    const initialSelectedYears = JSON.parse(sessionStorage.getItem('selectedYears') || "[]");
    const initialSelectedCareers = JSON.parse(sessionStorage.getItem('selectedCareers') || "[]");
  
    const [selectedYears, setSelectedYears] = useState(initialSelectedYears);
    const [selectedCareers, setSelectedCareers] = useState(initialSelectedCareers);
  
    const handleYearChange = (year) => {
      let updatedYears = selectedYears.includes(year)
        ? selectedYears.filter((y) => y !== year)
        : [...selectedYears, year];
  
      setSelectedYears(updatedYears);
      sessionStorage.setItem('selectedYears', JSON.stringify(updatedYears)); // Save to session storage
  
      onFilterChange({ years: updatedYears, careers: selectedCareers });
    };
  
    const handleCareerChange = (career) => {
      let updatedCareers = selectedCareers.includes(career)
        ? selectedCareers.filter((c) => c !== career)
        : [...selectedCareers, career];
  
      setSelectedCareers(updatedCareers);
      sessionStorage.setItem('selectedCareers', JSON.stringify(updatedCareers)); // Save to session storage
  
      onFilterChange({ years: selectedYears, careers: updatedCareers });
    };

  return (
    <Box>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} px={4} py={2} mr={3}>
          Select Year
        </MenuButton>
        <MenuList minWidth="240px">
          {[2013, 2015, 2017, 2019].map((year) => (
            <MenuItem key={year} minH="48px" onClick={() => handleYearChange(year)}>
              <Checkbox isChecked={selectedYears.includes(year)} mr={3} />
              <Flex>{year}</Flex>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Menu closeOnSelect={false}>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} px={4} py={2}>
          Select Career
        </MenuButton>
        <MenuList minWidth="240px">
          {['Animación', 'Imagen Comercial', 'Web', 'Post-Producción', 'career'].map((career) => (
            <MenuItem key={career} minH="48px" onClick={() => handleCareerChange(career)}>
              <Checkbox isChecked={selectedCareers.includes(career)} mr={3} />
              <Flex>{career}</Flex>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Box mt={4}>
        <Text fontWeight="bold" mb={2}>Selected Filters:</Text>
        <Flex flexDirection="column">
          <Text fontWeight="semibold" mb={1}>Years:</Text>
          {selectedYears.length ? (
            selectedYears.map((year) => <Text key={year} pl={4}>{year}</Text>)
          ) : (
            <Text pl={4} color="gray.500">None selected</Text>
          )}
          
          <Text fontWeight="semibold" mt={3} mb={1}>Careers:</Text>
          {selectedCareers.length ? (
            selectedCareers.map((career) => <Text key={career} pl={4}>{career}</Text>)
          ) : (
            <Text pl={4} color="gray.500">None selected</Text>
          )}
        </Flex>
      </Box>
    </Box>
  );
}

export default FilterDropdown;