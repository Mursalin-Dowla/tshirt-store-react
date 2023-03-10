import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
