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
 
// this đang gọi đến biến state trong class
    render(){

        return (
            <>
            <AddComponent/>
           
            <ChildComponent 
     
      arrJobs={this.state.arrJobs}
      />
            </>
        )
    }
}
export default MyComponents