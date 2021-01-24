import {
  RESET_TASK_COUNT,
  ADD_TASK_COUNT,
  CHANGE_FILTER,
  SUBTRACT_TASK_COUNT,
  TOGGLE_LOADING,
  FETCH_TASKS,
  SET_DATE_TIME,
  SET_PRIORITY
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
export const setDateTime = (selectedDateTime) => ({
  type: SET_DATE_TIME,
  selectedDateTime: selectedDateTime,
});
export const setPriority = (selectedPriority) => ({
  type: SET_PRIORITY,
  selectedPriority: selectedPriority,
});

export const fetchTasks = (data) => ({
  type: FETCH_TASKS,
  data: data,
});
