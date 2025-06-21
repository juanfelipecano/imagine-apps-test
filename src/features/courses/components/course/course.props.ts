import type { CourseEntity } from '../../entities';

export interface CourseProps extends CourseEntity {
  onEdit: () => void;
}