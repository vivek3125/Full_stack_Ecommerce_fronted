import React, { useContext, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Navbar = () => {
     const [searchTerm, setSearchTerm] = useState("")
     const navigate = useNavigate()
     const { setFilteredData, products, logout, isAuthenticated, cart } = useContext(AppContext);
     const location = useLocation();

     // console.log("user cart=",cart)

     const filterbyCategory = (cat) => {
          setFilteredData(products.filter((data) => data?.category?.toLowerCase() == cat.toLowerCase()))
     }

     const filterbyPrice = (price) => {
          setFilteredData(products.filter(
               (data) => data.price >= price))
     }

     const submitHandler = (e) => {
          e.preventDefault();
          navigate(`/product/search/${searchTerm}`);
          setSearchTerm("")
     }
     return (
          <>
               <div className="nav sticky-top">
                    <div className="nav_bar">
                         <Link to={'/'} className="left" style={{ textDecoration: "none" }}>
                              <h3 style={{color:'yellow'}}>PrimePicks</h3>
                         </Link>
                         <form className="search_bar" onSubmit={submitHandler}>
                              <span className="material-symbols-outlined">search</span>
                              <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='Search Products' />
                         </form>
                         <div className="right">
                              {/* agar login nhi hai tw */}
                              {isAuthenticated && (
                                   <>
                                        <Link to={"/cart"} type="button" className="btn btn-primary position-relative mx-3">
                                             <span className="material-symbols-outlined">
                                                  shopping_cart
                                             </span>
                                             {cart?.items?.length > 0 && (
                                                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                       {cart?.items?.length}
                                                       <span className="visually-hidden">unread messages</span>
                                                  </span>
                                             )}
                                        </Link>
                                        <Link to={'/profile'} className="btn btn-info mx-3">Profile</Link>
                                        <button className="btn btn-danger mx-3" onClick={() => { 
                                             if(confirm("Do you want to logout")){
                                                  logout(); 
                                                  navigate('/'); 
                                             }
                                        }}>Logout</button>
                                   </>
                              )}
                              {/* agar login hai tw*/}
                              {!isAuthenticated && (
                                   <>
                                        <Link to={"/login"} className="btn btn-secondary mx-3">Login</Link>
                                        <Link to={'/register'} className="btn btn-primary mx-3">Register</Link>
                                   </>
                              )}
                         </div>
                    </div>

                    

                    {location.pathname == '/' && (
                         <div className="sub_bar">
                              <div className="items" onClick={() => setFilteredData(products)}>Home</div>
                              <div className="items" onClick={() => filterbyCategory("mobiles")}>Mobiles</div>
                              <div className="items" onClick={() => filterbyCategory("laptops")}>Laptops</div>
                              <div className="items" onClick={() => filterbyCategory("cameras")}>Camera's</div>
                              <div className="items" onClick={() => filterbyCategory("headphones")}>Headphones</div>
                              <div className="items" onClick={() => filterbyPrice(5999)}>5999</div>
                              <div className="items" onClick={() => filterbyPrice(6999)}>6999</div>
                              <div className="items" onClick={() => filterbyPrice(7999)}>7999</div>
                              <div className="items" onClick={() => filterbyPrice(8999)}>8999</div>
                              <div className="items" onClick={() => filterbyPrice(9999)}>9999</div>
                         </div>
                         )}
               </div>
          </>
     )
}

export default Navbar
