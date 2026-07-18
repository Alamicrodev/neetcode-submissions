class MinStack {
     
     stack : number[] = []
     min : number[] = []

    constructor() {
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
       this.stack.push(val)
       if (this.min.length == 0 || this.min[this.min.length-1] >= val) {
            this.min.push(val); 
       }
       else {
        this.min.push(this.min[this.min.length-1])
       }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
          return this.min[this.min.length-1]; 
    }
}
