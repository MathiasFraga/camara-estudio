import  StockContador  from "../ItemCount/itemCount";
import { useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import React, { useState } from "react";

const CartItem = ({ item, onRefresh }) => {
    const { removeItem } = useContext(CartContext);
    const [itemTotal, setItemTotal] = useState(item.price);


    const onAddHandle = (counter, itemTotal) => {
        if (counter > 0) {
            item.price= item.price * counter
            setItemTotal(item.price)
            onRefresh(itemTotal)
        } else if (counter === 0) {
            removeItem(item.id)
        }
    };

    return (
        <div className="container-fluid row col-11 mt-5 align-content-center justify-content-center">
            <div className="col-12 col-lg-5 align-self-center">
                <img className="img-fluid" src={item.foto} alt="foto" />
            </div>
            <div className="col-12 col-lg-6 mb-3 row justify-content-center">
                <div className="row justify-content-center">
                    <div className="product-meta-data mb-3">
                        <div className="line"></div>
                        <p className="product-price">${item.price}</p>

                        <div className='row'>
                            <h3 className='col-6'>{item.tittle}</h3>
                    <div className="col-7 dropdown mb-2 px-2 row ms-1">
                        <button
                            className="btn btn-secondary dropdown-toggle col-5"
                            type="button"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Curso
                        </button>
                        <ul
                            className="dropdown-menu menuCursos"
                            aria-labelledby="dropdownMenuButton1"
                        >
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>4</b> <span style={{ fontSize: `80%` }}>(14,9 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>5</b> <span style={{ fontSize: `80%` }}>(15,6 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>6</b> <span style={{ fontSize: `80%` }}>(16,5 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>7</b> <span style={{ fontSize: `80%` }}>(17,2 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>8</b> <span style={{ fontSize: `80%` }}>(18,0 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>9</b> <span style={{ fontSize: `80%` }}>(18,9 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>10</b> <span style={{ fontSize: `80%` }}>(19,7 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>11</b> <span style={{ fontSize: `80%` }}>(20,6 mm)</span>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/#">
                                    <b>12</b> <span style={{ fontSize: `80%` }}>(21,5 mm)</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                        </div>

                        {/* <!-- Consulta de disponibilidad --> */}
                        <p className="avaibility">
                            <i className="fa fa-circle"></i> Hay stock
                        </p>

                    </div>


                    {/* <!-- Add to Cart Form --> */}
                    CANTIDAD:
                    <StockContador inicial={item.quantity} stock={item.stock} id={item.id} onAdd={onAddHandle} texto='Actualizar' />
                    <div>Total= ${itemTotal} </div>
                    <div>
                        <button className="btn btn-danger btn-sm botonAccion mb-0 fs-6 col-4 justify-self-start" id='accionEliminar' onClick={() => removeItem(item.id)}>
                                        <i className="far fa-trash-alt"></i>
                                            Eliminar
                                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
} 

export default CartItem;