'use strict';
import React from 'react';

export default class ReminMain extends React.Component {


    //checkbox 勾选
    handleChange(e) {
        let isDone = e.target.checked;
        let index = e.target.getAttribute("data-index");
        this.props.changeRemindState(index, isDone);
    }

    // 输入框回车 添加数据
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            let v = e.target.value;
            if (!v) return false;
            let newRemindItem = {
                text: v, isDone: false
            }
            e.target.value = "";
            this.props.addRemindItem(newRemindItem);
        }
    }

    render() {
        

        return (
            <div className="main">
                <ul>
                    {this.props.remind.remind.map((item, index) => {
                        let isShowAll = (!this.props.remind.isShowAll && item.isDone) ? "dn" : "";
                        let doneStyle = item.isDone ? {textDecoration: 'line-through'} : {textDecoration: 'none'};
                        return (
                            <li key={index} className={isShowAll} style={doneStyle} >
                                <input className="inp " type="checkbox" checked={item.isDone} onChange={this.handleChange.bind(this)} data-index={index} />
                                <div className="text">{item.text}</div>
                            </li>
                        )
                    })}

                    <li className="entry_li">
                        <input type="text" className="entry_inp" onKeyUp={this.handleKeyUp.bind(this)} placeholder="来添加一个提醒事项吧" />
                    </li>
                </ul>
            </div>
        )
    }
}