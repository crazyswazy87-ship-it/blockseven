import { Routes, Route } from 'react-router-dom'
import { About, BlockSeven, Ecosystem, Intro } from './_root'


function App() {
  return (
    <>
    <Routes >
      {/**private routes */}

      {/**Public routes */}
      <Route path="/" element={<Intro />} />
      <Route path='/ecosystem' element={<Ecosystem/>} />
      <Route path="/about" element={<About />} />
      <Route path="/blockseven" element={<BlockSeven />} />
    </Routes>
    </>
  )
}

export default App