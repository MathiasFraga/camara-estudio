import './ItemListContainer.css';

const ListContainer= (props) => {
  return (
    <div className="contenedorCursos">
        <div>{props.text}</div>
         {props.childern}
    </div>
  );
}
  
  export default ListContainer;
  