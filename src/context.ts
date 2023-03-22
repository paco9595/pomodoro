import { createContext } from "react";

export const defaultValues = {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
    sound: 'assets/alarmWatch.mp3'
};

export const Context = createContext({})