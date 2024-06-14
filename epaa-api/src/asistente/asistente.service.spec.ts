import { Test, TestingModule } from '@nestjs/testing';
import { AsistenteService } from './asistente.service';

describe('AsistenteService', () => {
  let service: AsistenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AsistenteService],
    }).compile();

    service = module.get<AsistenteService>(AsistenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
