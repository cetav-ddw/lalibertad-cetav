'use client';
import {
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from '@chakra-ui/react';
import { handleOptionClick } from "./components/FormHandler.jsx";
export default function Egresados() {
  return <>
    <Heading as="h1">EGRESADOS PAGE</Heading>
    <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>Carreras</MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup title='Técnicos' type='checkbox'>
            <MenuItemOption value='Post-Producción' onClick={() => handleOptionClick('Post-Producción', 'form1')}>Post-Producción</MenuItemOption>
            <MenuItemOption value='Web' onClick={() => handleOptionClick('Desarrollo Web', 'form1')}>Desarrollo Web</MenuItemOption>
            <MenuItemOption value='Imagen Comercial' onClick={() => handleOptionClick('Imagen Comercial', 'form1')}>Imagen Comercial</MenuItemOption>
            <MenuItemOption value='Animación 3D' onClick={() => handleOptionClick('Animación 3D', 'form1')}>Animación 3D</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      <Menu closeOnSelect={false}>
        <MenuButton as={Button} colorScheme='blue'>Año</MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup title='Generación' type='checkbox'>
            <MenuItemOption value='2013' onClick={() => handleOptionClick('2013', 'form2')}>2013</MenuItemOption>
            <MenuItemOption value='2014' onClick={() => handleOptionClick('2014', 'form2')}>2014</MenuItemOption>
            <MenuItemOption value='2015' onClick={() => handleOptionClick('2015', 'form2')}>2015</MenuItemOption>
            <MenuItemOption value='2016' onClick={() => handleOptionClick('2016', 'form2')}>2016</MenuItemOption>
            <MenuItemOption value='2017' onClick={() => handleOptionClick('2017', 'form2')}>2017</MenuItemOption>
            <MenuItemOption value='2018' onClick={() => handleOptionClick('2018', 'form2')}>2018</MenuItemOption>
            <MenuItemOption value='2019' onClick={() => handleOptionClick('2019', 'form2')}>2019</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
  </>
}
