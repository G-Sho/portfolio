import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import About from './components/About'
import Contact from './components/Contact'
import ScrollUp from './utils/ScrollUp'
import Career from './components/Career'
import Achievements from './components/Achievements'
import Studies from './components/Studies'

const App: React.FC = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <MyAvatar />
      </section>
      <section id='career'>
        <Career />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='studies'>
        <Studies />
      </section>
      <section id='achievements'>
        <Achievements />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <ScrollUp />
    </>
  );
}

export default App;
