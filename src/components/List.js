import { useState } from "react";
import Item from "./Item.js";

const List = (props) => {
  return props.items.map((item, index) => (
    <div key={index}>
      <Item
        item={item}
        index={index}
        update={props.update}
        delete={props.delete}
      />
    </div>
  ));
};

export default List;
