import _courses from '../../../_mocks/courses';
import { sleep } from '../../../shared/utils';
import type { CourseEntity } from '../entities';

export async function getCourses(): Promise<CourseEntity[]> {
  await sleep(1000);
  return _courses as CourseEntity[];
}
