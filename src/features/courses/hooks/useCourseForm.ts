import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { randomId } from '../../../shared/utils';
import type { RootState } from '../../../store';
import { addCourse, updateCourse } from '../../../store/slices/coursesSlice';
import type { CourseEntity } from '../entities';

const emptyCourse: CourseEntity = {
  id: '',
  title: '',
  description: '',
  duration: 1,
  instructor: '',
};

export const useCourseForm = (closeModal: () => void, initialCourse?: CourseEntity) => {
  const dispatch = useDispatch();
  const existingCourses = useSelector((state: RootState) => state.courses.list);

  const [formState, setFormState] = useState<CourseEntity>(initialCourse || emptyCourse);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name === 'duration' ? Number(value) : value,
    }));

    setError(null);
  };

  const validate = () => {
    const { id, title, description, instructor } = formState;

    if (!title || !description || !instructor) {
      return 'All fields are required';
    }

    const isDuplicate = existingCourses.some((course) => course.title === title);
    if (isDuplicate && !id) {
      return 'A course with this Title already exists';
    }

    return null;
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      if (initialCourse) {
        dispatch(updateCourse(formState));
      } else {
        dispatch(addCourse({ ...formState, id: randomId() }));
      }

      setFormState(emptyCourse);

      closeModal();
    } catch {
      setError('Unexpected error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formState,
    onInputChange,
    handleSubmit,
    isLoading,
    error,
  };
};
