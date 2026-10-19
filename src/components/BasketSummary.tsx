
type BasketSummaryProps = {
  totalItems: number
  totalPrice: number
}

function BasketSummary({
  totalItems,
  totalPrice,
}: BasketSummaryProps) {
  return (
    <section>
      <h2>Your Basket</h2>

      <p>Total items in basket: {totalItems}</p>

      <p>
  Total price: £{totalPrice.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}
</p>

      {totalItems === 0
        ? <p>Your basket is empty.</p>
        : <p>Your basket has items in it!</p>
      }
    </section>
  )
}

export default BasketSummary
