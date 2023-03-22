import { useEffect, useState } from "react"
import useSettings from "./useSettings";

export default function useAudio() {
    const [settings] = useSettings();
    const [audio] = useState(new Audio(settings.sound));
    const [isPlaying, setPlaying] = useState(false)

    const toggle = () => setPlaying(!isPlaying)

    useEffect(() => {
        isPlaying ? audio.play() : audio.pause;
    }, [isPlaying])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [toggle]
}