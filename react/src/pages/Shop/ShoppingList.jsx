const Product = [
    { 
        title: 'Cabbage', 
        isFruit: false, 
        id: 1 
    },
    { 
        title: 'Garlic', 
        isFruit: false, 
        id: 2 
    },
    { 
        title: 'Apple', 
        isFruit: true, 
        id: 3 
    },
];

export const ShoppingList = () => {
    const listItems = Product.map(Product =>
        <li
            key={ Product.id }
            style={{
                color: Product.isFruit ? 'red' : 'darkgreen',
            }}
        >
            { Product.title }
        </li>
    );

    return (
        <ul>{ listItems }</ul>
    );
}