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
        console.log(category[key]);
        category[key].forEach(item => {
            const chan = category[key];
            categoryList.push(
                <ProductRow/>
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