import ScrollDriver from './components/ScrollDriver'
import Shell from './components/Shell'
import WhatsAppButton from './components/WhatsAppButton'

import Masthead from './sections/Masthead'
import About from './sections/About'
import Consulting from './sections/Consulting'
import Projects from './sections/Projects'
import Values from './sections/Values'
import Credentials from './sections/Credentials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <ScrollDriver />

      <main className="relative z-10 xl:pl-[12vw]">
        <Masthead />
        <About />
        <Consulting />
        <Projects />
        <Values />
        <Credentials />
        <Contact />
      </main>

      <Shell />
      <WhatsAppButton />
    </>
  )
}
