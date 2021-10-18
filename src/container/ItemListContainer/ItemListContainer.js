import './ItemListContainer.css';
import React from 'react';

const ListContainer= (props) => {
  return (
    <div className="contenedorCursos">
        <div>{props.greeting}</div>
    </div>
  );
}  
export default ListContainer;
  