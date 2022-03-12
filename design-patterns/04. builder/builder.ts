export class Tire {
  maker: string;

  constructor(maker: string) {
    this.maker = maker;
  }
}

type BodyFrame = 'carbon' | 'metal';

export default class Vehicle {
  name: string;
  maker: string;
  passengerLimit: number;
  tire: Tire;
  bodyFrame: BodyFrame;

  constructor(build: VehicleBuilder) {
    this.name = build.name;
    this.maker = build.maker;
    this.passengerLimit = build.passengerLimit;
    this.tire = build.tire;
    this.bodyFrame = build.bodyFrame;
  }

  static get Builder(): VehicleBuilder {
    return new VehicleBuilder();
  }
}

class VehicleBuilder {
  name: string;
  maker: string;
  passengerLimit: number;
  tire: Tire;
  bodyFrame: BodyFrame;

  setInfo(name: string, maker: string, passengerLimit: number) {
    this.name = name;
    this.maker = maker;
    this.passengerLimit = passengerLimit;

    return this;
  }

  setTire(tire: Tire) {
    this.tire = tire;

    return this;
  }

  setBodyFrame(material: BodyFrame) {
    this.bodyFrame = material;

    return this;
  }

  build() {
    return new Vehicle(this);
  }
}
