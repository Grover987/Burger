import './styles.css'

export const Product = ({ name, category, price, img, id, handleClick }) => {
  return (
    <li>
      <div className="imgBack">
        <img src={img} alt="imagem Produto" />
      </div>
      <h3 className="productName">{name}</h3>
      <p className="description">{category}</p>
      <p className="price">
        R$: {price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
      </p>
      <button className={'add'} onClick={() => handleClick(id)}>
        Adicionar
      </button>
    </li>
  )
}
