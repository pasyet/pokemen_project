import './App.css';
import { Route, Routes} from 'react-router-dom';
import Home from './views/Home';
import Add from './views/Add';
import Navbar from './components/Navbar';
import Detail from './components/Detail';
import Fire from './views/Fire';
import Water from './views/Water';
import Grass from './views/Grass';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/add' element={<Add />}></Route>
      <Route path='/fire' element={<Fire />}></Route>
      <Route path='/water' element={<Water />}></Route>
      <Route path='/grass' element={<Grass />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
    </Routes>
    </>
  );

//   <div className="App">
//   <Navbar />
//   <Routes>
//   <Route exact path='/'>
//       <Home />
//     </Route>
//     <Route path='/add'>
//       <Add />
//     </Route>
//     <Route path='/fire'>
//       <Fire />
//     </Route>
//     <Route path='/water'>
//       <Water />
//     </Route>
//     <Route path='/grass'>
//       <Grass />
//     </Route>
//     <Route path="/detail/:id">
//       <Detail />
//     </Route>
//   </Routes>
// </div>
// );
}

export default App;
