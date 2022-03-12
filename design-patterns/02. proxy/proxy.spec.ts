import { Person, personProxy } from './proxy';

describe('proxy', () => {
  let person: Person;
  let proxyPerson: Person;

  beforeEach(() => {
    person = new Person('kim', 27, 'kr');
    proxyPerson = personProxy(person);
  });

  afterEach(() => {
    person = null;
    proxyPerson = null;
  });

  test('proxyPerson is defined', () => {
    expect(proxyPerson).toBeDefined();
  });

  test('proxyPerson call get', () => {
    expect(proxyPerson.name === 'kim').toBeTruthy();
    expect(proxyPerson.age === 27).toBeTruthy();
    expect(proxyPerson.country === 'kr').toBeTruthy();
  });

  test('proxyPerson call set', () => {
    expect((proxyPerson.name = 'Jo')).toBeTruthy();
    expect((proxyPerson.age = 12)).toBeTruthy();
    expect((proxyPerson.country = 'us')).toBeTruthy();
  });
});
