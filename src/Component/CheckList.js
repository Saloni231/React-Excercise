import React, { Component } from 'react'

class CheckList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        value: [
            'india',
            'america',
            'england',
            'australia',
            'brazil',
            'france',
            'spain',
            'russia',
            'china',
            'germany',
        ],
        checkedValue: []
      }
    }

    valueSelected(input) {
        if(input.target.checked){
            this.setState({checkedValue: this.state.checkedValue.concat(input.target.value)})
        }
        else{
            this.setState({checkedValue: this.state.checkedValue.filter(function(val) {
                return val !== input.target.value;
            })})
        }
    }

    render() {
        return (
        <React.Fragment>
            <h1>CheckList</h1>
            <div className="ui two column grid">
                <div className="column">
                    <div className="ui fluid card">
                        <div className="content">
                            {this.state.value.map((val,index) => 
                            <React.Fragment key={index}>
                                <div className ="ui checkbox">
                                    <input type = 'checkbox' id = {index} value = {val} onChange = {(event) => this.valueSelected(event)}/>
                                    <label>{val.charAt(0).toUpperCase()+val.slice(1)}</label>
                                </div>
                                <br/>
                                <br/>
                            </React.Fragment>)}
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                        <div className="content">
                        <h3>Selected...</h3>
                            {this.state.checkedValue.map((val,index) => 
                            <React.Fragment key={index}>
                                <p>{val.charAt(0).toUpperCase()+val.slice(1)}</p>
                            </React.Fragment>)}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}

export default CheckList