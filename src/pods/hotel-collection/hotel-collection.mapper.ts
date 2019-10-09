import { BASE_URL } from 'common/constants';
import { Hotel } from '../../common/interfaces/hotel.interface';
import { HotelEntityApi } from './hotel-collection-api.interface';

export const mapFromApiToVm = ({
  id,
  thumbNailUrl,
  name,
  shortDescription,
  hotelRating,
  address1,
}: HotelEntityApi): Hotel => ({
  id,
  picture: `${BASE_URL}${thumbNailUrl}`,
  name,
  description: shortDescription,
  rating: hotelRating,
  address: address1,
});
