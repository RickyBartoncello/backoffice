import React, { useState } from 'react';

export const ObjEdit = props =>{

    const [newObjName, setNewObjName] = useState('');
    const [newObjCode, setNewObjCode] = useState('');
    const updateNewObjValue = e => (setNewObjName(e.target.value), setNewObjCode(e.target.value));
    const createNewObj =() => {
        props.callback(newObjName)
        setNewObjCode('');
        setNewObjName('');
    }

    return(
        <div>
            <center><h3><b>Edicion del Pais</b></h3></center>
            <form className="text-center" >
                <label for="name">
                    Pais:
                <input id="name" type="text" name="name" placeholder="Entrada del Pais" value={newObjName} onChange={updateNewObjValue} />
                </label>
                <br />
                <br />
                <label for="code">
                    Codigo del Pais:
                <input id="code" type="text" code="code" placeholder="Entrada del Codigo" value={newObjCode} onChange={updateNewObjValue} />
                </label>
                <br />
                <input type="submit" value="Enviar Modificacion" />
            </form>
            <input type="submit" class="btn btn-primary mt-1" onClick={createNewObj} value="Enviar Modificacion" />
        </div>
    );
};