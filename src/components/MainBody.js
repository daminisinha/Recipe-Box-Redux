import React from 'react';

export default class MainBody extends React.Component{
    render(){
        // if (!this.state.toAdd){
        //     document.getElementsByClassName('mainBody').show();
        //     document.getElementsByClassName('mainAddBody').hide();
        // }else{
        //     document.getElementsByClassName('mainAddBody').show();
        //     document.getElementsByClassName('mainBody').hide();
        // }
        return(
            <div>
         
                <div className="mainBody">
                <h1>Welcome to Recipe Box!</h1>
                <h2>Share your own recipe here! </h2>
                <h3>Perfect place to browse while cook</h3>

                </div>

                {/* <div className="mainAddBody">
                <h2>Hi from add Recipe</h2>
                </div> */}
                
            </div>
        )
    };
}