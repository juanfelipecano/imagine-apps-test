import type { CourseEntity } from '../../courses/entities';

export interface UserEntity {
  id: string;
  fullname: string;
  email: string;
  isActive: boolean;
  courses: CourseEntity[];
}
