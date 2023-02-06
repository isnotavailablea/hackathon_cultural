import React,{useState,createContext} from 'react'
import App from "./App.js"
export const AllContexts=createContext();
function Prime(props) {
    const [alerta,setAlerta]=useState({
        show:true,
        msg:"okay"
      });
      const [homepage,setHomepage]=useState({
        show:true
      })
    const [logalrt,setLogalert]=useState(
      {
        show:false,
        msg:"don't know"
      }
    )
    const [loginpg,setLoginpg]=useState({
        show:false
    })
    const [loggedin,setLoggedin]=useState({
        loggedin:false,
        user:{
          name:"John Doe",
          keywrd:"1234"
        }
    })
      const logit=(emal,pass)=>{
         if(props.checkusname(emal,pass)){
            setLoggedin({loggedin:true,
              user:{
                name:emal,
                keywrd:props.getkeywrd(emal,pass)
              }
            })
         }
         else{
            setLogalert({
              show:true,
              msg:"Invalid username or id"
            })
         }
      }
      const updatealrt=()=>{
        // console.log("was used");
        setAlerta({
          show:false,
          msg:"not okay"
        });
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
          // setLoginpg({show:true});
          setHomepage({show:true});
        }
      }
  return (
    <AllContexts.Provider value={{alerta,updatealrt,logalrt,logit,loggedin,loginpg,useloginpg,homepage,usehomepg}}>
        <App/>
        </AllContexts.Provider>
  )
}

export default Prime