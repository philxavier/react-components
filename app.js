// TODO
var GroceryList = () => (
  <ul>
      <Milk />
      <Apple />
  </ul>
);

var Milk = () => <li>Milk</li>;
var Apple = () => <li>Apple</li>;


ReactDOM.render(<GroceryList/>, document.getElementById('app'));

// Inside app.js, create a GroceryList component that contains an unordered list of 2 
// grocery items. Render this component to the div tag in index.html with an id of app
// Commit your progr