'use strict';
import React from 'react';

export default class RemindFooter extends React.Component {


    
    render() {
        let str = this.props.isShowAll ? "隐藏" : "显示"
        return (
            <div className="footer">
                <a href="javascript:;" onClick={this.props.showAll.bind(this)} className="showbtn">{str}已完成的项目</a>
            </div>
        )
    }
}



