import { useState } from 'react'
import MenuContainer from './components/MenuContainer'
import Cart from './components/Cart'
import Total from './components/Total'
import './App.css'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Hamburguer',
      category: 'Sanduíches',
      price: 14.0,
      img: 'https://i.ibb.co/fpVHnZL/hamburguer.png'
    },
    {
      id: 2,
      name: 'X-Burguer',
      category: 'Sanduíches',
      price: 16.0,
      img: 'https://i.ibb.co/djbw6LV/x-burgue.png'
    },
    {
      id: 3,
      name: 'Big Kenzie',
      category: 'Sanduíches',
      price: 18.0,
      img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png'
    },
    {
      id: 4,
      name: 'Fanta Guaraná',
      category: 'Bebidas',
      price: 5.0,
      img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png'
    },
    {
      id: 5,
      name: 'Coca',
      category: 'Bebidas',
      price: 4.99,
      img: 'https://i.ibb.co/fxCGP7k/coca-cola.png'
    },
    {
      id: 6,
      name: 'Fanta',
      category: 'Bebidas',
      price: 4.99,
      img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png'
    }
  ])

  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [userInput, setUserInput] = useState('')

  const showProducts = text => {
    let showed = products.filter(item => {
      return (
        item.name.toLowerCase() === text.toLowerCase() ||
        item.category.toLowerCase() === text.toLowerCase()
      )
    })
    setFilteredProducts(showed)
  }

  const handleClick = productId => {
    const findedProduct = products.find(element => element.id === productId)
    if (currentSale.includes(findedProduct) === false) {
      setCurrentSale([...currentSale, findedProduct])
    }
  }

  const attValue = () => {
    let totalValue = currentSale.reduce((acc, currentValue) => {
      return currentValue.price + acc
    }, 0)
    setCartTotal(totalValue)
  }

  return (
    <div className="App">
      <header className="header">
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <div>
          <input
            placeholder="Digitar pesquisa"
            type="text"
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
          />
          <button onClick={() => showProducts(userInput)}>Pesquisar</button>
        </div>
      </header>
      <main className="container">
        <div className="productMain">
          {filteredProducts.length === 0 ? (
            <MenuContainer
              products={products}
              handleClick={handleClick}
              attValue={attValue}
            />
          ) : (
            <>
              <h2>Resultado da Busca:</h2>
              <MenuContainer
                products={filteredProducts}
                handleClick={handleClick}
                attValue={attValue}
              />
            </>
          )}
        </div>

        <div className="cartMain">
          <div className="carrinhoTitulo">
            <h3>Carrinho de Compras</h3>
          </div>

          {currentSale.length === 0 ? (
            <h2>O carrinho esta vazio</h2>
          ) : (
            <Cart
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              attValue={attValue}
            />
          )}

          <Total cartTotal={cartTotal} />

          <button className="removeAll" onClick={() => setCurrentSale([])}>
            Remover Todos
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
