import React, { Component } from 'react';
import axios from 'axios';




class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faqs: []


        };
    }
    componentDidMount() {
        axios.get ('https://api.openbrewerydb.org/breweries')
            .then(res => {
                const faqs = res.data.slice(0,100);
                this.setState({ faqs });
        })
    }



render() {
    return ( 
    <div> 


<div className="container my-5">

<div className="row">
    {this.state.faqs.map(faq =>

<div className="col-sm-4">
<div className="card">
    <div className="card-body">
    <h5 className="title"> { faq.name }</h5>
    <hr/>
    <p className="small"><strong>City: </strong>{ faq.city }<br/> <strong>Country</strong> { faq.country }<br/>  <strong>Phone</strong> { faq.phone }<br/> <strong>Url: </strong>{ faq.website_url }</p>
    </div>
</div>
</div>


        )}
        </div>  

</div>

</div>
 

    
    );
}
}

export default Faq;