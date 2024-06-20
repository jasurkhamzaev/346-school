/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Courses from './pages/Course/Course';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Conditions from './components/Conditions/Conditions';
import PrivarcyPolicy from './components/Privarcy Policy/PrivarcyPolicy';






function App() {

  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(false);


  return (
    <div>
      <Navbar expand='lg' className='position-absolute w-100'>
        <Container>
          <Link to="/" className='navbar-brand d-flex align-items-center '>
            <svg stroke="red" fill="red" stroke-width="0" viewBox="0 0 512 512" height="80px" width="60px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M32 192 256 64l224 128-224 128L32 192z"></path><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M112 240v128l144 80 144-80V240m80 128V192M256 320v128"></path></svg>
            <span className='mx-2 text-light 1h-1 fw-semibold'>
              General secondary school 346
              <br></br>
              in Bektemir district
              <br></br>
              of Tashkent city
            </span>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav'
            className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase'>Our Courses</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About Us</Nav.Link>
              <Nav.Link href='/blog' className='text-uppercase'>Blog</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privarcy-policy' element={<PrivarcyPolicy />} />
        <Route path='/conditions' element={<Conditions />} />
      </Routes>

      <footer className='footer'>
        <div className='container my-6'>
          <div className='row d-flex justify-content-between
          align-items-center'>
            <div className='col-md-3'>
              <Link to="/">
                <button type='button' className='btn btn-outline-danger 
                btn-lg mb-5 mb-md-3'>Follow Us</button>
              </Link>
              <ul className='footer-social-icons list-unstyled d-flex 
              justify-content-between'>
                <Link to="/contact">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </li>
                </Link>
                <Link to="https://www.instagram.com/346_maktab_hayoti?igsh=MTNmY3Y1aDN3dXM1dg==">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </li>
                </Link>
                <Link to="https://www.youtube.com/@346_maktab_hayoti_xilooltv">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="#dc3545" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg>
                  </li>
                </Link>
                <Link to="https://t.me/Bektemir_346maktab_hayoti">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="blue" class="bi bi-telegram" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                    </svg>
                  </li>
                </Link>
              </ul>
            </div>
            <div className='col-md-7 col-lg-6'>
              <div className='d-row d-md-flex justify-content-between
              align-items-center'>
                <div className='col-12 col-md-6 col-lg-6 mb-5 mt-4 
                my-md-0'>
                  <ul className='footer-navigation list-unstyled mb-0'>
                    <Link to="/about" className='text-decoration-none
                      text-danger'>
                      <li className='text-decoration fw-semibold'>ABOUT US</li>
                    </Link>
                    <Link to="/blog" className='text-decoration-none
                      text-danger'>
                      <li className='text-decoration fw-semibold'>BLOG</li>
                    </Link>
                    <Link to="/contact" className='text-decoration-none
                      text-danger'>
                      <li className='text-decoration fw-semibold'>CONTACT US</li>
                    </Link>
                    <Link to="/privarcy-policy" className='text-decoration-none
                      text-danger'>
                      <li className='text-decoration fw-semibold'>PRIVARCY POLICY </li>
                    </Link>
                    <Link to="/conditions" className='text-decoration-none
                      text-danger'>
                      <li className='text-decoration fw-semibold'>TERMS & CONDITIONS</li>
                    </Link>
                  </ul>
                </div>
                <div className='col-12 col-md-6 col-lg-7'>
                  <ul className='list-unstyled mb-6'>
                    <li>
                      <p>Okhunguzar Street, 10a
                        Kipchak, Bektemir, Tashkent
                      </p>
                    </li>
                    <li>
                      <p>Phone Number: +998 71 289-68-11</p>
                    </li>
                    <li>
                      <p>Email: info@346-school.uz</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="bg-bg-body-tertiary">
            <div className='container'>
              <p className='p-3 m-0 text-center'>&copy; 346-school.uz
                Copyright @2024.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
