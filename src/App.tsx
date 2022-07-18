import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './reducers/reducers'
import { countSelector, increase, decrease, increaseBy } from './reducers/counter'
import Counter from './components/Counter';

function App() {
  const count = useSelector(countSelector);
  const dispatch = useDispatch(); 
  return (
    <Counter
      count={count}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
      onIncreaseBy={(diff : number) => dispatch(increaseBy(diff))}
    />
  );
}

export default App;
