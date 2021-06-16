import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
function Home(props){
    return (
        <div className="container text center">
            <div className="row text-white text-center heading">
                A platform to show off your talent!
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row text-center">
            <div className="col-12">

            </div>
            <Link to='/'>
            <Button color="info text center">
                           Play Quiz 
                           </Button>
            </Link>
               
            </div>
        </div>
    )
}

export default Home;