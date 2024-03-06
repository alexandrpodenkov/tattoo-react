import { useEffect } from 'react'
import './App.css'

function App() {
  const {tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
     
    </>
  )
}

export default App
