import { useEffect, useState } from "react"

export interface TimeSettings {
    workTime: number,
    shortBreak: number,
    longBreak: number
    sound: string
}

const defaultSettings: TimeSettings = {
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
    sound: 'assets/alarmWatch.mp3'
}

export default function useSettings() {
    const [settings, setSettings] = useState(() => {
        const set = JSON.parse(localStorage.getItem('settings') || '{}')
        return set.workTime ? set : defaultSettings;
    });
    useEffect(() => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }, [settings])
    
    return [settings, setSettings]
}