import {SUBTRACT_TASK_COUNT,ADD_TASK_COUNT,CHANGE_FILTER} from '../actions/type';
const initialState = {
  isLoading: false,
  data: [],
  metaData: false,
  taskCount: 0,
  initialTaskCounting: true,
  filter: ['All', 'Active', 'Completed'],
  selectedFilter: 'All',
};
export default taskInfo = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TASK_COUNT:
      return {
        ...state,
        taskCount: state.taskCount + 1,
      };
      case SUBTRACT_TASK_COUNT:
      return {
        ...state,
        taskCount: state.taskCount - 1,
      };
    case CHANGE_FILTER:
      
      return {
          ...state,
        selectedFilter: action.selectedFilter,
      };

    default:
      return state;
  }
};
