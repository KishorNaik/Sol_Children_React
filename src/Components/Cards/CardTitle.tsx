import React, { Component } from "react";

interface ICardTitleProps{
    Text?:string|undefined;
}

export class CardTitle extends Component<ICardTitleProps,{}>{
    constructor(props:ICardTitleProps){
        super(props);
    }

    public render(){
        return (
            <React.Fragment>
               
                    <h5 className="card-title">
                        {this.props.Text}
                    </h5>
               
            </React.Fragment>
        )
    }
}