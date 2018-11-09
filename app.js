// TODO


// var Milk = () => <li>Milk</li>;
// var Apple = () => <li>Apple</li>;

var GroceryListItem = (props) => (
  <ul>
    <li>{props.grocery[0]}</li>
    <li>{props.grocery[1]}</li>
  </ul>
);

var GroceryList = () => (
  <ul>
      <GroceryListItem grocery = {['Milk', 'Apple']}/>
  </ul>
);


ReactDOM.render(<GroceryList/>, document.getElementById('app'));

