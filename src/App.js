import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Accessories from "./pages/Accessories";
import Guitars from "./pages/Guitars";
import Repairs from "./pages/Repairs";
import Lessons from "./pages/Lessons";
import Storage from "./pages/Storage";
import ShopCart from "./pages/ShopCart";
import MyUser from "./pages/MyUser";
import Header from "./components/Header";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/guitars" element={<Guitars/>}/>
        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/storage" element={<Storage/>}/>
        <Route path="/lessons" element={<Lessons/>}/>
        <Route path="/repairs" element={<Repairs/>}/>
        <Route path="/shopcart" element={<ShopCart/>}/>
        <Route path="/myuser" element={<MyUser/>}/>
      </Routes>
    </Router>
  );
};

export default App;