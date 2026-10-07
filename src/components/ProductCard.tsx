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
      <p>£{price.toFixed(2)}</p>
      <p>Colour: {colour}</p>
       <button
  onClick={() => setBasketCount(prevCount => prevCount - 1)}
  disabled={basketCount === 0}
>
  −
</button>

  <span> {basketCount} </span>

  <button onClick={() => setBasketCount(prevCount => prevCount + 1)}>
    +
  </button>

<p>In basket: {basketCount}</p>
    </article>
  )
}

export default ProductCard