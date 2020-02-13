# Stimulus Tutorial

me learning StimulusJS. Love it!

### Run in Development
```
npm start
```

### Learnings
- builds a controller style syntax for connecting your HTML elements with JS files!
- you can tie events on html elements to action in the controller
- improves code organisation!
- **`data-controller="mycontroller"`**: defines a controller. All elements hat are part of this controller need to be nested inside this element (i belive, not sure). Also controller is identified by the filename!! So if the controller is called "test" then the file must be namer "test_controller"
- **`data-action="click->mycontroller#myaction"`**: eventlistener tied to a specific action inside a controller!
- **`data-target="mycontroller.myelement"`**: store HTML elements as instance variables inside the JS!

### HTML Example
```html
<div data-controller="hello">
  <input data-target="hello.inputName" data-action="keyup->hello#printToCosole" type="text">
  <button data-target="hello.buttonSubmitName" data-action="click->hello#greet">Greet</button>
  <button data-action="click->hello#makeBgAwesome">Make Background Awesome</button>
</div>
```

### JS Example
```js
// Import controller from stimulus framework
export default class extends Controller {
  // all the html elements you specified with the data-target attribute go in here as an array!
  static targets = [ "inputName", "element2", "element3", "element4" ]

  // functions (can be tied to an event on html elements)
  greet() {
    alert(`Hello, ${this.inputNameTarget.value}`);
  }

  printSomethingToCosole() {
    console.log("something...");
  }

  // default function called "connect()": runs everytime the controller is connected!
  // console.log to check if it worked!
  connect() {
    console.log("controller XYZ connected"); // controller name defined by the filename!
  }
}

```

