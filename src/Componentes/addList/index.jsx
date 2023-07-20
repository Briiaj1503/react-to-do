import React, { useEffect, useState } from "react";
import CrearTarea from "../creartarea/index";
import Tareas from "../tareas/index";

const Agregartask = () => {
  const [modal, setModal] = useState(false);
  const [ListaTask, setListaTask] = useState([]);
  const [tareasCheckeadas, setTareasCheckeadas] = useState(0); //contador de tareas useState

  useEffect(() => {
    let arr = localStorage.getItem("ListaTask");

    if (arr) {
      let obj = JSON.parse(arr);
      setListaTask(obj);
    }
  }, []);

  useEffect(() => {
    //funcion para tareas completadas, utilizando filter.
    const completedTasks = ListaTask.filter((task) => task.completed);
    setTareasCheckeadas(completedTasks.length);
    
    
    localStorage.setItem("ListaTask", JSON.stringify(ListaTask));
  }, [ListaTask]);

  const BorrarTarea = (index) => {
    let listT = ListaTask;
    listT.splice(index, 1);
    localStorage.setItem("ListaTask", JSON.stringify(listT));
    setListaTask(listT);
    window.location.reload();
  };

  const Check = (index) => {
    const taskCopy = [...ListaTask];
    taskCopy[index].completed = !taskCopy[index].completed;
    setListaTask(taskCopy);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const GuardarTask = (taskObj) => {
    let listT = [...ListaTask, taskObj];
    setListaTask(listT);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Lista de Tareas</h3>
        <button className="btn btn-danger mt-2" onClick={() => setModal(true)}>Crear Tarea</button>
      </div>
      <div className="contenedor-tarea">
        {ListaTask && ListaTask.map((obj, index) => (
          <Tareas
            key={index}
            taskObj={obj}
            index={index}
            BorrarTarea={BorrarTarea}
            Check={Check}
          />
        ))}
      </div>
      <div className="contador-tareas-checkeadas">
        <h4>Tareas Completadas: {tareasCheckeadas}</h4>
      </div>
      <CrearTarea toggle={toggle} modal={modal} save={GuardarTask} />
    </>
  );
};

export default Agregartask;