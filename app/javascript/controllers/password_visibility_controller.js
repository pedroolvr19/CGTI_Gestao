import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["input", "icon"]

    toggle(event) {
        event.preventDefault()

        if (this.inputTarget.type === "password") {
            this.inputTarget.type = "text"
            this.iconTarget.classList.remove("fa-eye")
            this.iconTarget.classList.add("fa-eye-slash")
            event.currentTarget.setAttribute("aria-checked", "true")
        } else {
            this.inputTarget.type = "password"
            this.iconTarget.classList.remove("fa-eye-slash")
            this.iconTarget.classList.add("fa-eye")
            event.currentTarget.setAttribute("aria-checked", "false")
        }
    }
}
