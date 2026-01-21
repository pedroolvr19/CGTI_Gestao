import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["menu"]

    connect() {
        this.closeOutside = this.closeOutside.bind(this)
    }

    toggle(event) {
        event.stopPropagation()
        this.menuTarget.hidden = !this.menuTarget.hidden

        if (!this.menuTarget.hidden) {
            document.addEventListener("click", this.closeOutside)
        } else {
            document.removeEventListener("click", this.closeOutside)
        }
    }

    closeOutside(event) {
        if (!this.element.contains(event.target)) {
            this.menuTarget.hidden = true
            document.removeEventListener("click", this.closeOutside)
        }
    }

    disconnect() {
        document.removeEventListener("click", this.closeOutside)
    }
}
