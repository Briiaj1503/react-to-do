import React, {useEffect, useState} from "react";
import CrearTarea from "../creartarea/index";
import Tareas from "../tareas/index";

const Agregartask = () => {
    const [modal, setModal] = useState(false);
    const [ListaTask, setListaTask] = useState([])


    useEffect (() => {
        let arr = localStorage.getItem("ListaTask")
       
        if (arr) {
            let obj = JSON.parse(arr)
            setListaTask(obj)
        }
    },[])

    const toggle = () => {
        setModal(!modal);
    }

    const GuardarTask = (taskObj) => {
        let listT = ListaTask
        listT.push(taskObj)
        localStorage.setItem("ListaTask", JSON.stringify(listT))
        setListaTask(listT)
        setModal(false)
        setListaTask(ListaTask)

    }
  return (
    <>
      <div className="header text-center">
        <h3>Lista de Tareas</h3>
        <button className="btn btn-info mt-2"onClick={() => setModal(true)}>Crear Tarea</button>
      </div>
      <div className="contenedor-tarea">
        {ListaTask && ListaTask.map((obj , index) => <Tareas taskObj = {obj} index = {index} /> )}

      </div>
      <CrearTarea toggle={toggle} modal={modal} save = {GuardarTask}/>
    </>
  );
};

export default Agregartask;
