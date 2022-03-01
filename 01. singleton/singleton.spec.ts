import CounterClass from './singleton-class';
import CounterObject from './singleton-object';

describe('singleton', () => {
  describe('class version', () => {
    let counter: CounterClass;

    beforeAll(() => {
      counter = new CounterClass();
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
    test('counter is object', () => {
      expect(CounterObject).toBeDefined();
    });

    test('counter call increment method', () => {
      expect(CounterObject.getCount()).toBe(0);
      CounterObject.increment();
      expect(CounterObject.getCount()).toBe(1);
    });

    test('counter call decrement method', () => {
      expect(CounterObject.getCount()).toBe(1);
      CounterObject.decrement();
      expect(CounterObject.getCount()).toBe(0);
    });
  });
});
