import React from "react";


const CategoryPage = (props) => {
    const id = props.match.params.id;
    const category = props.categories.find(category=> `${category.id}`===id);
    return (
        <div className = "category-page">
            <h1>{category.name}</h1>
            <p>{category.description}</p>
            <h3>Products List: </h3>
            <p>{category.products}</p>

        </div>
    )
}

export default CategoryPage;