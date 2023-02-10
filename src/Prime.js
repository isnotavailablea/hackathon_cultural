import React,{useState,createContext, useEffect} from 'react'
import App from "./App.js"
export const AllContexts=createContext();
function Prime(props) {
      const [homepage,setHomepage]=useState({
        show:true
      })
    const [loginpg,setLoginpg]=useState({
        show:false
    })
    
    const [loggedin,setLoggedin]=useState({
        loggedin:false,
        id:"134"
    })
      const logout=()=>{
        setLoggedin({
          loggedin:false,
          id:"124"
        })
      }
      const loguser=(id)=>{
        setLoggedin({loggedin:true,id:id});
      }
      const useloginpg=()=>{
        if(loginpg.show){
          setLoginpg({show:false});
          setHomepage({show:true});
        }
        else{
          setLoginpg({show:true});
          setHomepage({show:false});
        }
      }
      const usehomepg=()=>{
        if(homepage.show){
          // setLoginpg({show:false});
          setHomepage({show:false});
        }
        else{
          setLoginpg({show:false});
          setHomepage({show:true});
        }
      }
  return (
    <AllContexts.Provider value={{loggedin,loginpg,useloginpg,loguser,logout,homepage,usehomepg}}>
        <App/>
        </AllContexts.Provider>
  )
}

export default Prime