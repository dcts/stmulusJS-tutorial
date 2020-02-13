// src/controllers/hello_controller.js
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "inputName", "buttonSubmitName" ]

  greet() {
    alert(`Hello, ${this.inputNameTarget.value}`);
  }

  printToCosole() {
    console.log(this.inputNameTarget.value);
  }

  connect() {
    console.log(this.inputNameTarget);
    console.log(this.buttonSubmitNameTarget);
  }

  makeBgAwesome() {
    document.body.style = "background: linear-gradient(to right, rgb(44, 62, 80), rgb(253, 116, 108));";
    document.body.style.color = "white";
  }
}
