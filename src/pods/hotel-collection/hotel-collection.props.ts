import { Hotel } from '../../common/interfaces/hotel.interface';

export interface Props {
  hotelCollection: Array<Hotel>;
  loading: boolean;
  editHotel: (id: string) => void;
}
