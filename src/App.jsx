import { Routes, Route } from "react-router-dom";
import { MainLoyaut } from "./layout/mian-loyaut";
import { Home } from "./pages/home-page/home";
import { Login } from "./pages/login-page/login";
import { CategoryList } from "./pages/category-list/categoryList";
import { CategoryProduct } from "./pages/category-product/category-product";
import { CreateProduct } from "./pages/crate-product/create-product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLoyaut />}>
          <Route index element={<Home />} />
          <Route path="category-list" element={<CategoryList />} />
          <Route path="category-product/:id" element={<CategoryProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
