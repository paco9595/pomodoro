import { useEffect, useState, useRef, useContext } from "react";
import { Context } from "../context";

interface Time {
    min: number,
    sec: number
}

export default function useTimer() {
    const { settings }: any = useContext(Context);
    const [timer, setTimer] = useState({ min: settings.workTime, sec: 0 } as Time);
    const [isActive, setActive] = useState(false);
    const [isFinished, setFinished] = useState(false);
    const interval = useRef(null as any);

    useEffect(() => {
        if (isActive) {
            interval.current = setInterval(() => setTimer(oldTime => tick(oldTime)), 1000);
        }
        return () => clearInterval(interval.current);
    }, [isActive])

    const tick = (props: Time) => {
        const newTime: Time = { ...props }
        if (!newTime.sec && newTime.min) {
            newTime.min -= 1;
            newTime.sec = 59;
        } else if (!newTime.sec && !newTime.min) {
            setFinished(true);
            clearInterval(interval.current);
        } else {
            newTime.sec -= 1;
        }
        return newTime
    }
    const restart = (time: Time) => {
        setTimer(time);
        setActive(false);
        setFinished(false);
    }
    const stop = () => {
        setActive(false);
        clearInterval(interval.current);
    }
    return [timer, { isFinished, setActive, isActive, restart, stop, setTimer }]
}