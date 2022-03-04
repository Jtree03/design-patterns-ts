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

      console.log(`value of the ${prop.toString()} is ${value}`);

      return value;
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop.toString()} from ${obj[prop]} to ${value}`);

      return Reflect.set(obj, prop, value);
    },
  });
