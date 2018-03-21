import React, { Component } from 'react';
import NewItem from "./components/NewItem";
import ItemList from "./components/ItemList";


import './App.css';

class App extends Component {
  state = {
    newItem:"",
    itemList:[
      {name: 'apple' ,bought: false},
      {name: 'banana' ,bought: true},
    ]
  };

  addItemHandler = (event) => {
    event.preventDefault();
    const newItem = {
      name:this.state.newItem,
      bought: false
    }
    const itemList = this.state.itemList;
    itemList.push(newItem);
    this.setState({itemList:itemList, newItem:""})
    console.log(this.state);
  }

  onChangeHandler =(event) =>{
    console.log(this.state.newItem);
    this.setState({newItem: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>React Grocery List App</h1>
        <NewItem 
          addItemHandler = {this.addItemHandler}
          newItem = {this.state.newItem}
          onChange = {this.onChangeHandler}/>
        <ItemList 
          ItemList = {this.state.itemList}
          newItem = {this.state.newItem}/>
      </div>
    );
  }
}

export default App;
