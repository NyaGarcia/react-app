import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { City } from 'common/interfaces/city.interface';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

export const VARIANTS = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

export const BASE_URL = 'http://localhost:3000';
export const HOTELS_URL = `${BASE_URL}/api/hotels`;

export const CITIES: Array<City> = [{ name: 'Madrid' }, { name: 'Barcelona' }, { name: 'Málaga' }];
