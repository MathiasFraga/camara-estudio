import './itemList.css'
import Card from '../ItemDetail/itemDetail';
import ProgramaCursos from '../data/programa.json'
import { useEffect, useState } from "react";


const ItemList = () => {
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
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {cursos ? cursos.map((curso) => (
              <div className="col-md-4" key={curso.id}>
                <Card foto={curso.foto} title={curso.title} description={curso.description} price={curso.price} />
              </div>
            ))
            : "Cargando los cursos disponibles..."}
          </div>
        </div>
      );
    }

export default ItemList;