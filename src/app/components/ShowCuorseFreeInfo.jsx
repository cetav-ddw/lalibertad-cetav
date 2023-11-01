import { List, ListItem } from '@chakra-ui/react';

import React from 'react'

export const ShowCuorseFreeInfo = () => {
  return (
    {showDescription && details?.length > 0 ? (
      <List px="2" py="4" fontSize="sm">
        {details.map(({ id, modalidad }) => {
          return (
            <ListItem
              key={id}
            >{`Modalidad: ${modalidad}`}</ListItem>
          );
        })}
      </List>
    ) : null}
  )
}

