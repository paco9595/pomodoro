import { useEffect, useRef, useState } from "react";
import useSettings from "../hooks/useSettings"
import useTimer from "../hooks/useTimer";
import Button from "./button";

interface Time {
    min: number,
    sec: number
}

export default function Clock({ timer, children }: any) {
    
    return (
        <div className="mt-10 max-w-screen-md mx-auto">
            <div className="flex justify-center text-2xl">
                {children}
            </div>
            <div className="text-9xl mx-auto text-center">
                {timer.min < 10 ? `0${timer.min}` : timer.min} : {timer.sec < 10 ? `0${timer.sec}` : timer.sec}
            </div>
           
        </div>
    )
}