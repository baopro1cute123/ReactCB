import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponents extends React.Component{
    
    state = {
       firstName : '',
       lastName : '',
       arrJobs : [
        { id : 'Job1',
          title : 'developer',
          salary : '500',    
        },
        { id : 'Job2',
          title : 'developer1',
          salary : '1500',    
        },
        { id : 'Job3',
          title : 'developer2',
          salary : '2500',    
        },
       ]
    }
    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }
    handleSumit = (event)=> {
        event.preventDefault() // hàm ngăn chặn reset web
        console.log('>>>checkdata' , this.state)
    }
// this đang gọi đến biến state trong class
    render(){

        return (
            <>
           <form >
                <label htmlFor="fname">First name:</label><br/>
                <input 
                type="text"  
                value={this.state.firstName}
                onChange={(event)=> this.handleChangeFirstName(event)}
                /><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text"  
                value={this.state.lastName}
                onChange={(event)=> this.handleChangeLastName(event)}
                /><br/><br/>
                <input type="submit" 
                    onClick={(event)=>this.handleSumit(event) }
                />
            </form> 
            <ChildComponent 
      name={this.state.firstName} 
      age={'22'}
      address={'QNgai'}
      arrJobs={this.state.arrJobs}
      />
            </>
        )
    }
}
export default MyComponents