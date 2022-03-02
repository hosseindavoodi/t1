import React from "react";
import {
    Link
} from "react-router-dom";
// import DetailBtn from "./DetailBtn";
// import userD from "./UserDashbord";
import Users from "./Users";
import DeleteU from "./DeleteU";
import './../App.css'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=30")
    //fetch('../comments')
      .then(response => response.json())
      .then(data => this.setState({ comments: data }))
  }

  

  render() {
    
    const { comments} = this.state;
    return (
      <div className="App">
                     

        <div style={{height: "40px"}}>
         <Users btnname={'add new user'} />
         </div>
        {comments.map(item => (
          <div key={item.id}>
          <span>{item.id}</span>
          <div  className="div1">{item.name} 

            <Link 
              to={{
                pathname: `/card/${item.id}`,
                state: {
                  email: item.email,
                  name: item.name,
                  id: item.id,
                  body: item.body

                }
              }}>
              <button className="btn btn1 btn-primary">Detail</button>
            </Link>
            <Users btnname={'Edit'} name={item.name} email={item.email} body={item.body} id={item.id}/>
            <DeleteU id={item.id} />
          </div> 
          <br/>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
