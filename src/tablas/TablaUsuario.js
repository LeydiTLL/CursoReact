import React from 'react';
import { Button } from 'antd';
import { Alert } from 'antd'
import '../App.css';

const TablaUsuarios = (props) => (
  <table className="table mt-4">
    <thead className="thead-dark">
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.usuarios.length > 0 ? (
        props.usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nombre}</td>
            <td>{usuario.apellido}</td>
          <td>
            <Button
              type="primary"
              onClick={() => props.editarUsuario(usuario)}
            >
                Editar
              </Button>
            <Button
              type="primary"
              danger
              onClick={() => props.eliminarUsuario(usuario.id)}
            >
              Eliminar
            </Button>
          </td>
        </tr>
      ))
    ) : (

        <Alert message="No se encontaron usuarios registrados" type="success"/>
    
    )}
    </tbody>
  </table>
)

export default TablaUsuarios;