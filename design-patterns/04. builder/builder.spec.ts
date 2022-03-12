import Vehicle, { Tire } from './builder';

describe('builder', () => {
  test('build one vehicle', () => {
    const VehicleBuilder = Vehicle.Builder;
    const vehicle = VehicleBuilder.setInfo('자동차1', '차장인', 4)
      .setTire(new Tire('바퀴장인'))
      .setBodyFrame('metal')
      .build();

    expect(vehicle).toBeDefined();
    expect(vehicle).toEqual({
      name: '자동차1',
      maker: '차장인',
      passengerLimit: 4,
      tire: new Tire('바퀴장인'),
      bodyFrame: 'metal',
    });
  });
});
