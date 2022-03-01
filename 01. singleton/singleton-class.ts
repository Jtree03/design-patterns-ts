class Counter {
  static instance: Counter; // 전역에 둬도 OK
  static count: number = 0;

  constructor() {
    if (Counter.instance) {
      return Counter.instance;
    }

    Counter.instance = this;
  }

  getInstance() {
    return Counter.instance;
  }

  getCount() {
    return Counter.count;
  }

  increment() {
    Counter.count += 1;
  }

  decrement() {
    Counter.count -= 1;
  }
}

export default Counter;
