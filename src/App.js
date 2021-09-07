import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Login from './Login';
import MyFavorites from './components/MyFavorites';
import AllDataAPI from './components/AllDataAPI'
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Modal1 from './components/Modal1'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
  allData:[],
  favData:[],
  showMoadal:false,
  selsectrId:''
    }
  }


  async handlefav(email){
   
let newData=await axios.get((`${process.env.REACT_APP_Serverurl}/getfav?email=${email}`));
await this.setState({favData:newData.data})
    
  }

   getAlldata=async()=>{

    let allDataa=await axios.get(`${process.env.REACT_APP_Serverurl}/getchocolate`);
    await this.setState({allData:allDataa.data});
    console.log(this.state.allData);



  }

  Addtofav=async (item)=>{
  const {user}=this.props.auth0;
  let email=user.email;
  let obj=item


  let newData=await axios.post(`${process.env.REACT_APP_Serverurl}/Add?email=${email}`,obj);
  this.setState({favData:newData.data});

}

delete=async(id)=>{
  const {user}=this.props.auth0;
  let email=user.email;


let deleteData=await axios.delete(`${process.env.REACT_APP_Serverurl}/delete/${id}?email=${email}`);
await this.setState({favData:deleteData.data});

}

showMoadal=(id)=>{
this.setState({showMoadal:true,selsectrId:id});

}
closeMoadal=()=>{

  this.setState({showMoadal:false}); 

}

Update=async(e)=>{
  const {user}=this.props.auth0;
  let email=user.email;
e.preventDefault();
// let newTitle=e.target.title.value;
// let newimage=e.target.image.value;
let newObj={
  newTitle:e.target.title.value,
  newimage:e.target.image.value,

}

let newData=await axios.put(`${process.env.REACT_APP_Serverurl}/Update/${this.state.selsectrId}?email=${email}`);

await this.setState({
  favData:newData.data

})





}






  render() {
    return(
      <>
        <Router>
            <Header />
            <Switch>

              <Route exact path="/">
                {this.props.auth0.isAuthenticated ?<> <Modal1 Update={this.Update} closeMoadal={this.closeMoadal} showMoadal={this.state.showMoadal}/> <MyFavorites handlefav={this.handlefav} showMoadal={this.showMoadal} delete={this.delete} favData={this.state.favData}  /> </>: <Login />}
              </Route>

              <Route path="/profile">
                <Profile/>
              </Route>

              <Route path="/getAPIData">
                <AllDataAPI getAlldata={this.getAlldata} allData={this.state.allData}/>
              </Route>
              
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

