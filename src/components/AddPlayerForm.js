import React from "react"
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
    state = {
        value : ''
    };

    handleValueChange(){

    }

    render() {
        return(
            <form action="" className="form">
                <input id="player"/>
            </form>
        )
    }
}

// dispatch : {액션을 디스패치하는} 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
   // 왼쪽은 props, 오른쪽은 펑션
    addPlayer : (name) => dispatch(addPlayer(name))
});


//HoC, 커링 펑션
export default connect(null, mapActionToProps)(AddPlayerForm);