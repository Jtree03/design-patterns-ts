export class Person {
  constructor(
    public name: string,
    public age: number,
    public country: string
  ) {}
}

export const personProxy = (person: Person) =>
  new Proxy<Person>(person, {
    get: (obj, prop) => {
      const value = Reflect.get(obj, prop);

      return value;
    },
    set: (obj, prop, value) => {
      return Reflect.set(obj, prop, value);
    },
  });
