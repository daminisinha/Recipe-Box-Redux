import React from 'react';

export default class MainBody extends React.Component{
    render(){
         var componentToShow = null;
         var viewState = this.props.viewState;
         if(viewState.isAddRecipe){
            componentToShow = // render your component here eg. <AddRecipe />
         }
         else if(viewState.isRemoveRecipe){
            componentToShow = // render remove recipe.
         }
         //similarly for third condition or other conditions.
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
            
                {componentToShow}
                
            </div>
        )
    };
}
