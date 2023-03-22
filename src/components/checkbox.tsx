import { ToDoItem } from "../services/todoListService";

interface checkboxProp {
    children: string,
    item: ToDoItem,
    clickHandler: (item: ToDoItem) => void,
    removeHandler: (id: number) => void
}


export default function Checkbox({ children, item, clickHandler, removeHandler }: checkboxProp) {
    return (
        <div className="form-check flex justify-between items-center py-1">
            <div>

                <input
                    className="form-checkbox h-4 w-4 border border-gray-300 rounded-sm text-black bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="checkbox"
                    id="flexCheckDefault"
                    onChange={() => clickHandler(item)}
                    checked={item.isChecked} />
                <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                    {children}
                </label>
            </div>

            <div className="" onClick={() => removeHandler(item.id)}>X</div>
        </div>
    )
}