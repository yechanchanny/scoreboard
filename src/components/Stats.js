import React from "react";

export const Stats = (props) => {
    let totalPlayers = 0;
    let totalScore = 0;
    console.log(props.players);
    // totalPlayers = props.players.length;
    // props.players.length.forEach(player => {
    //     console.log(player);
    // });


    return(
        <table className="stats">
            <tbody>
            <tr>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    )
}