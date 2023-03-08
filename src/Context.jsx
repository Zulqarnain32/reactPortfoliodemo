import React,{ useContext } from "react";
import { useReducer } from "react";
// import { useEffect } from "react";
import reducer from "./reducer"
// const API = "https://thapareactapi.up.railway.app";
const AppContext = React.createContext();
 


const AppProvider = ({ children }) => {
 
    const initialState = {
        name:"",
        image:"",
        services: [],
    }
    
  const [state,dispatch] = useReducer(reducer,initialState)
  const updateHomePage = () => {
    return dispatch(
        {
            type:"HOME_UPDATE",
            payload:{
                name:"Zulqarnain Haider",
                image:"./images/hero.svg",
            },
        }
    )
}

const updateAboutPage = () => {
    return dispatch(
        {
            type:"ABOUT_UPDATE",
            payload:{
                name:"Web Developer",
                image:"./images/about1.svg",
            },
        }
    )
}


//   //  to get the api data
//   const getServices = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       dispatch({ type: "GET_SERVICES", payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // to call the api
//   useEffect(() => {
//     getServices(API);
//   }, []);

    return (
        // <AppContext.Provider value="Zulqarnain Chohan">
        // <AppContext.Provider value={{fname:"Zulqarnain",lname:"Chohan"}}>
        <AppContext.Provider value={{...state,updateAboutPage,updateHomePage}}>

        {children}
        </AppContext.Provider>
        )
}

//Global custom hook 
const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext}

