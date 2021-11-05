import './styles.css'
const Cart = ({ currentSale, setCurrentSale, attValue }) => {
  const cancelSale = product => {
    let filterSale = currentSale.filter((value, index) => {
      return index !== product
    })
    attValue()
    return setCurrentSale(filterSale)
  }

  return (
    <ul className="carrinhoLista">
      {currentSale.map((element, index) => (
        <li className="carrinho" key={index}>
          <div className="imgdesc">
            <img src={element.img} alt="imagem Produto" />
            <div className="desc">
              <h3>{element.name}</h3>
              <p>{element.category}</p>
            </div>
          </div>
          <button onClick={() => cancelSale(index)}>Remover</button>
        </li>
      ))}
    </ul>
  )
}

export default Cart
