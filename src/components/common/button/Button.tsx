import type { ButtonProps } from './button.props';
import styles from './Button.module.css';

export const Button = (props: ButtonProps) => {
  const {
    label,
    click,
    type = 'primary',
    loading = false,
    disabled = false,
  } = props;

  return (
    <button
      type="button"
      className={`
        ${ styles.button } 
        ${ styles['button--' + type] }
      `}
      disabled={ disabled || loading }
      onClick={ click }
    >
      { loading ? <span className={ styles.spinner } /> : label }
    </button>
  );
};
