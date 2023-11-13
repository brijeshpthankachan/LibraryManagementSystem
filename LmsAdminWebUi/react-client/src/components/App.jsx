import Home from './Home'
import NavBar from './NavBar'
import Test from './test'
import { DependencyProvider } from 'contexts/DependencyProvider'

function App() {

  const myService = {
    callMe: () => {
      console.log('hello')
    }
  }

  return (
    <div className="text-center">
      <NavBar />
      <Home />
      <DependencyProvider mys={myService}>
        <Test />
      </DependencyProvider>
    </div>
  )
}

export default App