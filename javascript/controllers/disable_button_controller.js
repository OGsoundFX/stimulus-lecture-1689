import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["disableButton", "resetButton"]
  static values = {
    text: String
  }

  connect() {
    // console.log(this.disableButtonTarget, this.resetButtonTarget)
    // console.log(this.textValue)
  }
  
  disable() {
    this.disableButtonTarget.classList.remove("btn-primary")
    this.disableButtonTarget.classList.add("btn-danger")
    this.disableButtonTarget.innerText = this.textValue
    this.disableButtonTarget.disabled = true
    // this.element.setAttribute("disabled", "")
    // this.element.setAttribute("class", "btn btn-warning btn-lg")

    this.resetButtonTarget.classList.remove("d-none")
  }

  reset() {
    this.disableButtonTarget.classList.remove("btn-danger")
    this.disableButtonTarget.classList.add("btn-primary")
    this.disableButtonTarget.innerText = "You are safe 😮‍💨"
    this.disableButtonTarget.disabled = false

    this.resetButtonTarget.classList.add("d-none")
  }
}
