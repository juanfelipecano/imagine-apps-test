import { useEffect, useMemo, useState } from 'react';
import { GrFormAdd } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../../store';
import { fetchCourses } from '../../../../store/slices/coursesSlice';
import { CourseSkeleton } from '../course-skeleton/CourseSkeleton';
import { Course } from '../course/Course';
import styles from './Courses.module.css';
import { Modal, Paginator } from '../../../../components/common';
import { CourseForm } from '../course-form/CourseForm';

const Skeleton = () => (
  <ul>
    {
      Array.from({ length: 6 }).map((_, i) => (
        <li key={ `` + i }>
          <CourseSkeleton />
        </li>
      ))
    }
  </ul>
);

export const Courses = () => {
 const dispatch = useDispatch<AppDispatch>();
  const { list: courses, isLoading, error } = useSelector((state: RootState) => state.courses);

  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [ dispatch ]);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const handleNewCourse = () => {
    openModal(
      <CourseForm close={ handleCloseModal } />
    );
  }

  const handleEditCourse = (id: string) => {
    const course = courses.find((course) => course.id === id);
    if (!course) return;

    openModal(
      <CourseForm close={ handleCloseModal } initialInfo={ course } />
    );
  }

  const totalPages = Math.ceil(courses.length / perPage);
  const currentCourses = useMemo(
    () => courses.slice((currentPage - 1) * perPage, currentPage * perPage),
    [courses, currentPage, perPage]
  );

  if (error) return <p className="form-error">Error: {error}</p>;

  return (
    <section className={ styles.courses }>
      <header>
        <h1>Courses</h1>

        <div className={ styles.courses_action }>
          <button
            className="empty-button button-icon"
            aria-label="New Course"
            onClick={ handleNewCourse }
          >
            <GrFormAdd aria-hidden size={ 24 } />
          </button>
        </div>
      </header>

      {
        isLoading && (
          <Skeleton />
        )
      }

      <ul>
        {
          !isLoading && currentCourses.map((course) => (
            <li key={ course.id } tabIndex={ 0 }>
              <Course { ...course } onEdit={ () => handleEditCourse(course.id) } />
            </li>
          ))
        }
      </ul>

      <Paginator
        currentPage={ currentPage }
        totalPages={ totalPages }
        perPage={ perPage }
        onPerPageChange={(value) => {
          setPerPage(value);
          setCurrentPage(1);
        }}
        onPageChange={ (page) => setCurrentPage(Math.max(1, Math.min(page, totalPages))) }
      />

      <Modal isOpen={ isOpen } onClose={ handleCloseModal }>
        { modalContent }
      </Modal>
    </section>
  );
};
