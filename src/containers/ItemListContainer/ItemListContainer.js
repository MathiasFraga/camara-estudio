import './ItemListContainer.css';
import React from 'react';

const ListContainer= (props) => {
  return (
    <div className="contenedorCursos">
        <div>{props.text}</div>
         {props.childern}
    </div>
  );
}
  
  export default ListContainer;
  