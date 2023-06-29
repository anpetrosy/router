import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;