'use client';
import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import Airtable from 'airtable';
import CardEgresadosContainer from './CardEgresadosContainer';
let timer;
let selectedData;

import CareerFilter from './CareerFilter';
import YearFilter from './YearFilter';

const FilterMenu = () => {
  const [carreerList, setCarreerList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [uniqueRecords, setUniqueRecords] = useState([]);

  const handleCareerMenuClick = (value) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (carreerList.includes(value)) {
      // Si está seleccionado, lo eliminamos de la lista
      setCarreerList(carreerList.filter((v) => v !== value));
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      setCarreerList([...carreerList, value]);
    }
  };
  const handleYearMenuClick = (value) => {
    if (timer) {
      clearTimeout(timer);
    }
    const intValue = parseInt(value);
    if (yearList.includes(intValue)) {
      // Si está seleccionado, lo eliminamos de la lista
      setYearList(yearList.filter((v) => v !== intValue));
    } else {
      // Si no está seleccionado, lo agregamos a la lista
      setYearList([...yearList, intValue]);
    }
  };

  useEffect(() => {
    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
    }).base('apphEdTpWzyL0aZdp');
    const filteredData = async (carreerList, yearList) => {
      const uniqueRecords = [];
      try {
        for (let i = 0; i < carreerList.length; i++) {
          for (let j = 0; j < yearList.length; j++) {
            const records = await base('Egresados')
              .select({
                view: 'Grid view',
                filterByFormula: `AND(year = "${yearList[j]}", FIND("${carreerList[i]}", {career}))`,
              })
              .firstPage();
            records.forEach((record) => {
              uniqueRecords.push(record);
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
      return uniqueRecords;
    };
    timer = setTimeout(async () => {
      if (yearList.length > 0 && carreerList.length > 0) {
        try {
          selectedData = await filteredData(carreerList, yearList);
          setUniqueRecords(selectedData);
        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [carreerList, yearList]);
  return (
    <>
      <Flex justifyContent="center" gap={4} mb={5} mt={5}>
        <CareerFilter handleCareerMenuClick={handleCareerMenuClick} />
        <YearFilter handleYearMenuClick={handleYearMenuClick} />
      </Flex>
      {uniqueRecords.length > 0 && (
        <CardEgresadosContainer uniqueRecords={uniqueRecords} />
      )}
    </>
  );
};

export default FilterMenu;
