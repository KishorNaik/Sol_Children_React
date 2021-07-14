import React, { Component } from "react";

interface ICardTextProps{
    Text?:string|undefined;
}

export class CardText extends Component<ICardTextProps,{}>{
    constructor(props:ICardTextProps){
        super(props);
    }

    public render(){
        return (
            <React.Fragment>
                <p className="card-text">
                    {this.props.Text}
                </p>
            </React.Fragment>
        )
    }
}