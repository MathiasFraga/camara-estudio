import './ItemListContainer.css';
import ItemList from '../../components/ItemList/itemList';


const ListContainer= (props) => {  
  return (
    <div>
        <div className ="hcupos contenedorCursos">{props.greeting}</div>
        <div className="cursosContainer">
                <ItemList />
            </div>
    </div>
  );
}  
export default ListContainer;
  