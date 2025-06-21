import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { CourseEntity } from '../../features/courses/entities';
import { getCourses } from '../../features/courses/services';

interface CoursesState {
  list: CourseEntity[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CoursesState = {
  list: [],
  isLoading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk<CourseEntity[], void, { rejectValue: string }>(
  'courses/fetchCourses',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCourses();
      return data;
    } catch {
      return rejectWithValue('Failed to fetch courses');
    }
  }
);

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    clearCourses(state) {
      state.list = [];
      state.isLoading = false;
      state.error = null;
    },
    addCourse: (state, action: PayloadAction<CourseEntity>) => {
      state.list.push(action.payload);
    },
    updateCourse: (state, action: PayloadAction<CourseEntity>) => {
      const index = state.list.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? 'Unknown error';
      });
  },
});

export const { clearCourses, addCourse, updateCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
