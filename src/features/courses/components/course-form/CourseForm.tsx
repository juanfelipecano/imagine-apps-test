import { Button } from '../../../../components/common';
import '../../../../shared/css/forms.css';
import { useCourseForm } from '../../hooks';
import type { CourseFormProps } from './course-form.props';
import styles from './CourseForm.module.css';

export const CourseForm = ({ close, initialInfo }: CourseFormProps) => {
  const {
    formState,
    onInputChange,
    handleSubmit,
    isLoading,
    error,
  } = useCourseForm(close, initialInfo);

  const isEditing = Boolean(initialInfo);

  return (
    <div className={ styles.container }>
      <h2>{ isEditing ? 'Edit Course' : 'Create New Course' }</h2>

      <form className="form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={ formState.title }
            onChange={ onInputChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows={ 4 }
            value={ formState.description }
            onChange={ onInputChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (weeks)</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={ formState.duration }
            min={ 1 }
            onChange={ onInputChange }
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructor">Instructor</label>
          <input
            type="text"
            name="instructor"
            id="instructor"
            value={ formState.instructor }
            onChange={ onInputChange }
          />
        </div>

        <Button
          label={ isEditing ? 'Update Course' : 'Add Course' }
          loading={ isLoading }
          disabled={
            !formState.title ||
            !formState.description ||
            !formState.instructor
          }
          click={ handleSubmit }
        />
      </form>

      {
        error && (
          <div className="form-error">
            <p>{ error }</p>
          </div>
        )
      }
    </div>
  );
};
