import React, { Component } from "react";

interface ICardImageProps{
    Src?:string|undefined
    Alt?:string|undefined
}

interface ICardImageState {

}

export default class CardImage extends Component<ICardImageProps,ICardImageState>{

    constructor(props:ICardImageProps){
        super(props);
    }

    public render(){
        return (
            <React.Fragment>
                <img src={this.props.Src} className="card-img-top" alt={this.props.Alt}></img>
            </React.Fragment>
        )
    }
}