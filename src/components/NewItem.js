import React from "react";

class NewItem extends React.Component{
    render(){
        return(
            <form>
                <input 
                    type="text" 
                    placeholder = "Add new item.."
                    value = {this.props.newItem}
                    onChange = {(event)=>this.props.onChange(event)}/>
                <button 
                    type ="submit"
                    onClick = {event => this.props.addItemHandler(event)}
                    >Add Item </button>    
            </form>
        )
    };
};

export default NewItem;