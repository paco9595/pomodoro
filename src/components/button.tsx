import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode | string,
    className?: string
}


export default function Button(props: ButtonProps) {
    return <button {...props} className={` p-2 rounded ${props.className}`} >{props.children}</button>
}