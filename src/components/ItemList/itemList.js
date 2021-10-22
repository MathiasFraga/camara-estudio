import './itemList.css'
import Item from '../Item/item';

const ItemList = ({ course }) => {

    return (
        <>
            <Item
                title={course.title}
                description={course.description}
                price={course.price}
                pictureUrl={course.pictureUrl}
            />
        </>
    );
}

export default ItemList;