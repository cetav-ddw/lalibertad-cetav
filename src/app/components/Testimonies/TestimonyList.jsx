import { Box } from '@chakra-ui/react';
import Testimony from '@/app/components/Testimonies/Testimony';
import SectionHeading from '@/app/components/SectionHeading';

export default function TestimonyList({ testimonies }) {
  return (
    <>
      {testimonies?.length > 0 ? (
        <Box>
          <SectionHeading title="Testimonios" />
          <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            {testimonies.map(({ id, name, position, quote, avatarSrc }) => {
              return (
                <Testimony
                  key={id}
                  name={name}
                  position={position}
                  quote={quote}
                  avatarSrc={avatarSrc}
                />
              );
            })}
          </Box>
        </Box>
      ) : null}
    </>
  );
}
