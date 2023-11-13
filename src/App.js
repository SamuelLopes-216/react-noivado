import Title from "./componentes/title";
import Counter from "./componentes/Counter";

import useCountdown from "./hooks/useCountdow";

import './App.css';

function App() {
  const [day, hour, minute, second] = useCountdown("nov 25, 2023 12:00:00")
  return (
    <div className="App" id="coutdown">
      <div className='container'>
        <Title title="Contagem Regressiva"/>
        <div className='countdown-container'>
          <Counter title= "Dias" number={day} />
          <Counter title= "Horas" number={hour} />
          <Counter title= "Minutos" number={minute} />
          <Counter title= "Segundos" number={second} />
        </div>
      </div>
    </div>
  );
}

export default App;
