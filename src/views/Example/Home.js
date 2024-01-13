import React from "react";
import HocColor from "../HOC/HocColor";

class Home extends React.Component {
//   componentDidMount(){
//       setTimeout(()=>{
//           this.props.history.push('/todo')
//       }, 3000
//       )
//   }

  render() {
    console.log("check props", this.props);
    return <div>Hello My WEBSITE </div>;
  }
}

export default HocColor(Home);
