type ITitleType = 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface TitleProps {
  sub?: boolean;
  border?: boolean;
  type?: ITitleType;
}
