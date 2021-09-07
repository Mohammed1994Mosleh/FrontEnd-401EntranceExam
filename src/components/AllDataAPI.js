import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class AllDataAPI extends Component {
    constructor(props){
        super(props);
        this.state={
      
        }
      }

  componentDidMount(){


    this.props.getAlldata()
  }    



    render() {
        return (
            <div>
                  { this.props.allData.map(item=>{
return(
  <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src={item.imageUrl} />
<Card.Body>
<Card.Title>{item.title}</Card.Title>

<Button onClick={()=>this.props.Addtofav(item)} >Add to faviorate</Button>
</Card.Body>
</Card>

)
 


     })  } 
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);



