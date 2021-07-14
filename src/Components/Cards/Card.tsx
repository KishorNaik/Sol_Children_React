import React, { Component } from "react";

interface ICardParameter{
    Width:string;
    IsShadow?:boolean|undefined;
    IsRounded?:boolean|undefined
}

interface ICardState{

}

export default class Card extends Component<ICardParameter,ICardState>{

    constructor(props:ICardParameter){
        super(props);
    }

    public render(){
        let isShadowcss:string=(this.props.IsShadow) ? "shadow" : "";
        let isRoundedcss:string=(this.props.IsRounded) ? "rounded": "";
        
        let css=`card ${isShadowcss} ${isRoundedcss}`;
        console.log(css);

        return (
            <React.Fragment>

                <div className={css} style={{width:this.props.Width}}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}