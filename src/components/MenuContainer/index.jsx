import { Product } from '../Product'

const MenuContainer = ({ products, handleClick, attValue }) => {
  attValue()
  return (
    <ul>
      {products.map(element => (
        <Product
          key={Element.id}
          img={element.img}
          name={element.name}
          category={element.category}
          price={element.price}
          handleClick={handleClick}
          id={element.id}
        />
      ))}
    </ul>
  )
}

export default MenuContainer
