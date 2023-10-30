import './App.css';
import { Portfolio } from './components/Portfolio';
import { portfolioItems } from './data';

function App() {
  const items = portfolioItems.map((item, index) => ({id: index,...item}));
  return (
    <>
      <Portfolio items={items} />
    </>
  )
}

export default App
