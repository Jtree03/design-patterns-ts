import Observable from './observer';

describe('observer', () => {
  let cb: Function;
  let observable: Observable<string>;

  beforeEach(() => {
    cb = () => {};
    observable = new Observable<string>();
  });

  afterEach(() => {
    cb = null;
    observable = null;
  });

  test('observable is defined', () => {
    expect(observable).toBeDefined();
  });

  test('observable call subscribe', () => {
    observable.subscribe(cb);

    expect(observable.getObservers().length).toBeGreaterThan(0);
  });

  test('observable call unsubscribe', () => {
    observable.subscribe(cb);
    observable.unsubscribe(cb);

    expect(observable.getObservers().length).toBe(0);
  });

  test('observable call notify', () => {
    const log = jest.fn();
    const loggerWithDate = (text: string) => {
      log(`${new Date()} ${text}`);
    };

    const sendEmail = jest.fn();
    const sendEmailToObserver = (text: string) => {
      sendEmail(text);
    };

    observable.subscribe(loggerWithDate);
    observable.subscribe(sendEmailToObserver);

    observable.notify('notify!');

    expect(observable.getObservers().length).toBe(2);
    expect(log).toHaveBeenCalled();
    expect(sendEmail).toHaveBeenCalled();
  });
});
