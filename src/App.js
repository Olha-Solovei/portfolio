import "./App.css"
import About from "./components/About"
import Experience from "./components/Experience"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Skills from "./components/Skills"

function App() {
  return (
    <main className='App'>
      <div className='container'>
        <Header />
        <Intro />
        <About />
        <Skills />
        <Experience />
      </div>
    </main>
  )
}

export default App
