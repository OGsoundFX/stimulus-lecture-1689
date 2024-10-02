import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["input", "list", "form"]

  connect() {
  }
  
  search(event) {
    event.preventDefault()
    const userInput = this.inputTarget.value
    this.listTarget.innerText = ""
    this.#apiCall(userInput)
  }

  #apiCall(input) {
    const url = `https://www.omdbapi.com/?s=${input}&apikey=adf1f2d7`
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        data.Search.forEach((movie) => {
          debugger
          this.#displayMovie(movie)
        })
      })
    this.formTarget.reset()
  }

  #displayMovie(result) {
    const movieTag = `<li class="list-group-item border-0">
      <img src="${result.Poster}" alt="${result.Title}" width="100" height="100%">
    </li>`
    this.listTarget.insertAdjacentHTML("beforeend", movieTag)
  }  
}
