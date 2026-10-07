import { useState } from 'react'



type ProductCardProps = {
  name: string
  price: number
  colour: string
}

function ProductCard({ name, price, colour }: ProductCardProps) {

   const [basketCount, setBasketCount] = useState(0)

  return (
    <article>
      
      <h2>{name}</h2>
      <h3>npm run dev</h3>
      <p>£{price.toFixed(2)}</p>
      <p>Colour: {colour}</p>
      <button onClick={() => setBasketCount(basketCount + 1)}>
  Add to basket
</button>

<p>In basket: {basketCount}</p>
    </article>
  )
}

export default ProductCard