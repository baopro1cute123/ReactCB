import React from 'react';
class AddComponent extends React.Component{
    state = {
        titleJob : '',
        Salary : '',
       
     }
     handleChangetitleJob = (event) =>{
         this.setState({
             titleJob: event.target.value
         })
     }
     handleChangeSalary = (event) =>{
         this.setState({
             Salary : event.target.value
         })
     }
     handleSumit = (event)=> {
         event.preventDefault() // hàm ngăn chặn reset web
         console.log('>>>checkdata' , this.state)
     }
   
    render(){

        return (
            <>
           <form >
                <label htmlFor="fname">JobTitle:</label><br/>
                <input 
                type="text"  
                value={this.state.titleJob}
                onChange={(event)=> this.handleChangetitleJob(event)}
                /><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text"  
                value={this.state.Salary}
                onChange={(event)=> this.handleChangeSalary(event)}
                /><br/><br/>
                <input type="submit" 
                    onClick={(event)=>this.handleSumit(event) }
                />
            </form> 
         
            </>
        )
    }
}
export default AddComponent