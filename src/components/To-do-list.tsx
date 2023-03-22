import React, { useEffect, useState } from 'react'
import {
    getToDoList,
    ToDoItem,
    addTodoItem,
    removeTdoItem,
    updateTodoItem,
    RemoveAllTodoItems
} from '../services/todoListService';
import Checkbox from './checkbox'
import { Formik } from 'formik';
import Button from './button';

export default function ToDoList() {

    const [list, setList] = useState([] as Array<ToDoItem>);

    useEffect(() => {
        setList(getToDoList());
    }, []);

    const clickHandler = (item: ToDoItem) => {
        item.isChecked = !item.isChecked;
        const updateList = getToDoList().map(el => {
            if (el.id !== item.id) return el;
            return item;
        });
        updateTodoItem(updateList);
        setList(updateList);
    }

    const inputHandler = (values: any, { setSubmitting, resetForm }: any) => {
        setSubmitting(true);
        const newItem: ToDoItem = {
            label: values.label,
            id: list[list.length - 1]?.id + 1 || 1,
            isChecked: false
        };
        addTodoItem(newItem);
        setList([...list, newItem]);
        resetForm();
    }
    const removeHandler = (id: number) => {
        setList(removeTdoItem(id));
    }
    const deleteHandler = () => {
        RemoveAllTodoItems()
        setList([])
    }
    return (
        <div className="mt-10 max-w-screen-md mx-auto">
            <div className="flex justify-between">
                <h2>To Do List</h2>
                <Button type="reset" onClick={deleteHandler} >Delete All</Button>
            </div>

            <Formik
                initialValues={{ label: '' }}
                onSubmit={inputHandler}
            >
                {({ handleSubmit, values, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='label'
                            onChange={handleChange}
                            value={values.label}
                            autoComplete="off"
                            placeholder='add Item'
                            className='w-full p-3 outline-none'
                        />
                    </form>
                )}
            </Formik>
            <ul className=' mt-5 px-6 h-40'>
                {list.map((item: ToDoItem) => (
                    <li key={item.id}>
                        <Checkbox
                            item={item}
                            clickHandler={clickHandler}
                            removeHandler={removeHandler}
                        >{item.label}</Checkbox>
                    </li>))}
            </ul>
        </div >
    )
} 