export default function Footer() {
    const currentTime = new Date().getHours();
    const openingTime = 10;
    const closingTime = 22;
    const isOpen = (currentTime >= openingTime && currentTime <= closingTime) ;

    return(
        <footer className="footer">
            
            {isOpen?
                    <Order closingTime={closingTime}/>
                    :
                    <p>come at {openingTime} bro</p>
                
            }
        </footer>
    );
}

function Order(props){


    return (
        <div className="order">
            <p>We're open until {props.closingTime}:00. Come visit or order online.</p>
            <button className="btn">Order</button>
        </div>
    )
}