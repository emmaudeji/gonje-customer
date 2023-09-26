import React from 'react';
import { Redirect } from 'react-router-dom';

var MyHOC = ComposedComponent => class extends React.Component {
    
    render() {
        console.log('HOC dd')  

      if( typeof window !== "undefined" && window.localStorage ){
        const user = localStorage.getItem("user_detail");
        const userObj = JSON.parse(user);

        if(userObj|| (userObj && userObj.id))
        {
            var hours = 24; 
            var now = new Date().getTime();
            var setupTime = localStorage.getItem('hours');
            if(now-setupTime > hours*60*60*1000) {
                localStorage.clear()
                
            }
        }


        if(!userObj || (userObj && !userObj.id))
        { 
          
            
            return <Redirect path="/"/>
        }
        else
        {
          

          
           return < ComposedComponent userObj={userObj} {...this.props} {...this.state}   />;

          
        }
    }
    else
    {
        return < ComposedComponent userObj={userObj} {...this.props} {...this.state}   />;
    }
        
    }
 };
 export default MyHOC;