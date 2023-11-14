import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Flex,
} from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function YearFilter({ handleYearMenuClick }) {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton bg="white" color="#313677" minWidth="50px">
        <Flex fontWeight="bold" justifyContent="space-between">
          Generación
          <MdKeyboardArrowDown size="25" />
        </Flex>
      </MenuButton>
      <MenuList minWidth="240px" bg="white" color="black">
        <MenuOptionGroup title="Generaciones" type="checkbox">
          <MenuItemOption
            value="2013"
            onClick={() => handleYearMenuClick('2013')}
          >
            2013
          </MenuItemOption>
          <MenuItemOption
            value="2015"
            onClick={() => handleYearMenuClick('2015')}
          >
            2015
          </MenuItemOption>
          <MenuItemOption
            value="2017"
            onClick={() => handleYearMenuClick('2017')}
          >
            2017
          </MenuItemOption>
          <MenuItemOption
            value="2018"
            onClick={() => handleYearMenuClick('2018')}
          >
            2018
          </MenuItemOption>
          <MenuItemOption
            value="2019"
            onClick={() => handleYearMenuClick('2019')}
          >
            2019
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
}

export default YearFilter;
