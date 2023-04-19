import './Home.css';

import { lazy } from 'react';
const Person = lazy(() => import('../../components/Person/Person'));
const ShortDescription = lazy(() =>
  import('../../components/ShortDescription/ShortDescription')
);

export default function Home() {
  return (
    <div className={'home-grid'}>
      <Person />
      <ShortDescription />
    </div>
  );
}
