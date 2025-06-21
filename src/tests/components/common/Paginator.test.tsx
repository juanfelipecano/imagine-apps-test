import { render, screen, fireEvent } from '@testing-library/react';
import { Paginator } from '../../../components/common';

describe('Paginator', () => {
  const mockOnPerPageChange = jest.fn();
  const mockOnPageChange = jest.fn();

  const setup = (
    currentPage: number = 1,
    totalPages: number = 3,
    perPage: number = 5
  ) => {
    render(
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        perPage={perPage}
        onPerPageChange={mockOnPerPageChange}
        onPageChange={mockOnPageChange}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows the correct current and total page', () => {
    setup(2, 5);
    expect(screen.getByText('Page 2 of 5')).toBeTruthy();
  });

  it('disables previous button on first page', () => {
    setup(1, 5);
    
    const button: HTMLButtonElement = screen.getByTestId('previous-page');

    expect(button.disabled).toBeTruthy();
  });

  it('disables next button on last page', () => {
    setup(5, 5);

    const button: HTMLButtonElement = screen.getByTestId('next-page');

    expect(button.disabled).toBeTruthy();
  });

  it('calls onPageChange with previous page', () => {
    setup(3, 5);
    fireEvent.click(screen.getByTestId('previous-page'));
    expect(mockOnPageChange).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with next page', () => {
    setup(2, 5);
    fireEvent.click(screen.getByTestId('next-page'));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
  });

  it('calls onPerPageChange when changed', () => {
    setup(1, 3, 5);
    fireEvent.change(screen.getByLabelText('Elements per page'), {
      target: { value: '10' },
    });
    expect(mockOnPerPageChange).toHaveBeenCalledWith(10);
  });
});
