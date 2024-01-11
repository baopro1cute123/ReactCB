import React from 'react';
import { toast } from 'react-toastify';
import './ListTodo.scss';

class AddTodo extends React.Component{
    
    state = {
       title : ''
    }
    handleOnChangleTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodos = () =>{
        if(!this.state.title){
           toast.error(`Missing title toDos`)
            return;
            //undefined//null/empty
        }

        this.props.addNewToDo({
            id: Math.floor(Math.random()*1001),
            title: this.state.title
        })
        this.setState({
            title: ''
        })
    }
   
    render(){

        let {title} = this.state
        return (
            <>  
           
                <div className='add-todo'>
                    <input type='text' value={title} 
                    onChange={(event)=> this.handleOnChangleTitle(event)}
                    />
                    <button type='button' className='add' onClick={()=> this.handleAddTodos()}>ADD</button>
                </div>
            
            </>
        )
    }
}
export default AddTodo;