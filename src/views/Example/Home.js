import React from "react";
import { connect } from "react-redux";
import HocColor from "../HOC/HocColor";

class Home extends React.Component {
//   componentDidMount(){
//       setTimeout(()=>{
//           this.props.history.push('/todo')
//       }, 3000
//       )
//   }
  handleDeleteUser = (user) =>{
    console.log(">>>>check user", user)
    this.props.deleteUserRedux(user)
  }
  handleCreatUser = () => {
    this.props.addUserRedux()
  }
  render() {
    console.log("check data redux", this.props.dataRedux);
    let listUser = this.props.dataRedux;
    return (
      <>
      <div>Hello My WEBSITE </div>
      <button onClick={()=>this.handleCreatUser()}>ADD New</button>
      <input />
      <div>
        {listUser && listUser.length > 0 &&
          listUser.map((item, index)=>{
            return (
              <div key={item.id}>
                {index + 1} - {item.name}-
                <span onClick={()=>this.handleDeleteUser(item)}>x</span>

              </div>
            )
          }
        )}
      </div>
      </>
    );

  }
}

const mapStateToProps = (state) => {
  return {dataRedux : state.users } //state.user bên rootRedurs
}

const mapDispatchtoProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => {
      dispatch({
        type: 'DELETE_USER',
        payload: userDelete // payload là dữ liệu id muốn xóa
      });
      console.log("payload", userDelete);
    },
    addUserRedux: () => { 
        dispatch({
          type : 'ADD_USER',
        })
    }
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(HocColor(Home));
// trong Home kết nối với redux