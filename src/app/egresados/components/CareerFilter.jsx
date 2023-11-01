import { Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, Icon, Flex } from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function CareerFilter({handleOptionClick}) {
  return(
    <Menu closeOnSelect={false}>
    <MenuButton
      bg="white"
      color="black"
      minWidth="150px"
    >
      <Flex justifyContent="space-between">
      Técnico
      <Icon as={MdKeyboardArrowDown}/>
      </Flex>
    </MenuButton>
    <MenuList minWidth="240px" bg="white" color="black">
      <MenuOptionGroup title="Técnicos" type="checkbox">
        <MenuItemOption
          value="Post-Producción"
          title="Técnicos"
          onClick={() => handleOptionClick('Post-Producción', 'Técnicos')}
        >
          Post-Producción
        </MenuItemOption>
        <MenuItemOption
          value="Web"
          title="Técnicos"
          onClick={() => handleOptionClick('Web', 'Técnicos')}
        >
          Desarrollo Web
        </MenuItemOption>
        <MenuItemOption
          value="Imagen Comercial"
          title="Técnicos"
          onClick={() =>
            handleOptionClick('Imagen Comercial', 'Técnicos')
          }
        >
          Imagen Comercial
        </MenuItemOption>
        <MenuItemOption
          value="Animación 3D"
          title="Técnicos"
          onClick={() => handleOptionClick('Animación', 'Técnicos')}
        >
          Animación 3D
        </MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
  )
}

export default CareerFilter;