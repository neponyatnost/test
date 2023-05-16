import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TabsComponent from './components/TabsComponent'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='navigator' element={<TabsComponent />} />
    </Routes>
  )
}

export default App
