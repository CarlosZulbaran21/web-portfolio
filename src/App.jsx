import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={<div>loading... </div>}>
      <Header />
      <main>
        <Home />
      </main>
    </Suspense>
  );
}

export default App;
