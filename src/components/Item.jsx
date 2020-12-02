import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions';

const axios = require('axios');

function Item({todo}){

    const [editable, setEditable] = useState(false);
    const [title, setName] = useState(todo.title);
    const [desc, setDesc] = useState(todo.desc);
    const [color, setColor] = useState(todo.color);

    let dispatch = useDispatch();
    const getResp = () => {
        try {
          return axios.get('https://todo.eachbase.com/api/[TatevGabrielyan]/todos/:todoId');
          
        } catch (error) {
          console.error('error'+ error)
        }
        
      }
      
      const todoRequest = async () => {
        const axReq = getResp()
          .then(response => {
            if (response.data.message) {
              response.data.title=title;
              response.data.desc=desc;
              response.data.color=color;
              // console.log(response)
            }
          })
          .catch(error => {
            console.log('error'+error)
          })
      }
      
      todoRequest()
    return(
        <div>
            <div className='row mx-2 align-items-center'  style={{borderBottom: '1px solid cornflowerblue'}}>
                <div className='col' style={{textAlign:'start'}}>
                   
                    {editable ? <input type='text' className='form-control' value={title}
                    onChange = {
                        (e) => setName (e.target.value)
                    }
                    /> 
                   
                     : <h4>{todo.title}</h4>}     
                </div>
                <div className='col' style={{textAlign:'start'}}>
                    {editable ? <input type='text' className='form-control' value={desc}
                    onChange = {
                        (e) => setDesc (e.target.value)
                    }
                    /> 
                   
                     : <h4>{todo.desc}</h4>}     
                </div>

                 <div className='col' style={{backgroundColor: todo.color}}>
                    {editable ? <input type='text' className='form-control' value={color}
                    onChange = {
                        (e) => setColor (e.target.value)
                    }
                    /> 
                   
                     : <h4>{todo.color}</h4>}  
                     
                </div>

                <button
                    onClick = {()=>{
                        dispatch(updateTodo(
                            {
                                ...todo,
                                title: title,
                                desc:desc,
                                color:color,
                            }
                        ))
                        if(editable){
                            setName(todo.title);
                            setDesc(todo.desc);
                            setColor(todo.color);
                        }
                        setEditable(!editable);
                    }}
                    className='btn btn-info m-2'>
                    {editable ? "Update" : "Edit"}
                </button>
                <button className='btn bg-danger text-white m-2'
                 onClick={() => dispatch(deleteTodo(todo.id))}
                 >
                   Delete
                </button>
              
            </div>
        </div>
    )
}

export default Item