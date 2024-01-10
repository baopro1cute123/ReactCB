    import React from 'react';

    class ChildComponent extends React.Component{
        
        state = {
            showJobs : false
        }
        handleClick= ()=>{
            this.setState(
                {
                    // showJobs: true 
                    showJobs : !this.state.showJobs // phủ đinh trạng thái đầu từ đang hiện có
                }
            );
        }
    
        render(){
            console.log("check data" , this.props)
            let {name, age, arrJobs} = this.props ;
            let {showJobs} = this.state ;
            let check = showJobs === true ? 'true' : 'false';
            console.log("check", check)
            return (
                <>
            <div>Hello my child component {name}</div>
            <div>{age} year olds</div>
            {showJobs === false ?
                <div><button onClick={()=>this.handleClick()}>Show</button></div>
            :
            <>
            <div className='job-lists'> 
                {Array.isArray(arrJobs) &&
                    arrJobs.map((item, index) => (
                    <div key={item.id}>
                        {item.title}-{item.salary}
                    </div>
                    ))}
                </div>
                <div>
        <button onClick={()=>this.handleClick()}>Hide</button></div>
            </>
            }
            </>

            )
        }
    }
    export default ChildComponent // hàm Array.isArray là hàm kiểm tra mảng