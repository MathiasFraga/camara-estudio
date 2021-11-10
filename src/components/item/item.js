import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({curso}) =>{

    return(
        <Card key={curso.id} style={{ width: "18rem"}}>
            <Link to={`/item/${curso.id}`}>
                <Card.Img variant="top" src={curso.foto} style={{maxHeight: "200px"}}/>
            </Link>
            <Card.Body style={{height:"15rem", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"space-around"}}>
                <Card.Title>{curso.title}</Card.Title>
                <Card.Text>$ {curso.description}</Card.Text>
                <Card.Text>$ {curso.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Item;