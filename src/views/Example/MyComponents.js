import React from 'react';
import AddComponent from './AddComponent';
import ChildComponent from './ChildComponent';
class MyComponents extends React.Component{
    
    state = {
      
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
 
    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]  // ghép mảng job và arrJobs
        })
        console.log("check job", job)
    }
    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;// item để gọi thay mảng
        currenJobs = currenJobs.filter(item => item.id !== job.id) //lọc những phần tử có id của iteam khác với id của job
        this.setState({
            arrJobs: currenJobs
        })
        
    }
// this đang gọi đến biến state trong class
    render(){

        return (
            <>
            <AddComponent
                addNewJob= {this.addNewJob}
            />
           
            <ChildComponent 
     
      arrJobs={this.state.arrJobs}
      deleteAJob = {this.deleteAJob}

      />
            </>
        )
    }
}
export default MyComponents