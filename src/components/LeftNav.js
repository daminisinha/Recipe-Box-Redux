import React from 'react';
import {Button} from 'reactstrap';
import { Nav, NavItem } from 'reactstrap';
import ToAddRecipe from '../containers/ToAddRecipe';

export default class LeftNav extends React.Component{
    constructor(props){
        super(props);
        this.addRecipeHandler= this.addRecipeHandler.bind(this);
    }
    componentWillMount(){
        this.state = {toAdd:null};
    }
    addRecipeHandler(){
        this.setState({toAdd:true});
        <ToAddRecipe toAdd={this.state.toAdd}/>
        console.log("the value "+this.state.toAdd);
    }
    render(){
        return(
           
            <div className="sideNav">
                <Nav vertical>
                <NavItem>
                <label className="sideLabel">
                <span><i className ="fa fa-cutlery"/></span>
                Recipe Box
                </label>
                </NavItem>
                <NavItem>
            <Button outline color="primary" size="lg" className="leftButtons" onClick = {this.addRecipeHandler}>Add Recipe</Button>{''}
            </NavItem>
            <NavItem>
            <Button outline color="success" size="lg">Show All Recipes</Button>{''}
            </NavItem>
            <NavItem>
            <Button outline color="danger" size="lg">Remove All Recipes</Button>{''}
            </NavItem>
            <NavItem>
               <label className="listRecipes">List of Recipes</label>{''}
            </NavItem>
             </Nav>
            </div>
        )
    };
}