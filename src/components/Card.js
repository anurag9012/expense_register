/* import "./Card.css";

function Card(props) {
  const classes ='card' + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default Card; */

import "./Card.css";

function Card(props) {
  const classes ='card  ' + props.className;
  //const classes = 'card' + props.className;
  // not giving space after card was giving mistake !!
  return <div className={classes}>{props.children}</div>;
}

export default Card;