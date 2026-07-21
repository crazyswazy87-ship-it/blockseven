import { Routes, Route } from 'react-router-dom'
import { About, BlockSeven, Ecosystem, Intro } from './_root'


function App() {
  return (
    <>
    <Routes >
      {/**private routes */}

      {/**Public routes */}
      <Route path="/blockseven" element={<Intro />} />
      <Route path='/ecosystem' element={<Ecosystem/>} />
      <Route path="/" element={<About />} />
      <Route path="/bs" element={<BlockSeven />} />
    </Routes>
    </>
  )
}

export default App