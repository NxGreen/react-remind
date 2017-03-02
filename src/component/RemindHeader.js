'use strict';
import React from 'react';

export default class RemindHeader extends React.Component{

    render(){
        return (
            <div className="head clear">
                <h2>提醒事项</h2>
                <div className="right">
                    <span className="num">{ this.props.remindCount}</span>
                </div>
            </div>
        )
    }
}