import React, { useState } from "react";


const TaskForm = ({pasarFuncionAgregarTarea}) =>{

    const[inputValue, setInputValue]=useState("")

    const controlarCambio = (e) =>{
        setInputValue(e.target.value)
        console.log(inputValue);
    }

    const controlarEnvio = (e) =>{
        e.preventDefault();
        
            const tareaNueva =  inputValue
            
        pasarFuncionAgregarTarea(tareaNueva);
        
    }


    return(
        <form onSubmit={controlarEnvio}>
            <input onChange={controlarCambio} type="text" placeholder="Escribe una tarea..." />
        </form>
    );
};

export default TaskForm;