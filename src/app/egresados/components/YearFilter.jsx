import { Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, Icon, Flex } from '@chakra-ui/react';
import { MdKeyboardArrowDown } from 'react-icons/md';

function YearFilter({handleOptionClick}) {
  return(
    <Menu closeOnSelect={false}>
    <MenuButton
      bg="white"
      color="black"
      minWidth="150px"
    >
      <Flex justifyContent="space-between">
      Generación
      <Icon as={MdKeyboardArrowDown}/>
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
  )
}

export default YearFilter;