// Vanila JS rehearsal
// const button = document.querySelector("#click-me")

// button.addEventListener("click", (event) => {
//   event.currentTarget.classList.remove("btn-primary")
//   event.currentTarget.classList.add("btn-success")
//   event.currentTarget.innerText = "Bingo!"
//   event.currentTarget.disabled = true
// })

// ------------------------------------------------------------
import { Application, Controller } from '@hotwired/stimulus';
window.Stimulus = Application.start()

import DisableButton from "./controllers/disable_button_controller.js"
Stimulus.register("disable-button", DisableButton)

import Movies from "./controllers/movies_controller.js"
Stimulus.register("movies", Movies)
