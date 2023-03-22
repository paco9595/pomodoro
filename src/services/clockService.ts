import useSettings from "../hooks/useSettings";

const [settings] = useSettings();

interface Time {
    min: number,
    sec: number
}

export class Timer {
    min: number;
    sec: number;

    constructor() {
        this.min = settings.min;
        this.sec = settings.sec;
    }
    tick() {
        if (!this.sec && this.min) {
            this.min -= 1;
            this.sec = 59;
        } else if (!this.sec && !this.min) {
            this.min = 0;
            this.sec = 0;
        } else {
            this.sec -= 1;
        }
        console.log({ min: this.min, sec: this.sec });

        return { min: this.min, sec: this.sec } as Time;
    }

}