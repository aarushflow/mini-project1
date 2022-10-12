import { BrowserRouter, Routes, Route} from "react-router-dom";
import SignPage from './create/SignPage';
import CreatePage from './create/CreatePage';
import FormPage from './create/FormPage';
import './App.css'

function App() {

  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = '/' element = {<SignPage />} />
      <Route path = '/create' element = {<CreatePage />} />
      <Route path = '/form' element = { <FormPage /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
