import CounterClass from './singleton-class';
import CounterObject from './singleton-object';

describe('singleton', () => {
  describe('class version', () => {
    let counter: CounterClass;

    beforeEach(() => {
      counter = new CounterClass();
    });

    afterEach(() => {
      counter = null;
    });

    test('counter is instance', () => {
      expect(counter).toBeDefined();
      expect(counter.getInstance()).toBeDefined();
    });

    test('twice instantiation', () => {
      new CounterClass();
    });

    test('counter_1 and counter_2 is same reference', () => {
      const counter_1 = new CounterClass();
      const counter_2 = new CounterClass();

      expect(counter_1).toBe(counter_2);
    });

    test('counter call increment method', () => {
      expect(counter.getCount()).toBe(0);

      counter.increment();

      expect(counter.getCount()).toBe(1);
    });

    test('counter call decrement method', () => {
      expect(counter.getCount()).toBe(1);

      counter.decrement();

      expect(counter.getCount()).toBe(0);
    });
  });

  describe('object version', () => {
    let counterObject;

    beforeEach(() => {
      counterObject = Object.create(CounterObject);
    });

    afterEach(() => {
      counterObject = null;
    });

    test('counter is object', () => {
      expect(counterObject).toBeDefined();
    });

    test('counter call increment method', () => {
      expect(counterObject.getCount()).toBe(0);
      counterObject.increment();
      expect(counterObject.getCount()).toBe(1);
    });

    test('counter call decrement method', () => {
      expect(counterObject.getCount()).toBe(1);
      counterObject.decrement();
      expect(counterObject.getCount()).toBe(0);
    });
  });
});
