import './itemList.css'
import Card from '../ItemDetail/itemDetail';
import deportiva from '../img/deportiva.jpg';
import empresariales from '../img/empresariales.jpg';
import eventos from '../img/eventos.jpg';


const programa = [
    {
      "id": "Deportes",
      "title": "Fotografia deportiva",
      "description": "Seran 20 clases presenciales",
      "price": 500,
      "foto": deportiva
    },
    {
        "id": "Eventos",
        "title": "Fotografia eventos",
        "description": "Seran 20 clases presenciales",
        "price": 1500,
        "foto": eventos
      },
      {
        "id": "Empresarial",
        "title": "Fotografia empresarial",
        "description": "Seran 40 clases presenciales",
        "price": 2000,
        "foto": empresariales
      }
  ]

const ItemList = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {programa.map(({ title, foto, description, id, price }) => (
              <div className="col-md-4" key={id}>
                <Card foto={foto} title={title} description={description} price={price} />
              </div>
            ))}
          </div>
        </div>
      );
    }

export default ItemList;