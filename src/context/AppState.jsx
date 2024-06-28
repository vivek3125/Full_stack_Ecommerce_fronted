import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppState = (props) => {

     const [products, setProducts] = useState([]);
     const [token, setToken] = useState([]);
     const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [filteredData, setFilteredData] = useState([]);
     const [user, setUser] = useState();
     const [cart, setCart] = useState();
     const [reload,setReload]=useState(false);
     const [userAddress,setUserAddress]=useState("");
     const [userOrder,setUserOrder]=useState([]);

     // const url = "http://localhost:1000/api"
     const url = "https://mern-ecommerce-backend-um1o.onrender.com/api"


     useEffect(() => {
          const fetchProduct = async () => {
               const api = await axios.get(`${url}/product/all`, {
                    headers: {
                         "Content-Type": "Application/json"
                    },
                    withCredentials: true
               })
               // console.log(api.data.products)
               setProducts(api.data.products)
               setFilteredData(api.data.products)
               userProfile();
          };
          fetchProduct();
          userCart();
          getAddress();
          user_Order();
     }, [token,reload]);

     // taking token from user
     useEffect(() => {
          let lstoken = localStorage.getItem("token");
          if (lstoken) {
               setToken(lstoken);
               setIsAuthenticated(true);
          }
     }, [])


     // register user
     const register = async (name, email, password) => {
          const api = await axios.post(`${url}/user/register`, { name, email, password }, {
               headers: {
                    "Content-Type": "Application/json"
               },
               withCredentials: true
          })
          // alert(api.data.message)
          toast.success(api.data.message, {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
          return api.data;
          // console.log("user register ",api)
     }

     // login user
     const login = async (email, password) => {
          const api = await axios.post(`${url}/user/login`, { email, password }, {
               headers: {
                    "Content-Type": "Application/json"
               },
               withCredentials: true
          })
          // alert(api.data.message)
          toast.success(api.data.message, {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
          // console.log("user login ",api.data)
          if(api.data.success){
          setToken(api.data.token);
          setIsAuthenticated(true);
          localStorage.setItem('token', api.data.token)
          }else{
               setIsAuthenticated(false); 
          }
          return api.data;
     }

     // logout user
     const logout = () => {
          setIsAuthenticated(false)
          setToken("")
          localStorage.removeItem('token')
          toast.success("Logout Successfully...!", {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
     }

     // user profile
     const userProfile = async () => {
          const api = await axios.get(`${url}/user/profile`, {
               headers: {
                    "Content-Type": "Application/json",
                    "Auth": token
               },
               withCredentials: true
          });
          // console.log("user profile",api.data)
          setUser(api.data.user)

     };

     // add to cart
     const addToCart = async (productId, title, price, qty, imgSrc) => {
          const api = await axios.post(`${url}/cart/add`, { productId, title, price, qty, imgSrc }, {
               headers: {
                    "Content-Type": "Application/json",
                    Auth: token
               },
               withCredentials: true
          });
          setReload(!reload)
          console.log("my cart", api)
          toast.success(api.data.message, {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
     };

     // user Cart
     const userCart = async () => {
          const api = await axios.get(`${url}/cart/user`, {
               headers: {
                    "Content-Type": "Application/json",
                    "Auth": token
               },
               withCredentials: true
          });
          console.log("user cart", api.data.cart);
          setCart(api.data.cart);
          // setUser("user cart",api)
     };

     //  --qty
     const decreaseQty = async (productId,qty) => {
          const api = await axios.post(`${url}/cart/--qty`,{productId,qty} ,{
               headers: {
                    "Content-Type": "Application/json",
                    Auth: token
               },
               withCredentials: true
          });
          setReload(!reload);
          toast.success(api.data.message, {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
          // console.log("user cart", api.data.cart);
          // setCart(api.data.cart);
          // setUser("user cart",api)
     };

     // remove from cart
     const removeFromCart = async (productId) => {
          const api = await axios.delete(`${url}/cart/remove/${productId}`,{
               headers: {
                    "Content-Type": "Application/json",
                    Auth: token
               },
               withCredentials: true
          });
          setReload(!reload);
          toast.success("remove item from cart", {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
          // console.log("user cart", api.data.cart);
     };

       // clear cart
       const clearCart = async () => {
          const api = await axios.delete(`${url}/cart/clear`,{
               headers: {
                    "Content-Type": "Application/json",
                    Auth: token
               },
               withCredentials: true
          });
          setReload(!reload);
          toast.success(api.data.message, {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
          // console.log("user cart", api.data.cart);
     };

       // Add shipping Address
       const shippingAddress = async (fullName, address, city, state, country, pincode, phoneNumber) => {
          const api = await axios.post(`${url}/address/add`,{fullName, address, city, state, country, pincode, phoneNumber},{
               headers: {
                    "Content-Type": "Application/json",
                    Auth: token
               },
               withCredentials: true
          });
          setReload(!reload);
          toast.success(api.data.message, {
               position: "top-right",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "dark",
               transition: Bounce,
          });
          return api.data;
          // console.log("user cart", api.data.cart);
     };
      
     // get user latest address
     const getAddress = async () => {
          const api = await axios.get(`${url}/address/get`, {
               headers: {
                    "Content-Type": "Application/json",
                    Auth:token
               },
               withCredentials: true
          })
          // console.log("User address",api.data.userAddress)
          setUserAddress(api.data.userAddress)
     };

      // get user order
      const user_Order = async () => {
          const api = await axios.get(`${url}/payment/userorder`, {
               headers: {
                    "Content-Type": "Application/json",
                    Auth:token
               },
               withCredentials: true
          })
          // console.log("User order",api.data)
          setUserOrder(api.data)
     };


     // console.log("user order ",userOrder)

     return (
          <AppContext.Provider value={{ products, register, login, url, token, setIsAuthenticated, isAuthenticated, filteredData, setFilteredData, logout, user, addToCart, cart, decreaseQty,removeFromCart,clearCart,shippingAddress,userAddress,userOrder}}>
               {props.children}
          </AppContext.Provider>
     )
}

export default AppState
