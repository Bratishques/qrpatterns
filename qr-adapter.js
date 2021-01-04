class QRAdapter {
    constructor (func) {
        this.func = func
    }
    getCode() {
      const args = arguments
      return this.func(...args)
    }
}

export default QRAdapter