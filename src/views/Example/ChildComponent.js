import React from 'react';

class ChildComponent extends React.Component{
   
    render(){
        console.log("check data" , this.props)
        let {name, age, arrJobs} = this.props ;
        return (
            <>
          <div>Hello my child component {name}</div>
           <div>{age} year olds</div>
           <div className='job-lists'> 
        
  {Array.isArray(arrJobs) &&
    arrJobs.map((item, index) => (
      <div key={item.id}>
        {item.title}-{item.salary}
      </div>
    ))}
</div>

            </>
        )
    }
}
export default ChildComponent // hàm Array.isArray là hàm kiểm tra mảng