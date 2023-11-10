'use client';
import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import CareerFilter from './CareerFilter';
import YearFilter from './YearFilter';


const FilterMenu = () => {
  const [carreerList, setCarreerList] = useState([]);
  const [yearList, setYearList] = useState([]);

  const handleCareerMenuClick = (value) => {
    if (carreerList.includes(value)) {
      // Si está seleccionado, lo eliminamos de la lista
      setCarreerList(carreerList.filter((v) => v !== value));
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      setCarreerList([...carreerList, value]);
    }
  };
  const handleYearMenuClick = (value) => {
    const intValue = parseInt(value);
    if (yearList.includes(intValue)) {
      // Si está seleccionado, lo eliminamos de la lista
      setYearList(yearList.filter((v) => v !== intValue));
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      setYearList([...yearList, intValue]);
    }
  };
  return (
    <Flex justifyContent="center" gap={4} mb={5} mt={5}>
      <CareerFilter handleCareerMenuClick={handleCareerMenuClick} />
      <YearFilter handleYearMenuClick={handleYearMenuClick} />
    </Flex>
  );
};

export default FilterMenu;
