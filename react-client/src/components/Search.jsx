// import React from 'react';
// import ListItem from './ListItem.jsx';

// const List = (props) => (
//   <div>
//     <h4> List Component </h4>
//     There are { props.items.length } items.
//     { props.items.map(item => <ListItem item={item}/>)}
//   </div>
// )

// export default List;

import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      item: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.item);
  }

  render() {
    return (<div>
      Call the Weatherman <input value={this.state.item} onChange={this.onChange}/>       
      <button onClick={this.search}> Summon Storm </button>
    </div>) 
  }
}

export default Search;