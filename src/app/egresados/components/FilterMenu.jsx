'use client';
import React, { useState, useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import Airtable from 'airtable';
import CardEgresadosContainer from './CardEgresadosContainer';
import CareerFilter from './CareerFilter';
import YearFilter from './YearFilter';

let timer;


const FilterMenu = () => {
  const [carreerList, setCarreerList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [uniqueRecords, setUniqueRecords] = useState([]);

  const handleCareerMenuClick = (value) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (carreerList.includes(value)) {
      setCarreerList(carreerList.filter((v) => v !== value));
    } else {
      setCarreerList([...carreerList, value]);
    }
  };
  const handleYearMenuClick = (value) => {
    if (timer) {
      clearTimeout(timer);
    }
    const intValue = parseInt(value);
    if (yearList.includes(intValue)) {
      setYearList(yearList.filter((v) => v !== intValue));
    } else {
      setYearList([...yearList, intValue]);
    }
  };

  useEffect(() => {
    const base = new Airtable({
      apiKey: process.env.NEXT_PUBLIC_AIRTABLE_TOKEN,
    }).base('apphEdTpWzyL0aZdp');
  
    const fetchData = async (carreerList, yearList) => {
      try {
        let records;
  
        if (carreerList.length === 0 && yearList.length === 0) {
          records = await base('Egresados').select().all();
        } else {  
          if (carreerList.length === 0) {
            carreerList = ['Animación', 'Imagen Comercial', 'Web', 'Post-Producción'];
          }
          if (yearList.length === 0) {
            yearList = ['2013', '2015', '2017', '2018', '2019'];
          }
  
          for (let i = 0; i < carreerList.length; i++) {
            for (let j = 0; j < yearList.length; j++) {
              const filtered = await base('Egresados')
                .select({
                  view: 'Grid view',
                  filterByFormula: `AND(year = "${yearList[j]}", FIND("${carreerList[i]}", {career}))`,
                })
                .firstPage();
              records = records ? records.concat(filtered) : filtered;
            }
          }
        }
  
        setUniqueRecords(records);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
  
    timer = setTimeout(fetchData, 1000, carreerList, yearList);
  
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
