import {
    ADD_TASK_COUNT,CHANGE_FILTER,SUBTRACT_TASK_COUNT
} from "./type";
export const addTaskCount = () => ({
    type : ADD_TASK_COUNT,
    
});
export const subtractTaskCount = () => ({
    type : SUBTRACT_TASK_COUNT,
    
});
export const changeFilter = (selectedFilter) => ({
    type : CHANGE_FILTER,
    selectedFilter : selectedFilter
});