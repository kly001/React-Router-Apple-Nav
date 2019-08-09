import React from "react";


const CategoryPage = (props) => {
    const id = props.match.params.id;
    const category = props.categories.find(category=> `${category.id}`===id);
    return (
        <div>
            <h1>{category.name}</h1>
            <h3>{category.description}</h3>
            <p>{category.products}</p>

        </div>
    )
}

export default CategoryPage;