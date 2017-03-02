'use strict';

import React from 'react';

import RemindHeader from "./RemindHeader.js";
import RemindMain   from "./RemindMain.js";
import RemindFooter from "./RemindFooter.js";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowAll: true, //是否显示所有的提醒事项
            remind: [
                {
                    text: "456",
                    isDone: false
                },
                {
                    text: "789",
                    isDone: true
                }
            ]
        }
    }



    //改变任务状态,
    changeRemindState(index, isDone) {
        this.state.remind[index].isDone = isDone;
        this.setState(this.state);
    }

    //添加新的提醒项
    addRemindItem(newRemindItem) {
        this.state.remind.push(newRemindItem);
        this.setState(this.state);
    }

    //显示/隐藏 所有的提醒事项
    showAll(e) {
        this.state.isShowAll = !this.state.isShowAll;
        this.setState(this.state);
    }

    render() {

        var props = {
            remindAllCount: this.state.remind.length || 0,
            remindCount: (this.state.remind && this.state.remind.filter((remind) => remind.isDone)).length || 0
        }

        return (
            <div>
                <RemindHeader {...props} />
                <RemindMain remind={this.state} changeRemindState={this.changeRemindState.bind(this)}
                    addRemindItem={this.addRemindItem.bind(this)} />
                <RemindFooter isShowAll={this.state.isShowAll} showAll={this.showAll.bind(this)} />
            </div>

        )
    }

}


ReactDOM.render(
    <App />,
    document.getElementById('remind')
)