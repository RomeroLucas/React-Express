import {useState, useEffect} from 'react'
import api from './api'
import Produto from './components/produto'


export default function App() {
  const [x, setX] = useState([])

  useEffect(async () => {
      const dados = await api()
      setX(dados)
  }, [])

  const lista = x.map(item => ( <Produto dados={item} /> ))

  return (
    <div className="App">
      <header className="App-header">
        Seja bem vindo a minha Steam
      </header>

      <main>
        <h3>Produtos</h3>
        <div id="mostruario">
          {lista}
        </div>
      </main>
    </div>
  );

}


