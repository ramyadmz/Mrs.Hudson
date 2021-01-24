import {
  RESET_TASK_COUNT,
  ADD_TASK_COUNT,
  SUBTRACT_TASK_COUNT,
  CHANGE_FILTER,
  TOGGLE_LOADING,
  FETCH_TASKS,
  SET_DATE_TIME,
  SET_PRIORITY
} from '../actions/type';
const initialState = {
  isLoading: false,
  data: [],
  taskCount: 0,
  filter: ['All', 'Active', 'Completed'],
  selectedFilter: 'All',
  selectedDateTime: new Date(),
  selectedDate: '',
  selectedTime: '',
  selectedPriority: '',

  priorities:['Low','Normal', 'High', 'Urgent'],


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
    case SET_DATE_TIME:
      return {
        ...state,
        selectedDateTime: action.selectedDateTime,
        selectedDate: action.selectedDateTime.toDateString(),
        selectedTime: action.selectedDateTime.toLocaleTimeString().slice(0, -3),
      };
      case SET_PRIORITY:
      return {
        ...state,
        selectedPriority : action.selectedPriority,
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
