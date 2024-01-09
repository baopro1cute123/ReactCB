import React from 'react';

class MyComponents extends React.Component{
    
    state = {
        name : "Bảo",
        channel: "HoiDanIT"
    }
    handleonChangeName = (event) =>{
        this.setState({
            name: event.target.value
        })
    }
// this đang gọi đến biến state trong class
    render(){

        return (
            <>
            <div> 
            <input value={this.state.name} type='text'
            onChange={(event)=> this.handleonChangeName(event)}></input>
             My name is{this.state.name}</div>
            <div>Học ReactJS tại youtube {this.state.channel}</div>
            </>
        )
    }
}
export default MyComponents