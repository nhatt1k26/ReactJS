## What is ReactJS?

### Requirement Extension for ReactJS

* Auto rename Tag
* Babel Javascript
* Bookmarks
* DotENV
* ESLint
* Javascript (ES6) code snippets
* Prettier
* Reactjs code snippets
* styled-components-snippets
* Tailwind CSS Intellisense
* Turbo Console Log
* Visual Studio IntelliCode
* vscoded-styled-components

### Chrome extensions

+ Redux dev tool
+ React developes tool

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
