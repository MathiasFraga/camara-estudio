import './ItemListContainer.css';
import ItemList from '../../components/ItemList/itemList';
import { useEffect, useState } from "react";
import ProgramaCursos from "../../ProgramaCursos.json";



const ListContainer= (props) => {
  
  const [cursos, setCursos] = useState([]);

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
            .then((res) => setCursos(res))
            .catch((err) => console.log(err));
    }, []);


  return (
    <div>
        <div className ="hcupos contenedorCursos">{props.greeting}</div>
        <div className="cursosContainer">
                {cursos ? cursos.map((curso) => (
                        <ItemList course={curso} key={curso.id} />
                    ))
                    : "Cargando los cursos disponibles..."}
            </div>
    </div>
  );
}  
export default ListContainer;
  