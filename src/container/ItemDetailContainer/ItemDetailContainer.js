import ItemDetails from '../ItemDetail/itemDetail';
import ProgramaCursos from '../data/programa.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function ItemDetailContainer() {
	const [itemDetail, setItemDetail] = useState(null);
	const { itemId } = useParams();

    const getItem = (data) =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				if (data) {
					resolve(data);
				} else {
					reject('No se encontró nada');
				}
			}, 2000);
		});

	useEffect(() => {
		getItem(ProgramaCursos)
			.then((res) => {
				setItemDetail(res.find((details) => details.id === itemId));
				console.log(itemDetails);
			})

			.catch((err) => console.log(err));
	}, [itemId]);

	return (
		<div className='itemDetailContainer'>
			{itemDetail ? (
				<ItemDetails
					key={itemDetail.id}
					foto={itemDetail.foto}
					title={itemDetail.title}
					description={itemDetail.description}
					price={itemDetail.price}
				/>
			) : "Cargando los curos" (
			)}
		</div>
	);
}

export default ItemDetailContainer;
