export interface ButtonProps {
  label: string;
  type?: 'primary' | 'secondary';
  loading?: boolean;
  disabled?: boolean;
  click?: () => void;
}
