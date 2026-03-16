import Button from './components/ui/Button'
import CountdownItem from './components/ui/CountdownItem'
import TopPromoBar from './sections/TopPromoBar'
import Header from './sections/Header'

function App() {
  return (
    <div>
      <h1 className="text-4xl text-red-500 font-bold">
        Tailwind works
      </h1>
      <Button variant="primary">Primary Button</Button>
      
      
      <CountdownItem
        days={3}
        hours={12}
        minutes={45}
        seconds={30}
        variant="default"
      />

      <TopPromoBar />
      <Header />
    </div>
  )
}

export default App