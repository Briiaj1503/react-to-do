import React from 'react';




const tareas = ({taskObj ,index, BorrarTarea, Check}) => {


    const handleBorrar = () => {
        BorrarTarea(index)

    }


    const handlecheck =() => {
        Check(index)
    }


    const getCheckColor = (isComplete) => {
        return isComplete? "red": "#888"
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": "red"}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color":"rgb(242, 225, 229)", "border-radius": "6px"}}>{taskObj.Name}</span>
                <p className = "mt-3" >{taskObj.Description}</p>

                <div style={{"position": "rows", "right" : "20px", "buttom" : "20px"}}>
                <i class="fa-solid fa-circle-check" style={{"color" : getCheckColor(taskObj.completed)}} onClick={handlecheck}></i>
                    <i class="fas fa-trash-alt mr-3"  style = {{"color" :"red"}} onClick={handleBorrar}></i>
                </div>
           </div>
        </div>
    );
};

export default tareas;