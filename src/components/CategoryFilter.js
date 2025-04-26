import React from "react";

function CategoryFilter(props) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {props.categories.map(function(category){
        return(
          <button
          key={category}
            className={category === props.selectedCategory ? 'selected' : null}
            onClick={() => props.onCategoryChange(category)} 

          
          >
            {category}

          </button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
