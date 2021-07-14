import React, { Component } from "react";


export class CardBody extends Component{

    public render(){
        return (
            <React.Fragment>
                <div className="card-body">
                    {this.props.children}
                </div>
                
            </React.Fragment>
        )
    }

}