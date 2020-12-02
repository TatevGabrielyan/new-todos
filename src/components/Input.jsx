import React, {useEffect, useState } from 'react'
import { addTodo } from '../redux/actions'
import {v1 as uuid} from 'uuid'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';


const LOCAL_STORAGE_KEY = "todo";

function Input(){
  

    let [title, setName] = useState();
    let [desc, setDesc] = useState();
    let [color, setColor] = useState();
    let dispatch = useDispatch();
    

    const { register,  handleSubmit, errors } = useForm(); 
    const onSubmit = (data) => {
      console.log(data);
      
    };
    const [disable, setDisable] = useState(true);
    function handleChange(event) {
      setDisable(event.target.value === '');
  }

  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTodos) {
  //     setTodos(storageTodos);
  //     // console.log(todos)
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  //   }
  // }, [todos]);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  // }, [todos]);
  // console.log(localStorage);


 
    return(
        <div>
            <div className="row m-2 ">
           <form onSubmit={handleSubmit(onSubmit)} className='mx-auto'>
                <input 
                 onChange={(e) => setName(e.target.value)
                  
              }
                 onBlur={handleChange}
                 name="title" 
                //  value={title}
                 placeholder='title'
                 id='inpt1'
                 className='col form-control m-2'
                 style={{background: 'azure'}}
                 ref={register({ required: true })} 
                />
                {errors.title && 'Title is required.'}
                <input
                 onChange={(e) => setDesc(e.target.value)}
                 onBlur={handleChange}
                 name="desc" 
                //  value={desc}
                 placeholder='Description'
                 type="text" 
                 ref={register({ required: true })} 
                 style={{background: 'azure'}}
                 className='col form-control m-2'
                />
                {errors.desc && <span>This field is required</span>}
                <input
                 onChange={(e) => setColor(e.target.value)}
                 onBlur={handleChange}
                 name="color" 
                //  value={color}
                 placeholder='Color'
                 type="text" 
                 ref={register({ required: true })} 
                 style={{background: 'azure'}}
                 className='col form-control m-2'
                />
                {errors.color && <span>This field is required</span>}

                <button 
                    onClick ={() => {
                      const item = {
                        id: uuid(),
                        title:title,
                        desc:desc,
                        color: color,
                    };
                       dispatch(addTodo(item));

                            
                      const todos = JSON.parse(localStorage.getItem('todo'));
                      todos.push(item);
                      localStorage.setItem('todo', JSON.stringify(todos));
                      
                    


                      setName('');
                      setDesc('');
                      setColor('');
                    }}
                    disabled={disable}
                    className='btn btn-lg mx-2'
                    type='submit' 
                    style={{background: '#2EBAEE', color:'white'}}>
                      Add
                    </button>
               </form>
                
            </div>
        </div>
    )
}

export default Input