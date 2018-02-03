import React from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../actions'
import MainBody from '../components/MainBody';

let ToAddRecipe =({dispatch})=>{
    let toAdd = this.props.toAdd;
    return(
      <div>
          console.log()
          <MainBody  toAdd={this.state.toAdd}/>
    </div>
    )
}

export default ToAddRecipe;