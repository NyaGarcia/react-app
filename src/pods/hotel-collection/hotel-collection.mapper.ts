import { HotelEntityApi } from './hotel-collection-api.interface';
import { Hotel } from './hotel-collection.interface';
import { BASE_URL } from 'common/constants';

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
