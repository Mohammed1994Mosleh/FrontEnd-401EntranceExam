import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class MyFavorites extends React.Component {
constructor(props){
  super(props);
  this.state={

  }
}

componentDidMount(){
  const {user}=this.props.auth0;
  let email=user.email;

  this.props.handlefav(email);
}






  render() {
    return(
      <>
        <h1>My Favorites</h1>
        { this.props.favData.map(item=>{
return(
  <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={item.imageUrl} />
<Card.Body>
<Card.Title>{item.title}</Card.Title>

<Button onClick={()=>this.props.delete(item._id)} >Delete</Button>

<Button onClick={this.props.showMoadal(item._id)} >Update</Button>


</Card.Body>
</Card>

)
 


     })  } 
 
        
       

      </>
    )
  }
}

export default withAuth0(MyFavorites);

