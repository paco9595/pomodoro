
export interface ToDoItem {
    label: string,
    id: number,
    isChecked: boolean
}

export const getToDoList = (): Array<ToDoItem> => {
    return JSON.parse(localStorage.getItem('todoList') || '[]');
}

export const addTodoItem = (item: ToDoItem): Array<ToDoItem> => {
    localStorage.setItem('todoList', JSON.stringify([...getToDoList(), item]));
    return [...getToDoList(), item];
}

export const removeTdoItem = (id: number): Array<ToDoItem> => {
    const newList = getToDoList().filter(element => id !== element.id);
    localStorage.setItem('todoList', JSON.stringify(newList));
    return newList;
}
export const updateTodoItem = (list: Array<ToDoItem>) => {
    localStorage.setItem('todoList', JSON.stringify([...list]));
}
export const RemoveAllTodoItems = ()=> {
    localStorage.setItem('todoList', '[]');
}