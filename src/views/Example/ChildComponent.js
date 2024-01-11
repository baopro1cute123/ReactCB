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
        handleOnclickDelete = (job) => {
            this.props.deleteAJob(job)

        }
    
        render(){
            console.log("check data" , this.props)
            let { arrJobs} = this.props ; //nhận dữ liệu từ Mycomponents
            let {showJobs} = this.state ; //state được khai báo phía trên
            let check = showJobs === true ? 'true' : 'false';
            console.log("check", check)
            return (
                <>
            {showJobs === false ?
                <div><button onClick={()=>this.handleClick()}>Show</button></div>
            :
            <>
            <div className='job-lists'>
                {Array.isArray(arrJobs) &&
                    arrJobs.map((item, index) => (
                    <div key={item.id}>
                        {item.title}-{item.salary} <span onClick={()=> this.handleOnclickDelete(item)}>X</span>
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