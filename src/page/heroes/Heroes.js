import React, {useEffect, useState} from "react";
import axios from 'axios';

export const Heroes = (props) =>{
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        getHeroes()
    }, []);

    //async 키워드를 붙이면 비동기로 구동
    //async 안에 반드시 await가 있어야한다.
    //await 뒤에는 반드시 Promise가 와야 한다.
    const getHeroes = async () => {
        let res = await axios.get('http://ec2-15-164-134-124.ap-northeast-2.compute.amazonaws.com:8000/api/user/heroes');
        console.log(res);
        console.log(res.data);
        console.log(res.data.data);
        setHeroes(res.data.data)
    };
    return (
        <div>
            {
                heroes.map(item => {
                    return(
                            <div key={item.id}>
                                {item.name}
                                <img src={item.photo} width={'100%'}/>
                            </div>
                    )
                })
            }
        </div>
    )
};