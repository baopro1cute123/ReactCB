import React from 'react';
class AddComponent extends React.Component{
    state = {
        title : '',
        salary : '',
       
     }
     handleChangetitleJob = (event) =>{
         this.setState({
             title: event.target.value
         })
     }
     handleChangeSalary = (event) =>{
         this.setState({
             salary : event.target.value
         })
     }
     handleSumit = (event)=> {
        
         event.preventDefault() // hàm ngăn chặn reset web
         if (!this.state.title || !this.state.salary){
            alert("Missing required params")
            return ;
         }
         console.log('>>>checkdata' , this.state)
         this.props.addNewJob({ // hàm addNewJob được lấy từ props
            id : Math.floor(Math.random()*1001),
            title: this.state.title, //lấy dữ liệu từ nhập vào từ value input
            salary: this.state.salary,
         })
         this.setState({
            title : '',
            salary : '',
         })

     }
   
    render(){

        return (
            <>
           <form >
                <label htmlFor="fname">JobTitle:</label><br/>
                <input 
                type="text"  
                value={this.state.title}
                onChange={(event)=> this.handleChangetitleJob(event)}
                /><br/>
                <label htmlFor="lname">Salary:</label><br/>
                <input type="text"  
                value={this.state.salary}
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