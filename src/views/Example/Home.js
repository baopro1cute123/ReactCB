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

  render() {
    console.log("check data redux", this.props.dataRedux);
    return <div>Hello My WEBSITE </div>;
  }
}

const mapStateToProps = (state) => {
  return {dataRedux : state.users } //state.user bên rootRedurs
}

export default connect(mapStateToProps)(HocColor(Home));
// trong Home kết nối với redux