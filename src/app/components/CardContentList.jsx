import { Box } from '@chakra-ui/react';
import CardContent from './CardContent';

export default function listCardC({ programs }) {
  return (
    <>
      {programs?.length > 0 ? (
        <Box
          mb="16px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {programs.map(({ id, title, imgSrc }) => {
            return <CardContent key={id} title={title} imgSrc={imgSrc} />;
          })}
        </Box>
      ) : null}
    </>
  );
}
