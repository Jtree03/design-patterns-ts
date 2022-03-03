import { Person, personProxy } from './proxy';

describe('proxy', () => {
  test('proxyPerson is defined', () => {
    const person = new Person('kim', 27, 'kr');
    const proxyPerson = personProxy(person);

    expect(proxyPerson).toBeDefined();
  });

  test('proxyPerson call get', () => {
    const person = new Person('kim', 27, 'kr');
    const proxyPerson = personProxy(person);

    expect(proxyPerson.name === 'kim').toBeTruthy();
    expect(proxyPerson.age === 27).toBeTruthy();
    expect(proxyPerson.country === 'kr').toBeTruthy();
  });

  test('proxyPerson call set', () => {
    const person = new Person('kim', 27, 'kr');
    const proxyPerson = personProxy(person);

    expect((proxyPerson.name = 'Jo')).toBeTruthy();
    expect((proxyPerson.age = 12)).toBeTruthy();
    expect((proxyPerson.country = 'us')).toBeTruthy();
  });
});
