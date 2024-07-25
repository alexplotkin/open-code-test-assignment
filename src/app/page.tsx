import { Hero } from '@/app/resources/hero';
import { Banner } from '@/app/resources/banner';
import { Grid } from '@/app/resources/grid';
import { Search } from '@/app/resources/search';

export default function Home() {
  return (
    <>
      <Hero />
      <Search />
      <Grid />
      <Banner />
    </>
  );
}
