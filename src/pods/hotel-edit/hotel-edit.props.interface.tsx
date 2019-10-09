import { City } from 'common/interfaces/city.interface';
import { Hotel } from 'pods/hotel-collection/hotel-collection.interface';

export interface Props {
  hotel: Hotel;
  cities: Array<City>;
}
