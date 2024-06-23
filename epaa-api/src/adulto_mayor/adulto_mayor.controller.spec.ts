import { Test, TestingModule } from '@nestjs/testing';
import { AdultoMayorController } from './adulto_mayor.controller';

describe('AdultoMayorController', () => {
  let controller: AdultoMayorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdultoMayorController],
    }).compile();

    controller = module.get<AdultoMayorController>(AdultoMayorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
