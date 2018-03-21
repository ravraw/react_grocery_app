import React from "react";
import Item from "./Item";

class ItemList extends React.Component{
   
    render(){
        return(
            <div>
                 {
                     this.props.ItemList.map((item,index) =>{
                     return <Item 
                        key = {index}
                        name = {item.name} 
                        //newItem ={this.props.newItem}
                     />})
                 }

            </div>
        )
    };
};

export default ItemList;