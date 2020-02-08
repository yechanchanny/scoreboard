import React from "react";
import _ from 'lodash';
import {ProductCategoryRow} from "./ProductCategoryRow";
import {ProductRow} from "./ProductRow";

export const ProductTable = (props) => {
    const category = _.groupBy(props.products, 'category');

    const categoryList = [];
    for(let key in category){

        categoryList.push(
            <ProductCategoryRow category={key} key={key}/>
        );
        category[key].forEach(item => {
            categoryList.push(
                <ProductRow category={item} key={key}/>
            );
        });

    }
    return(
        <>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    categoryList
                }
                </tbody>
            </table>
        </>
    )
};