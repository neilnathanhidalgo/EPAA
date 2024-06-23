import { Test, TestingModule } from '@nestjs/testing';
import { AdultoMayorService } from './adulto_mayor.service';

describe('AdultoMayorService', () => {
  let service: AdultoMayorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdultoMayorService],
    }).compile();

    service = module.get<AdultoMayorService>(AdultoMayorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
