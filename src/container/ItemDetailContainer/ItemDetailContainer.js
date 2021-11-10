import ItemDetails from '../../components/ItemDetail/itemDetail';
import ProgramaCursos from '../../components/data/programa.json'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
	const [cursos, setCursos] = useState([]);
	const{ itemID } = useParams();

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
		.then((res) => {setCursos(res.find((course) => course.id===itemID));})
		.catch((err) => console.log(err));
	}, [itemID]);
	
	
		return (
			<div className="container d-flex justify-content-center align-items-center h-100">
			  <div className="row">
				{cursos ? cursos.map((curso) => (
				  <div className="col-md-4" key={curso.id}>
					<ItemDetails  curso ={cursos} />
				  </div>
				))
				: "Cargando los cursos disponibles..."}
			  </div>
			</div>
		  );
		}

export default ItemDetailContainer;
