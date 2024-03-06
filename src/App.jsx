import { useEffect } from 'react'
import './App.css'
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
     <h1>YOYOYOYYOYO</h1>
    </>
  )
}

export default App
