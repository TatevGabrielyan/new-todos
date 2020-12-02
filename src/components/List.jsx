import React, {useEffect} from 'react';
import Item from './Item';
import {useSelector} from 'react-redux';
import {v1 as uuid} from 'uuid'


function List(){
    let todos = useSelector (state => state);
    return(
        <div className='my-4'>
           {todos.map((todo, index)=> {
            //    console.log(index);
               return <Item key = {index} todo = {todo}/>
              
           })}
           
        </div>
    )
}

export default List