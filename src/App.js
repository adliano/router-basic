import './App.css';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import { Home, PageOne, PageTwo, Page404 } from './pages'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="one" element={<PageOne />} />
            <Route path="two" element={<PageTwo />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Layout = () => (
  <div>
    <Outlet />
  </div>
)

export default App;
