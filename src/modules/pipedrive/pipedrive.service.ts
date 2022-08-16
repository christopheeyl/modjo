import { Injectable } from '@nestjs/common';

@Injectable()
export class PipedriveService {
  /** You can this API Key to play with Pipedrive's API */
  private readonly apiKey = '0247338e7729ebe37a5bc7af67a3fb5c21419a30';

  /**
   * This is the base url for Pipedrive API
   * Full documentation: https://developers.pipedrive.com/docs/api/v1
   */
  private readonly baseUrl = 'https://api.pipedrive.com/v1/';

  /**
   * TODO implement logic to get an activity and update its note field accordingly to the instructions provided
   * in the README.md
   */
}
