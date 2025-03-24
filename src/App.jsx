import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import BookAppointment from './pages/BookAppointment'
import ContactUs from './pages/ContactUs'
import Services from './pages/Services'
import DoctorsList from './pages/DoctorsList'
import FaQs from './pages/FaQs'
import ErrorPage from './pages/ErrorPage'
import FindADoctor from './pages/FindADoctor'
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/booking' element={<BookAppointment/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/find-a-doctor' element={<FindADoctor/>}/>
      <Route path='/doctors-list' element={<DoctorsList/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='navbar' element={<NavBar/>}/>
      <Route path='/faqs' element={<FaQs/>}/>
      <Route path='/errorpage' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
