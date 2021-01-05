class QRAdapter {
    constructor (func, ...rest) {
        this.func = func
        this.args = rest
    }
    getCode() {
      const args = arguments
      return this.func(...args)
    }
}

export default QRAdapter