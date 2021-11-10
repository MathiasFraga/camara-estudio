import './itemList.css'
import Item from '../item/item'

const ItemList = ({cursos}) => {

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
        {cursos.length
          ? cursos.map((course) => <Item curso={course} key={course.id}/>)
          : "Cargando productos..."}
    </div>
    </div>
    );
};


export default ItemList;