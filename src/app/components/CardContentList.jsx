import { Box } from '@chakra-ui/react';
import ProgramCards from './CardContent';

export default function ProgramsCardsList({ programs }) {
  return (
    <>
      {programs?.length > 0 ? (
        <Box
          mb="16"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {programs.map(({ id, title, imgSrc }) => {
            return <ProgramCards key={id} title={title} imgSrc={imgSrc} />;
          })}
        </Box>
      ) : null}
    </>
  );
}