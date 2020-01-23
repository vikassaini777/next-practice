import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
  } from "reactstrap";

class Cards extends Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <div className="container">
            <Card>
                <a>
                    <CardImg
                        width="100%"
                        src={this.props.value.img_path}
                        alt="Card Image"

                    />
                    <CardText>
                    <div className="col-md-12">
                    <p className="designerexhi">{this.props.value.username}</p>
                    </div>
                    <div className="col-md-12">
                    <p className="designerexhi">{this.props.value.location}</p>
                    </div>
                    </CardText>
                </a>
            </Card>
            </div> 
        )
    }
}

export default Cards;