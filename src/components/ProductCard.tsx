type ProductCardProps = {
  name: string
  price: number
  colour: string
}

function ProductCard({ name, price, colour }: ProductCardProps) {
  return (
    <article>
      
      <h2>{name}</h2>
      <h3>npm run dev</h3>
      <p>£{price.toFixed(2)}</p>
      <p>Colour: {colour}</p>
      <button>Add to basket</button>
    </article>
  )
}

export default ProductCard