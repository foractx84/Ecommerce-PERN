import Button from './components/ui/Button'
import CountdownItem from './components/ui/CountdownItem'

function App() {
  return (
    <div className="p-10">
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
    </div>
  )
}

export default App