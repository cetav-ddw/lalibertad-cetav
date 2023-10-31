import Grid from './Grid';
import TestimonioCard from './TestimonioCard';

export default function TestimonioSection() {
  return (
    <Grid columns={2} p={0}>
      <TestimonioCard />
      <TestimonioCard />
      <TestimonioCard />
      <TestimonioCard />
    </Grid>
  );
}
