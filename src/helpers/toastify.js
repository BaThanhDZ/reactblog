import Toastify from 'toastify-js'

export function alertSuccess(alert) {
    Toastify({
        text: alert,
        duration: 3000
      }).showToast();
}