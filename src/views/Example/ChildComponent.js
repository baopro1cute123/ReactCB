import React from 'react';

class ChildComponent extends React.Component{
   
    render(){
        let {name, age} = this.props ;
        return (
            <>
          <div>Hello my child component {name}</div>
           <div>{age} year olds</div>
            </>
        )
    }
}
export default ChildComponent