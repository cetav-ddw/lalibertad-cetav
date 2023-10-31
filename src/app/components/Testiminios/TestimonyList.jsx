import Grid from './Grid';
import Testimony from './Testimony';

export default function TestimonyList() {
  return (
    <Grid columns={2} p={0}>
      <Testimony
        name="Irene Sanchez"
        position="Frontend Developer"
        quote="Lorem ipsum something soemthin"
      />
      <Testimony
        name="Irene Sanchez"
        position="Frontend Developer"
        quote="Lorem ipsum something soemthin"
      />
      <Testimony
        name="Irene Sanchez"
        position="Frontend Developer"
        quote="Lorem ipsum something soemthin"
      />
      <Testimony
        name="Irene Sanchez"
        position="Frontend Developer"
        quote="Lorem ipsum something soemthin"
      />
    </Grid>
  );
}
