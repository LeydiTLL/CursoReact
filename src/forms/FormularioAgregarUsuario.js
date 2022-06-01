import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
  } from 'antd';
import '../App.css';


const FormularioAgregarUsuario = (props) => {

    const estadoInicialFormulario = { id: null, nombre: '', apellido: '' };
    const [usuario, setUsuario] = useState(estadoInicialFormulario);
      
    const gestionarCampo = (event) => {
      const { name, value } = event.target;
      setUsuario({ ...usuario, [name]: value });
    }
  
    return (
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!usuario.nombre || !usuario.apellido) return;
  
          props.agregarUsuario(usuario);
          setUsuario(estadoInicialFormulario);
        }}
      >
        <div className="form-group">
          <label>Nombre</label>
          <Input
            id="nombre"
            className="form-control"
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={gestionarCampo}
          />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <Input
            id="apellido"
            className="form-control"
            type="text"
            name="apellido"
            value={usuario.apellido}
            onChange={gestionarCampo}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Agregar usuario</button>
        </div>
      </form>
    )
  }
  
  export default FormularioAgregarUsuario;