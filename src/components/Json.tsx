import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function Json({ children }: { children: any; }) {
    return (
        <div className={"whitespace-pre"}>
            <p>{"{"}</p>
            {children}
            <p>{"}"}</p>
        </div>
    )
}

export function List({ name, indentLevel, children }: { name: string; indentLevel: number; children: any; }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <span>
                <span className={"relative w-0 select-none hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon className={`absolute top-[3.75px] text-slate-400 -rotate-${isOpen ? 0 : 90}`}
                                     icon={faChevronDown} size={"sm"} />
                </span>
                <span className={"text-purple-300"}>{"    ".repeat(indentLevel) + `"${name}"`}</span>
                <span className={"text-slate-400"}>: </span>
                {isOpen ? <span>[</span> : <span className={"text-slate-400"}>[...],</span>}
            </span>
            {isOpen && children}
            {isOpen && <p>{"    ".repeat(indentLevel) + "],"}</p>}
        </div>
    )
}

export function Object({name, indentLevel, children}: { name?: string; indentLevel: number; children: any; }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <span>
                <span className={"relative w-0 select-none hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon className={`absolute top-[3.75px] text-slate-400 -rotate-${isOpen ? 0 : 90}`}
                                     icon={faChevronDown} size={"sm"}/>
                </span>
                <span>{"    ".repeat(indentLevel)}</span>
                {name && <span className={"text-purple-300"}>{`"${name}"`}</span>}
                {name && <span className={"text-slate-400"}>: </span>}
                {isOpen ? <span>{"{"}</span> : <span className={"text-slate-400"}>{"{...},"}</span>}
            </span>
            {isOpen && children}
            {isOpen && <p>{"    ".repeat(indentLevel) + "},"}</p>}
        </div>
    )
}

export function Data({name, value, indentLevel}: { name: string; value: string; indentLevel: number; }) {
    return (
        <div>
            <span className={"text-purple-300"}>{"    ".repeat(indentLevel) + `"${name}"`}</span>
            <span className={"text-slate-400"}>: </span>
            <span>{`"${value}"`}</span>
        </div>
    )
}

export function Link({name, value, indentLevel}: { name: string; value: string; indentLevel: number; }) {
    return (
        <div>
            <span>{"    ".repeat(indentLevel)}</span>
            <span className={"text-purple-300"}>{`"${name}"`}</span>
            <span className={"text-slate-400"}>: </span>
            <span><a target={"_blank"} href={value}>{`"${value}"`}</a></span>
        </div>
    )
}
