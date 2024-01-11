import React from 'react';
import { toast } from 'react-toastify';
import AddTodo from './AddTodo';
import './ListTodo.scss';
class ListTodo extends React.Component{
    
    state = {
        listTodos : [
            {
                id: 'todo1',
                title: 'Lam BTVN1',
            },
            {
                id: 'todo2',
                title: 'Lam BTVN2',
            },
            {
                id: 'todo3',
                title: 'Lam BTVN3',
            }
        ],
        editTodo: {

        }
    }
    addNewToDo = (todo)=>{
        // let currenListTodo = this.state.listTodos
        // currenListTodo.push(todo);
        this.setState({
            listTodos : [...this.state.listTodos,todo]
            // listTodos: currenListTodo
        })
        toast.success("ADD THANH CONG")

    }
    handleDeleteTodo = (todo) =>{
        let currenTodo = this.state.listTodos;// item để gọi thay mảng
        currenTodo = currenTodo.filter(item => item.id !== todo.id) //lọc những phần tử có id của iteam khác với id của job
        this.setState({
            listTodos: currenTodo
        })
        toast.success("Delete THANH CONG")

    }
    handleEditTodo= (todo) =>{
        let {editTodo, listTodos} = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        
        //save
        if(isEmptyObj === false && editTodo.id === todo.id){
            
            let listTodosCopy = [...listTodos]
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            //Log object to Console.
            console.log("Before update: ", listTodosCopy[objIndex])

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update Thanh Cong")
                        return;
        }

        //Edit
        this.setState({
            editTodo: todo // gan gia tri can sua todo vao editTodo
        })
    }
    handleOnChangeEdit = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value;

        this.setState({
            editTodo: editTodoCopy
        })
    }
    render(){

        let {listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // dieu khien so sanh ham kieu tra xe cai EditTodo co rong hay khong
        console.log('checkemtyOjb', isEmptyObj)
        return (
            <>  
            <div className='list-todo-container'>
            <h3>Xin chào TODOS-APP</h3>

               <AddTodo addNewToDo={this.addNewToDo}/>
                <div className='list-todo-content'>
                {listTodos && listTodos.length > 0 &&
                
                    listTodos.map((item, index) =>{
                        return (
                    <div className='todo-child' key={item.id}>
                        {isEmptyObj === true ?
                            <span>{index+1}-{item.title}</span>
                            :
                            <>
                            {editTodo.id === item.id ?
                        <span>
                            {index+1} - <input 
                            value={editTodo.title}
                                onChange={(event)=> this.handleOnChangeEdit(event)}
                            />
                        </span>
                        :
                        <span>{index+1}-{item.title}</span>
                    }
                        </>
                    }
                        <button className='edit'
                        onClick={()=> this.handleEditTodo(item)}
                        >
                        {isEmptyObj === false && editTodo.id === item.id
                        ? 'Save': 'Edit'}
                        </button>
                        <button className='delete'
                        onClick={()=> this.handleDeleteTodo(item)}>Delete</button>
                    </div>
                        )
                    })
                }
                    
                   
                    
                </div>
            
            </div>
            
            </>
        )
    }
}
export default ListTodo;