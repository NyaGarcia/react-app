import { VARIANTS } from 'common/constants/main.constants';

export interface Props {
  className?: string;
  message?: string;
  onClose?: () => void;
  variant: keyof typeof VARIANTS;
}
