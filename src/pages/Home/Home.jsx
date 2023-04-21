import { lazy } from 'react';
const Person = lazy(() => import('../../components/Person/Person'));
const ShortDescription = lazy(() =>
  import('../../components/ShortDescription/ShortDescription')
);

export default function Home() {
  return (
    <section className={'home-grid'} id={'home'}>
      <Person />
      <ShortDescription />
    </section>
  );
}
