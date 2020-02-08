import React from "react";

export const SearchBar = (props) => {
    return(
        <div>
            <input placeholder={'Search'} value={props.keyword} onChange={(_e) => props.setKeyword(_e.target.value)}/>
            <input type="checkbox" checked={props.stockCheck} onChange={(_e) => props.setStockCheck(_e.target.checked)}/>
        </div>
    )
};