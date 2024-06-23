import { Test, TestingModule } from '@nestjs/testing';
import { AlertaController } from './alerta.controller';

describe('AlertaController', () => {
  let controller: AlertaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertaController],
    }).compile();

    controller = module.get<AlertaController>(AlertaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
