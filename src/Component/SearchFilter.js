import React, { Component } from 'react'

class SearchFilter extends Component {

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
            'italy',
            'japan',
            'malaysia',
            'new zealand',
            'zimbabwe',
            'yemen',
            'vietnam',
            'qatar',
        ],
        searchValue: []
      }
    }

    searchResult(input) {
      this.setState({searchValue: this.state.value.filter((val) => {
        return val.includes(input.toLowerCase())
      })})
    }

    render() {
        return (
        <React.Fragment>
          <h1>Search Filter</h1>
          <div className="ui search">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search.." onChange = {(event) => this.searchResult(event.target.value)}/>
              <i className="search icon"></i>
            </div>
          </div>

          <div className="ui six column grid" style = {{padding: '20px'}}>
            {this.state.searchValue.map((value, index) =>  
            <div className="column" key = {index}>
              <div className="ui fluid card">
                <div className="content">
                  <h1 className="header">{value.charAt(0).toUpperCase()+value.slice(1)}</h1>
                </div>
              </div>
            </div>)}
          </div>
          <hr></hr>
        </React.Fragment>
    )
  }
}

export default SearchFilter