function PizzaItem({getPizzas, pizza}) {
    const renderDecision = () => {
        return <button>Add Pizza to Cart</button>;
    }

    return (
        <div id="pizza-item">
           <img id="pizza-img" src={pizza.image_path} />
           <h3>{pizza.name}</h3> 
           <p>{pizza.description}</p>
           <button>Add Pizza to Cart</button>
        </div>
    )
}

export default PizzaItem;