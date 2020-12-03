import {
  RESET_TASK_COUNT,
  ADD_TASK_COUNT,
  CHANGE_FILTER,
  SUBTRACT_TASK_COUNT,
  TOGGLE_LOADING,
  FETCH_TASKS,
} from './type';
let datatemp = [];

export const resetTaskCount = () => ({
  type: RESET_TASK_COUNT,
});
export const addTaskCount = () => ({
  type: ADD_TASK_COUNT,
});
export const subtractTaskCount = () => ({
  type: SUBTRACT_TASK_COUNT,
});
export const toggleLoading = () => ({
  type: TOGGLE_LOADING,
});
export const changeFilter = (selectedFilter) => ({
  type: CHANGE_FILTER,
  selectedFilter: selectedFilter,
});

export const fetchTasks = (data) => ({
  type: FETCH_TASKS,
  data: data,
});
