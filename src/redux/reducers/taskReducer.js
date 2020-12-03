import {
  RESET_TASK_COUNT,
  ADD_TASK_COUNT,
  SUBTRACT_TASK_COUNT,
  CHANGE_FILTER,
  TOGGLE_LOADING,
  FETCH_TASKS,
} from '../actions/type';
const initialState = {
  isLoading: false,
  data: [],
  taskCount: 0,
  filter: ['All', 'Active', 'Completed'],
  selectedFilter: 'All',
  people: [
    {
      id: 1,
      name: 'Ramyad',
      image: require('./../../../assets/images/avatars/Ramyad.png'),
    },
    {
      id: 3,
      name: 'Ramtin',
      image: require('./../../../assets/images/avatars/Ramtin.png'),
    },
    {
      id: 4,
      name: 'Fatima',
      image: require('./../../../assets/images/avatars/Fatima.png'),
    },
    {
      id: 5,
      name: 'Ali',
      image: require('./../../../assets/images/avatars/Zoro.png'),
    },
  ],
};
export default payload = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_TASK_COUNT:
      return {
        ...state,
        taskCount: 0,
      };

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

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case CHANGE_FILTER:
      return {
        ...state,
        selectedFilter: action.selectedFilter,
      };
    case FETCH_TASKS:
      return {
        ...state,
        data: action.data,
      };

    default:
      return state;
  }
};
