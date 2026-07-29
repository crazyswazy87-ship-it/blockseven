import { Routes, Route } from 'react-router-dom'
import { About, BlockSeven, Ecosystem } from './_root'
import Home from './_root/pages/Home'
import PersonalCloud from './_root/pages/PersonalCloud'


function App() {
  return (
    <>
    <Routes >
      {/**private routes */}

      {/**Public routes */}
      <Route path='/ecosystem' element={<Ecosystem/>} />
      <Route path="/bs" element={<About />} />
      <Route path='/blockseven' element={<Home/>} />
      <Route path="/" element={<BlockSeven />} />
      <Route path="/cloud" element={<PersonalCloud/>}/>
    </Routes>
    </>
  )
}

export default App