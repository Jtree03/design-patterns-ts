class Observable<T> {
  private observers: Function[];

  constructor() {
    this.observers = [];
  }

  getObservers() {
    return this.observers;
  }

  subscribe(func: Function) {
    this.observers.push(func);
  }

  unsubscribe(func: Function) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  notify(data: T) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default Observable;
