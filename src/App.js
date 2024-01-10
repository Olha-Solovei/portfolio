import "./App.css"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Skills from "./components/Skills"

function App() {
  return (
    <main className='App'>
      <div className='container'>
        <Header />
        <Intro />
        <Skills />
      </div>
    </main>
  )
}

export default App
