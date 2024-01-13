import React from "react";
import { withRouter } from "react-router-dom"; // withRouter dùng để lấy props
//Khi bạn sử dụng withRouter để bao bọc một component, component đó sẽ nhận được
//các prop liên quan đến routing như match, location, và history, dù nó có được render bên trong một <Route> hay không.
import axios from "axios";
import './ListUser.scss';
class DetailUser extends React.Component {
    state = {
        User : []
    }
    async componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id; // lấy id từ props

            let res = await axios.get(`https://reqres.in/api/users/${id}`)    
            
            this.setState({
                User: res && res.data && res.data.data ? res.data.data : []
            })
            console.log('>>>>> check res', res.data.data)
        }
    }
    handleBackHome= ()=> {
        this.props.history.push(`/user`)
    }
    render() {
        let {User} = this.state ;
        console.log(">>> check props", this.props)
        let isEmptyObj = Object.keys(User).length === 0;
    return (
        <>
        <div>Hello user id: {this.props.match.params.id}</div>
        {isEmptyObj === false && 
        <>
            <div>user : {User.first_name}</div>
            <div>last_user : {User.last_name}</div>
            <div>email : {User.email}</div>
            <img src={User.avatar} alt={`${User.first_name} ${User.last_name}'s Avatar`} />
            <div>
                <button
                onClick= {()=> this.handleBackHome()}> Back

                </button>
            </div>
        </>
    }
        </>
    );
    }
}
export default  withRouter(DetailUser)