import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <p>I am a parent</p>

      <Child color="#333">I am initialized</Child>
    </div>
  );
}

export default Parent;
