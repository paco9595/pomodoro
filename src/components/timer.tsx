import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Clock } from ".";
import { Context } from "../context";
import useAudio from "../hooks/useAudio";
import useTimer from "../hooks/useTimer";
import Button from "./button";



export default function Timer() {
    const { t } = useTranslation();
    const { settings }: any = useContext(Context);
    const [timer, actions]: any = useTimer();
    const [toggle] = useAudio();
    const [cycle, setCycle] = useState({
        label: t('workTime'),
        count: 0
    });
    useEffect(() => {
        document.title = `${formatTimer(timer)} | Pomodoro App`
    }, [])

    useEffect(() => {
        if (actions.isFinished) {
            toggle()
            finishHandler()
            document.title = `${formatTimer(timer)} | Pomodoro App`
        }
    }, [actions.isFinished])

    useEffect(() => {
        document.title = `${formatTimer(timer)} | Pomodoro App`
    }, [timer])

    useEffect(() => {
        actions.stop()
        finishHandler({
            ...cycle,
            count: cycle.count - 1
        });
    }, [settings])



    const finishHandler = (state: any = cycle) => {
        if (state.count === 4) {
            setCycle({
                label: t('longBreak'),
                count: -1
            })
            actions.restart({ min: settings.longBreak, sec: 0 })
        }
        else if (state.count % 2 === 0) {
            setCycle({
                label: t('shortBreak'),
                count: state.count + 1
            })
            actions.restart({ min: settings.shortBreak, sec: 0 })
        }
        else {
            setCycle({
                label: t('workTime'),
                count: state.count + 1
            })
            actions.restart({ min: settings.workTime, sec: 0 })
        }
    }
    const reset = () => {
        document.title = 'Pomodoro App'
        actions.restart({ min: settings.workTime, sec: 0 })
    }

    const formatTimer = (time: any) => {
        return `${time.min > 9 ? time.min : `0${time.min}`}: ${time.sec > 9 ? time.sec : `0${time.sec}`}`
    }
    return (
        <>
            <Clock timer={timer}>{cycle.label}</Clock>
            <div className="flex justify-between max-w-sm mx-auto mt-5">
                <Button onClick={() => actions.setActive(true)} className="bg-green-600">{t('start')}</Button>
                <Button onClick={actions.stop} className="bg-red-600">{t('Stop')}</Button>
                <Button disabled={!actions.isActive} onClick={reset} className="bg-yellow-400 disabled:bg-yellow-600">{t('reset')}</Button>
            </div>
        </>
    )
}