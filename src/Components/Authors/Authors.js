import React from "react";
import "./Authors.css";
export default function Authors(props) {
  const auths = props.authors;
  let details = null;
  if (auths && auths.length > 0) {
    details = props.authors[0];
    details += auths.length >=2 ? ` +${props.authors.length -1}` : "";
  }

  return details ? <React.Fragment>{details}</React.Fragment> : null;
}
