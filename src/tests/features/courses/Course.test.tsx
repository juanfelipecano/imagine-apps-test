import { render, screen, fireEvent } from '@testing-library/react';
import { Course, type CourseProps } from '../../../features/courses/components';

describe('Course', () => {
  const mockProps: CourseProps = {
    id: '1',
    title: 'React Basics',
    description: 'Learn the fundamentals of React',
    duration: 4,
    instructor: 'Jane Doe',
    onEdit: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders course title, description, duration, and instructor', () => {
    render(<Course {...mockProps} />);

    expect(screen.getByRole('heading', { name: /React Basics/i })).toBeTruthy();
    expect(screen.getByText(/Learn the fundamentals of React/i)).toBeTruthy();
    expect(screen.getByText(/Duration: 4 weeks/i)).toBeTruthy();
    expect(screen.getByText(/Instructor: Jane Doe/i)).toBeTruthy();
  });

  it('renders "week" in singular when duration is 1', () => {
    render(<Course {...mockProps} duration={1} />);
    expect(screen.getByText(/Duration: 1 week/i)).toBeTruthy();
  });

  it('calls onEdit when edit button is clicked', () => {
    render(<Course {...mockProps} />);
    fireEvent.click(screen.getByRole('button', { name: /Edit Course/i }));
    expect(mockProps.onEdit).toHaveBeenCalled();
  });

  it('has accessible aria-label on article', () => {
    render(<Course {...mockProps} />);
    expect(screen.getByLabelText('Course: React Basics')).toBeTruthy();
  });
});
