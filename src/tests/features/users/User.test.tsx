import { render, screen } from '@testing-library/react';
import { User, type UserProps } from '../../../features/users/components';

describe('User', () => {
  const mockUser: UserProps = {
    id: 'user-1',
    fullname: 'John Doe',
    email: 'john@example.com',
    isActive: true,
    courses: [
      {
        id: 'course-1',
        title: 'React Fundamentals',
        description: '',
        duration: 4,
        instructor: 'Alice',
      },
      {
        id: 'course-2',
        title: 'Node.js Basics',
        description: '',
        duration: 3,
        instructor: 'Bob',
      }
    ]
  };

  it('renders user fullname', () => {
    render(<User {...mockUser} />);
    expect(screen.getByRole('heading', { name: /john doe/i })).toBeTruthy();
  });

  it('displays the number of courses', () => {
    render(<User {...mockUser} />);
    expect(screen.getByText(/Courses \(2\)/i)).toBeTruthy();
  });

  it('renders course titles and instructors', () => {
    render(<User {...mockUser} />);
    expect(screen.getByText(/React Fundamentals/i)).toBeTruthy();
    expect(screen.getByText(/Alice/i)).toBeTruthy();
    expect(screen.getByText(/Node.js Basics/i)).toBeTruthy();
    expect(screen.getByText(/Bob/i)).toBeTruthy();
  });
});
