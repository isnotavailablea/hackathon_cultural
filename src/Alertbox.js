import {React,useContext} from 'react'
import { AllContexts } from './Prime'
function Alertbox(props) {
    const obj=useContext(AllContexts);
    console.log(obj.alerta);
  return (

    <div className='alert-msg'>
        <p>{obj.alerta.msg}</p>
        <p className='remove-alrt' onClick={obj.updatealrt}>X</p>
    </div>
  )
}

export default Alertbox