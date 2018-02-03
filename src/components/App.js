import React from 'react';
import LeftNav from './LeftNav';
import MainBody from './MainBody';
export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
        views:{
                isAddRecipe:false,
                isRemoveRecipe:false,
                isEditRecipe:false
              }
         };
      this.changeMainBodyChildren: this.changeMainBodyChildren.bind(this);
    }
    
  changeMainBodyChildren(value){
    var self = this;
    switch(value){
        case 'isAddRecipe': self.setState({
              
                                      views:{
                                             isAddRecipe:true,
                                             isRemoveRecipe:false,
                                             isEditRecipe:false
                                            }
               
                                        });
                                        break;
        case 'isRemoveRecipe': self.setState({
              
                                      views:{
                                             isAddRecipe:false,
                                             isRemoveRecipe:true,
                                             isEditRecipe:false
                                            }
               
                                        });
                                        break;
         case 'isEditRecipe': self.setState({
              
                                      views:{
                                             isAddRecipe:false,
                                             isRemoveRecipe:false,
                                             isEditRecipe:true
                                            }
               
                                        });
                                        break;
                            
    }  
  }
    render()
    {
        return(
        <div>
         <LeftNav changeMainBodyChildren ={this.changeMainBodyChildren}/>
         <MainBody viewState = {this.state.views}/>
            </div>
        );
    }
}


