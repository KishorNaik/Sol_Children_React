import React, { Component } from "react";
import Card from "./Cards/Card";
import { CardBody } from "./Cards/CardBody";
import CardImage from "./Cards/CardImage";
import { CardLink } from "./Cards/CardLink";
import { CardText } from "./Cards/CardText";
import { CardTitle } from "./Cards/CardTitle";

export default class CardDemo extends Component{

    public render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-sm-6 col-md-6">
                        <Card Width="20rem" IsShadow={true} IsRounded={true}>
                            <CardImage Src="https://www.bilaalsblog.com/wp-content/uploads/2020/05/react-logo-emblem-black-background-e1597551695195.png" Alt="React"></CardImage>
                            <CardBody>
                                <CardTitle Text="Card Title"></CardTitle>
                                <CardText Text="Some quick example text to build on the card title and make up the bulk of the card's content."></CardText>
                                <CardLink Text="Go Somewhere" Class="btn btn-primary" Href="#"></CardLink>
                            </CardBody>
                        </Card>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}