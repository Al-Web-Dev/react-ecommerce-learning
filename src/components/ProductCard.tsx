type ProductCardProps = {
  name: string
  price: number
  colour: string
  quantity: number
  onQuantityChange: (change: number) => void
}

function ProductCard({
  name,
  price,
  colour,
  quantity,
  onQuantityChange,
}: ProductCardProps) {
  return (
    <article>
      <h2>{name}</h2>
      <p>£{price.toFixed(2)}</p>
      <p>Colour: {colour}</p>

      <button
        onClick={() => onQuantityChange(-1)}
        disabled={quantity === 0}
      >
        −
      </button>

      <span> {quantity} </span>

      <button onClick={() => onQuantityChange(1)}>
        +
      </button>

      <p>In basket: {quantity}</p>
    </article>
  )
}

export default ProductCard