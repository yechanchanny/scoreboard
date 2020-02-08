import React from "react";


export const ProductRow = (props) => {
    return(
        <tr>
            <td>{props.category.name}</td>
            <td>{props.category.price}</td>
        </tr>
    )
};