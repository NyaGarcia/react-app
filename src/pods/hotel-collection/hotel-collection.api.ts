import { HotelEntityApi } from './hotel-collection-api.interface';
import { HOTELS_URL } from 'common/constants/main.constants';

export const getHotelCollection = (): Promise<Array<HotelEntityApi>> =>
  fetch(HOTELS_URL).then(response => response.json());
