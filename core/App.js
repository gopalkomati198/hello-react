const heading = React.createElement(
    "h1", { id: "heading" }, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
console.log(heading);// it returns an object
//render method accepts that object and convert it to h1 Tag and put it to DOM



/**
 * 
 * <div id="parent">
 *   <div id="child">
 *      <h1>I am a H1 tag </h1>
 *   </div>
 * </div>
 *
 */
/**
 * <div id="parent">
 *    <div id="child">
 *       <h1>I am h1 tag</h1>
 *       <h2>I am h1 tag</h2>
 *     </div>
 * <div id="child2">
 *      <h1>I am h1 tag</h1>
 *      <h2> i am h1 tag </h2>
 *     </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
// const parent=React.createElement(
    
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I am an H1 tag")
//     )
//     );

const parent = React.createElement("div",{id:'parent'},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
]);