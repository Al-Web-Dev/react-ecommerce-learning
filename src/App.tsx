import ProductCard from './components/ProductCard'

const products = [
  {
    name: 'Classic T-Shirt',
    price: 29.99,
    colour: 'Blue',
  },
  {
    name: 'Hoodie',
    price: 49.99,
    colour: 'Black',
  },
  {
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
          key={product.name}
          name={product.name}
          price={product.price}
          colour={product.colour}
        />
      ))}
    </main>
  )
}

export default App