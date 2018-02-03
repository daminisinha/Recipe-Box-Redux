import React from 'react';
import LeftNav from './LeftNav';
import MainBody from './MainBody';
export default class App extends React.Component{
    changeMainBodyChild(){
        
    }
    render()
    {
        return(
        <div>
         <LeftNav/>
         <MainBody/>
            </div>
        );
    }
}


