// src/App.tsx
import { useCounter } from './store/useCounter'

function App() {
  const { count, increment, decrement } = useCounter()

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>카운터: {count}</h1>
      <button onClick={increment}>+ 증가</button>
      <button onClick={decrement}>- 감소</button>
    </div>
  )
}

export default App