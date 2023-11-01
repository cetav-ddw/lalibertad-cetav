'use client';
import React, { useState, useEffect } from 'react';
import {
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
  Icon,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import Airtable from 'airtable';
import CardEgresadosContainer from './CardEgresadosContainer';
let timer;
let selectedData;


const FilterMenu = () => {
  const [carreerList, setCarreerList] = useState([]);
  const [yearList, setYearList] = useState([]);


  const handleOptionClick = (value, formId) => {
    if (timer) {
      clearTimeout(timer);
    }
    if (formId === 'Career Menu') {
      if (carreerList.includes(value)) {
        // Si está seleccionado, lo eliminamos de la lista
        setCarreerList(carreerList.filter((v) => v !== value));
      } else {
        // Si no está seleccionado, lo agregamos a la lista
        setCarreerList([...carreerList, value]);
      }
    } else {
      const intValue = parseInt(value);
      if (yearList.includes(intValue)) {
        // Si está seleccionado, lo eliminamos de la lista
        setYearList(yearList.filter((v) => v !== intValue));
      } else {
        // Si no está seleccionado, lo agregamos a la lista
        setYearList([...yearList, intValue]);
      }
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
            const records = await base('Egresados').select({
              view: 'Grid view',
              filterByFormula: `AND(year = "${yearList[j]}", FIND("${carreerList[i]}", {career}))`,
            }).firstPage();
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
          <CardEgresadosContainer uniqueRecords={selectedData}/>

        } catch (error) {
          console.error('Error al obtener datos:', error);
        }
      }
    }, 1000);
  }, [carreerList, yearList]);
  return (
    <Flex justifyContent="center" gap={4} mb={5} mt={5}>
      <form>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            colorScheme="blue"
            bg="white"
            color="black"
            minWidth="150px"
          >
            <Flex justifyContent="space-between">
              Técnico
              <Icon as={BsChevronDown} />
            </Flex>
          </MenuButton>
          <MenuList minWidth="240px" bg="white" color="black">
            <MenuOptionGroup title="Técnicos" type="checkbox">
              <MenuItemOption
                value="Post-Producción"
                onClick={() =>
                  handleOptionClick('Post-Producción', 'Career Menu')
                }
              >
                Post-Producción
              </MenuItemOption>
              <MenuItemOption
                value="Web"
                onClick={() => handleOptionClick('Web', 'Career Menu')}
              >
                Desarrollo Web
              </MenuItemOption>
              <MenuItemOption
                value="Imagen Comercial"
                onClick={() =>
                  handleOptionClick('Imagen Comercial', 'Career Menu')
                }
              >
                Imagen Comercial
              </MenuItemOption>
              <MenuItemOption
                value="Animación 3D"
                onClick={() => handleOptionClick('Animación', 'Career Menu')}
              >
                Animación 3D
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </form>
      <form>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            colorScheme="blue"
            bg="white"
            color="black"
            minWidth="150px"
          >
            <Flex justifyContent="space-between">
              Generación
              <Icon as={BsChevronDown} />
            </Flex>
          </MenuButton>
          <MenuList minWidth="240px" bg="white" color="black">
            <MenuOptionGroup title="Generaciones" type="checkbox">
              <MenuItemOption
                value="2013"
                onClick={() => handleOptionClick('2013', 'Year Menu')}
              >
                2013
              </MenuItemOption>
              <MenuItemOption
                value="2015"
                onClick={() => handleOptionClick('2015', 'Year Menu')}
              >
                2015
              </MenuItemOption>
              <MenuItemOption
                value="2017"
                onClick={() => handleOptionClick('2017', 'Year Menu')}
              >
                2017
              </MenuItemOption>
              <MenuItemOption
                value="2018"
                onClick={() => handleOptionClick('2018', 'Year Menu')}
              >
                2018
              </MenuItemOption>
              <MenuItemOption
                value="2019"
                onClick={() => handleOptionClick('2019', 'Year Menu')}
              >
                2019
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </form>
    </Flex>
  );
};

export default FilterMenu;