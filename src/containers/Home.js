import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component{

    render(){
      let   areUserLogged ,userName;
      if (window.localStorage.getItem('isLogged')&&(window.localStorage.getItem('userName')!== 'undefined')) {

        areUserLogged = ' logged! :) ';
        userName= window.localStorage.getItem('userName');
      }
      else {

        areUserLogged = 'still not logged :( ';
      userName='';
    }
        return (
        <div className="home-page">
<u><h2>Home</h2> </u>

Hi dear  {userName},<br/>
You correctly {areUserLogged} <br/> 
        </div>
          )}
}
const mapStateToProps = state => {
    return {
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        
      }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);