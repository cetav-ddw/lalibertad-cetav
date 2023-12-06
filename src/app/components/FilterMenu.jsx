'use client';
import React, { useState, useEffect } from 'react';
import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import Airtable from 'airtable';
import CardEgresadosContainer from './CardEgresadosContainer';
import CareerFilter from './CareerFilter';
import YearFilter from './YearFilter';

const FilterMenu = () => {
  const [carreerList, setCarreerList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [uniqueRecords, setUniqueRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCareerMenuClick = (value) => {
    if (carreerList.includes(value)) {
      setCarreerList(carreerList.filter((v) => v !== value));
    } else {
      setCarreerList([...carreerList, value]);
    }
  };
  const handleYearMenuClick = (value) => {
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
        setLoading(true);
        let records;

        if (carreerList.length === 0 && yearList.length === 0) {
          records = await base('Egresados').select().all();
        } else {
          if (carreerList.length === 0) {
            carreerList = [
              'Animación',
              'Imagen Comercial',
              'Web',
              'Post-Producción',
            ];
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
      } finally {
        setLoading(false);
      }
    };

    fetchData(carreerList, yearList);

    return () => {
      setLoading(false);
    };
  }, [carreerList, yearList]);
  return (
    <>
      <Text
        width="80%"
        margin="auto"
        textAlign="center"
        fontSize={{ base: 'sm', md: 'lg' }}
        mb="4"
      >
        Nuestra página web te permite explorar y conectarte con nuestra red de
        egresados.
      </Text>
      <Text
        width="80%"
        margin="auto"
        textAlign="center"
        fontSize={{ base: 'sm', md: 'lg' }}
      >
        Filtrá por carrera y fecha de graduación, para que podás encontrar
        rápidamente el talento adecuado para el trabajo.
      </Text>
      <Flex justifyContent="center" gap={4} mb={5} mt={5}>
        <CareerFilter handleCareerMenuClick={handleCareerMenuClick} />
        <YearFilter handleYearMenuClick={handleYearMenuClick} />
      </Flex>
      <Box style={{ textAlign: 'center', marginTop: '50px' }}>
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#313677"
            size="xl"
          />
        )}
        {!loading && uniqueRecords.length === 0 && (
          <Text style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
            No hay resultados.
          </Text>
        )}
      </Box>
      {!loading && uniqueRecords.length > 0 && (
        <CardEgresadosContainer uniqueRecords={uniqueRecords} />
      )}
    </>
  );
};

export default FilterMenu;
