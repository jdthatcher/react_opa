import React, { Component } from 'react';




class Home extends Component {
render() {
    return ( 
<div>    
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">welcome to comsynth</h1>
            <p className="lead">for all you design and development dreams</p>
        </div>
    </div>
    <div className="container my-5">
    <div className="row">
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                   
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                   
                </div>
            </div>
        </div>
    </div>
</div>

</div>
    );
}
}

export default Home;