import { City } from 'common/interfaces/city.interface';
import { Hotel } from 'common/interfaces/hotel.interface';
import { ValidationErrors } from 'final-form';

export interface Props {
  hotel: Hotel;
  cities: Array<City>;
  validate: (values: any) => Promise<ValidationErrors>;
  submit: (values: any) => void;
}
