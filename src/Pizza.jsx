export default function Pizza(props){

    // if(props.pizza.soldOut)return null;
    return (
        <li className={`pizza ${props.pizza.soldOut?"sold-out":""}`}>
            <img src={props.pizza.photoName} alt={props.pizza.name} />
            <div>
                <h3>{props.pizza.name}</h3>
                <p>{props.pizza.ingredients}</p>
                <span>{props.pizza.soldOut?"sold out":props.pizza.price}</span>
            </div>
        </li>
    )
}