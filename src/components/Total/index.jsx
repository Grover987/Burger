import './styles.css'

const Total = ({ cartTotal }) => {
  return (
    <div className="totalSale">
      <h3>
        Total:{' '}
        <div>
          R$:{cartTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 })}
        </div>{' '}
      </h3>
    </div>
  )
}

export default Total
