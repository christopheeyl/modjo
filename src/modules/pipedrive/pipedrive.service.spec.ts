import { PipedriveService } from './pipedrive.service';

describe('PipedriveService', () => {
  const service = new PipedriveService();
  it('Example of dumb test', () => {
    expect(service['baseUrl']).toBe('https://api.pipedrive.com/v1/');
  });
});
