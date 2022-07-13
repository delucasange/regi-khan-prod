import React from "react";
import { navigate } from "gatsby";


export default function Back() {
  return (
    <div onClick={ () => navigate(-1) } >
      <button> ← Back</button>
    </div>
  );
}