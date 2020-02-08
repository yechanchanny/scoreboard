import React from "react";


export const ProductRow = (props) => {
    console.log(props);
    console.log(props.price);
    return(
        <tr>
            <td>{props.price}</td>
        </tr>
    )
};