function Counter() {
    this._count = 0;
    
    setInterval(() => {
        console.log('Iteration:', ++this._count);
    }, 1000);
}

let counter = new Counter();