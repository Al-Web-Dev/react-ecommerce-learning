import { useState } from 'react'
import ProductCard from './components/ProductCard'

type Product = {
  id: number
  name: string
  price: number
  colour: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Not Classic T-Shirt',
    price: 29.99,
    colour: 'Blue',
  },
  {
    id: 2,
    name: 'Hoodie',
    price: 49.99,
    colour: 'Black',
  },
  {
    id: 3,
    name: 'Running Jacket',
    price: 69.99,
    colour: 'Green',
  },
]


function App() {

  const [basketCounts, setBasketCounts] =
  useState<Record<number, number>>({})

const updateQuantity = (productId: number, change: number) => {
  setBasketCounts((previousCounts) => ({
    ...previousCounts,
    [productId]: Math.max(
      0,
      (previousCounts[productId] ?? 0) + change,
    ),
  }))
}

const totalItems = Object.values(basketCounts).reduce(
  (total, quantity) => total + quantity,
  0,
)


  return (
    <main>
      <h1>React E-commerce Learning</h1>

      <p>Total items in basket: {totalItems}</p>

      {products.map((product) => (
  <ProductCard
    key={product.id}
    name={product.name}
    price={product.price}
    colour={product.colour}
    quantity={basketCounts[product.id] ?? 0}
    onQuantityChange={(change) =>
      updateQuantity(product.id, change)
    }
  />
))}

   
      
    </main>
  )
}

export default App