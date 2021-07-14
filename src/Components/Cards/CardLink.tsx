import React, { Component } from "react";

interface ICardLinkProps{
    Class?:string|undefined;
    Href?:string|undefined;
    Text?:string|undefined;
}

export class CardLink extends Component<ICardLinkProps,{}>{
    constructor(props:ICardLinkProps){
        super(props);
    }

    public render(){
        return (
            <React.Fragment>
                <a href={this.props.Href} className={this.props.Class}>{this.props.Text}</a>
            </React.Fragment>
        )
    }
}