import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../components/common';

describe('Button', () => {
  const label = 'Submit';
  const click = jest.fn();

  it('renders with the correct label', () => {
    render(<Button label={label} click={click} />);
    expect(screen.getByRole('button').innerHTML).toContain(label);
  });

  it('calls click function when clicked', () => {
    render(<Button label={label} click={click} />);
    fireEvent.click(screen.getByRole('button'));
    expect(click).toHaveBeenCalled();
  });

  it('shows spinner when loading', () => {
    render(<Button label={label} click={click} loading />);
    expect(screen.getByRole('button').querySelector('span')).toBeTruthy();
    expect(screen.getByRole('button').innerHTML).not.toContain(label);
  });

  it('is disabled when loading', () => {
    render(<Button label={label} click={click} loading />);
    const button: HTMLButtonElement = screen.getByRole('button');
    expect(button.disabled).toBeTruthy();
  });

  it('applies correct type class', () => {
    render(<Button label={label} click={click} type="secondary" />);
    const button = screen.getByRole('button');
    expect(button.className).toMatch(/button--secondary/);
  });
});
