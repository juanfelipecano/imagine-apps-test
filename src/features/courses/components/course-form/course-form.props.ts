import type { CourseEntity } from '../../entities';

export interface CourseFormProps {
  close: () => void;
  initialInfo?: CourseEntity;
}
