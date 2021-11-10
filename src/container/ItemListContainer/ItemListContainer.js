import './ItemListContainer.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/itemList";
import ProgramaCursos from '../../components/data/programa.json'


const ListContainer= (props) => {  

    const [grilla, setGrilla] = useState([]);
    const{ categoryID } = useParams();

    const getPrograma = (programa) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (programa) {
            resolve(programa);
          } else {
            reject("No hay nada para mostrar");
          }
        }, 2000);
      });
    
    useEffect(() => {
      getPrograma(ProgramaCursos)
      .then((res) => {
        categoryID
        ?setGrilla(res.filter((course) => course.category===categoryID))
        :setGrilla(ProgramaCursos);
      })
      .catch((err) => console.log(err));
    }, [categoryID]);
	
  return (
    <div>
        <div className ="hcupos contenedorCursos">{props.greeting}</div>
        <div className="itemList">
               <ItemList cursos={grilla}/>  
          </div>
    </div>
  );
}  
export default ListContainer;
  