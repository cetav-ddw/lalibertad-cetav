import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function CareerFilter({ handleCareerMenuClick }) {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton bg="white" color="#313677" minWidth="50px">
        <Flex
          fontWeight="bold"
          alignItems="center"
          justifyContent="space-between"
        >
          Técnico
          <Icon as={MdKeyboardArrowDown} />
        </Flex>
      </MenuButton>
      <MenuList minWidth="240px" bg="white" color="black">
        <MenuOptionGroup title="Técnicos" type="checkbox">
          <MenuItemOption
            value="Post-Producción"
            title="Técnicos"
            onClick={() => handleCareerMenuClick('Postproducción Audiovisual')}
          >
            Post-Producción
          </MenuItemOption>
          <MenuItemOption
            value="Web"
            title="Técnicos"
            onClick={() => handleCareerMenuClick('Diseño y Desarrollo WEB')}
          >
            Desarrollo Web
          </MenuItemOption>
          <MenuItemOption
            value="Imagen Comercial"
            title="Técnicos"
            onClick={() => handleCareerMenuClick('Mercadeo Digital y Diseño')}
          >
            Imagen Comercial
          </MenuItemOption>
          <MenuItemOption
            value="Animación 3D"
            title="Técnicos"
            onClick={() => handleCareerMenuClick('Animación 3D')}
          >
            Animación 3D
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default CareerFilter;
