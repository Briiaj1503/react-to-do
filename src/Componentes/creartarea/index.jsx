import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CrearTarea = ({ modal, toggle , save }) => {
    const [NombreTarea, setNombreTarea] = useState("");
    const [Descripcion, setDescrpcion] =useState("");

    const handleChange = (e) => {
        const {name , value} = e.target

        if (name === "NombreTarea") {
            setNombreTarea(value)
        }else {
            setDescrpcion(value)
        }

    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = NombreTarea
        taskObj["Descripcion"] = Descripcion
        save(taskObj)
    }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Crear Tarea</ModalHeader>
      <ModalBody>
        <form>
            <div className="form-group">
                <label htmlFor="">Nombre de la tarea</label>
                <input type="text" className="form-control" value={NombreTarea} onChange={handleChange} name="NombreTarea"/>

            </div>
            <div className="form-group" >
                <label htmlFor="">Descripcion</label>
                <textarea rows="5" className="form-control" value={Descripcion} onChange={handleChange} name="Descripcion"></textarea>

            </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Crear
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CrearTarea;
