import React, { useState } from 'react';
import TablaUsuarios from './tablas/TablaUsuario';
import FormularioAgregarUsuario from './forms/FormularioAgregarUsuario';
import FormularioEditarUsuario from './forms/FormularioEditarUsuario';
import { Button, message } from 'antd';
import './App.css';

const App = () => {

  const datosUsuario = [
    { id: 1, nombre: 'Edu', apellido: 'Lázaro' },
    { id: 2, nombre: 'Ana', apellido: 'Rodríguez' },
    { id: 3, nombre: 'Marcos', apellido: 'González' },
  ];

  const estadoInicialFormularioEdicion = { id: null, nombre: '', apellido: '' };

  const [usuarioActual, setUsuarioActual] = useState(estadoInicialFormularioEdicion);

  const [usuarios, setUsuarios] = useState(datosUsuario);
  const [editando, setEditando] = useState(false);
  const key = 'updatable';
  const agregarUsuario = (usuario) => {
    usuario.id = usuarios.length + 1;
    setUsuarios([...usuarios, usuario]);
    message.loading({ content: 'Cargando...', key });
    setTimeout(() => {
      message.success({ content: 'Se agrego Nuevo Usuario!', key, duration: 2 });
    }, 1000);
  }
 
  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    setEditando(false);
    message.loading({ content: 'Cargando...', key });
    setTimeout(() => {
      message.success({ content: 'Usuario Eliminado!', key, duration: 2 });
    }, 1000);
  }

  const editarUsuario = (usuario) => {
    setEditando(true);
    setUsuarioActual({ id: usuario.id, nombre: usuario.nombre, apellido: usuario.apellido });
  }

  const actualizarUsuario = (id, usuarioActualizado) => {
    setEditando(false);
    const usuariosActualizados = usuarios.map((usuario) => (usuario.id === id ? usuarioActualizado : usuario));
    setUsuarios(usuariosActualizados);
    message.loading({ content: 'Cargando...', key });
    setTimeout(() => {
      message.success({ content: 'Usuario Actualizado!', key, duration: 2 });
    }, 1000);
  }

  return (
    <div className="container">
      <h1>Curso de React</h1>
      <div className="row"> 
        {editando ? (
          <div className="col-md-4">
            <h2>Editar usuario</h2>
            <FormularioEditarUsuario
              setEditando={setEditando}
              usuarioActual={usuarioActual}
              actualizarUsuario={actualizarUsuario}
            />
          </div>
        ) : (
          <div className="col-md-4">
            <h2>Agregar usuario</h2>
            <FormularioAgregarUsuario agregarUsuario={agregarUsuario} />
          </div>
        )}
        <div className="col-md-4">
          <h2>Ver usuarios</h2>
          <TablaUsuarios usuarios={usuarios} editarUsuario={editarUsuario} eliminarUsuario={eliminarUsuario} />
        </div>
      </div>
    </div>
  );
}

export default App;