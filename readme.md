## What is ReactJS?

### Requirement Extension for ReactJS

- Auto rename Tag
- Babel Javascript
- Bookmarks
- DotENV
- ESLint
- Javascript (ES6) code snippets
- Prettier
- Reactjs code snippets
- styled-components-snippets
- Tailwind CSS Intellisense
- Turbo Console Log
- Visual Studio IntelliCode
- vscoded-styled-components

### Chrome extensions

- Redux dev tool
- React developes tool

### Toolchain - create-react-app

## React Component

Useful to manage and reuse

Caution: function in component should be upper in first letter

One example:

importlogofrom'./logo.svg';

import'./App.css';

functionFeature(){

return(

    <divclassName="App">

    <headerclassName="App-header">

    <imgsrc={logo}className="App-logo"alt="logo"/>

    <h3className="feature-title"> Title`</h3>`

    `<p>`

    This is my first project reactasdjkasdjkhaksjldhkashdkahsd

    asdhjasdhaksjhdasd

    bashjdhaksjdhakshdkjahsd

    asdhuahsdklhasdjahskdhalsd

    ahsjkdhaksdhlasdhlashdjkahsdkahds

    `</p>`

    `</header>`

</div>

)

}

functionApp() {

return (

    `<div>`

    `<Feature></Feature>`

    `<Feature></Feature>`

    `<Feature></Feature>`

    `</div>`

);

}

## Prop in React

Prop - Properties

## Style in React

Custom Inline: use cameoCase

## Rendering List

functionApp() {

// console.log(YoutubeData);

return (

    <divclassName={"youtube-list"}>

    {YoutubeData.map((item,index)=>

    {

    if (index === 1){

    console.log(`middle item `);

    }

    return (

    <YoutubeItem

    key={item.id}

    image = {item.image}

    imgAuthor ={item.imgAuthor}

    title = {item.title}

    author = {item.author}

    className = {index === 1 ? "abc": ""}

    >

    `</YoutubeItem>`

    )}

    )

    }

    `</div>`

);

}

## Refactor Code

## Props Children

YoutubeList>

    {name}

    `/YoutubeList>`

=>> props.children

## State - Stateless - Statefull

Stateless Functional Component: Is component dont use state

Stateful Functional Component: Is component dont use state

## Hook usestate

4 Step when use hook:

- Enable State
- Initialize State
- Reading State
- Update State

Example: const [on,setOn] = useState(false);

Re-render: when state changes, component in react is be re-render to update.

## Function Handler

example:

consthandleToggle = () =>{

    setOn((on) => !on)

}

<divclassName={`toggle ${on? "active" :""}`} onClick = {handleToggle}>

## Regulation when use State

Do not declare new state inside brach, loop, should declare at beginning of function

## Tictactoe game

## Implement Elaborate State

const [board, setBoard] = useState(Array(9).fill(null));

const [xIsNext, setXIsNext] = useState(true);

=> Initialize and Declare

const [state,setState] = useState(

board: Array(9).fill(null),

xIsNext: true,

)

=> Set State

setState({

    ... state,  ===> to Use  similar props dont set again

    board : boardCopy,

    xIsNext : !xIsNext,

})

## Use hook useReducer

Use when have multiple state, many function.

General Syntax:

const [state,dispatch] = useReducer(reducer

board: Array(9).fill(null)

})

## Copy array/object in javascripts

coppyArray = [ ... CopyArray ]

action.payload = JSON.parse(JSON.stringify(state))

## Sass - install
