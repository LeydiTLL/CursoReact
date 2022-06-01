import React, { useState, useEffect } from 'react';
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

const FormularioEditarUsuario = (props) => {
  const [usuario, setUsuario] = useState(props.usuarioActual);

  useEffect(() => {
    setUsuario(props.usuarioActual);
  }, [props]);

  const gestionarCampo = (event) => {
    const { name, value } = event.target;
    setUsuario({ ...usuario, [name]: value });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.actualizarUsuario(usuario.id, usuario);
      }}
    >
<Form.Item
        label="Nombre">
        <Input
          id="nombre"
          className="form-control"
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={gestionarCampo}
        />
         </Form.Item>


<Form.Item
        label="Apellido">
        <Input
          id="apellido"
          className="form-control"
          type="text"
          name="apellido"
          value={usuario.apellido}
          onChange={gestionarCampo}
        />
        </Form.Item>
      <div className="form-group">
      <button className="btn btn-danger">Actualizar usuario</button>
        <Button
          type="primary" danger
          onClick={() => props.setEditando(false)}
        >
            Cancelar
        </Button>
      </div>
    </form>
  )
}

export default FormularioEditarUsuario;