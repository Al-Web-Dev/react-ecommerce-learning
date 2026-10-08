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
  return (
    <main>
      <h1>React E-commerce Learning</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          colour={product.colour}
        />
      ))}
    </main>
  )
}

export default App