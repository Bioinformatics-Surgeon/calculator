class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(num) {
    this.queue.push(num);
  }

  dequeue() {
    const firstElem = this.queue.find((e) => true);
    this.queue.shift();
    return firstElem;
  }

  solve() {
    const firstNum = parseInt(this.dequeue());
    const operator = this.dequeue();
    const secondNum = parseInt(this.dequeue());

    console.log(typeof firstNum);

    switch (operator) {
      case "x":
        return firstNum * secondNum;
      case "-":
        return firstNum - secondNum;
      case "/":
        return firstNum / secondNum;
      case "+":
        return firstNum + secondNum;
      default:
        return Number.NaN;
    }

    return;
  }

  print() {
    let string = "";

    this.queue.forEach((item) => {
      string = string + item + " ";
    });

    return string.trim();
  }

  size() {
    return this.queue.length;
  }
}

export default Queue;
