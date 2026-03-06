import { Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import ProductDetails from "./components/Products/ProductDetails"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  )
}

export default App