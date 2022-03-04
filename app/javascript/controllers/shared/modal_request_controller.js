import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="shared--modal-request"
export default class extends Controller {
  connect() {
    this.modal = new bootstrap.Modal(this.element, {
      backdrop: 'static',
      keyboard: false
    })

    this.modal.show()
  }

  disconnect() {
    this.modal.hide()
  }
}
