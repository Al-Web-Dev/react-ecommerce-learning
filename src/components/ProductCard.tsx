type ProductCardProps = {
  name: string
  price: number
  colour: string
  stock: number
  quantity: number
  onQuantityChange: (change: number) => void
}

function ProductCard({
  name,
  price,
  colour,
  stock,
  quantity,
  onQuantityChange,
}: ProductCardProps) {

  const remainingStock = stock - quantity;

 

  return (
    <article>
      <h2>{name}</h2>
      <p>£{price.toFixed(2)}</p>
      <p>Colour: {colour}</p>

      {remainingStock > 0 && remainingStock <= 2 && (
  <p>Only {remainingStock} left in stock!</p>
)}

     

    <button
  onClick={() => onQuantityChange(-1)}
  disabled={quantity === 0}
  aria-label={`Remove one ${name} from basket`}
>
  −
</button>

      <span> {quantity} </span>

     <button
  onClick={() => onQuantityChange(1)}
  aria-label={`Add one ${name} to basket`}
  disabled={quantity >= stock}
>
  +
</button>

      <p>In basket: {quantity}</p>
    </article>
  )
}

export default ProductCard