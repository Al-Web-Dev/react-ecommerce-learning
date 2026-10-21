import { useState } from 'react'
import ProductCard from './components/ProductCard'
import BasketSummary from './components/BasketSummary'

type Product = {
  id: number
  name: string
  price: number
  colour: string
  stock: number
}

const products: Product[] = [
  {
    id: 1,
    name: 'Not Classic T-Shirt',
    price: 29.99,
    colour: 'Blue',
    stock: 3
  },
  {
    id: 2,
    name: 'Hoodie',
    price: 49.99,
    colour: 'Black',
    stock: 5
  },
  {
    id: 3,
    name: 'Running Jacket',
    price: 69.99,
    colour: 'Green',
    stock: 0
  },
]


function App() {

  const [inStock, setInStock] = useState(false);

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

const totalPrice = products.reduce(
  (total, product) =>
    total + product.price * (basketCounts[product.id] ?? 0),
  0,
)


  return (
    <main>
      <h1>React E-commerce Learning</h1>

<BasketSummary
  totalItems={totalItems}
  totalPrice={totalPrice}
/>

<label>
  <input
    type="checkbox"
    checked={inStock}
    onChange={(event) => setInStock(event.target.checked)}
  />
  In stock only
</label>

    
      {products
      .filter((product) => !inStock || product.stock > 0)
      .map((product) => (
  <ProductCard
    key={product.id}
    name={product.name}
    price={product.price}
    colour={product.colour}
    quantity={basketCounts[product.id] ?? 0}
    onQuantityChange={(change) =>
      updateQuantity(product.id, change)
    }
    stock={product.stock}
  />
))}

   
      
    </main>
  )
}

export default App