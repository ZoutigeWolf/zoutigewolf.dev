import LineNumbers from "./components/LineNumbers.tsx";
import Json, {Data, Link, List, Object} from "./components/Json.tsx";
import {useEffect, useState} from "react";
import {browserName, fullBrowserVersion} from "react-device-detect";

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [ip, setIp] = useState("x.x.x.x");

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 500);

    const getIp = () => {
        fetch("https://api.ipify.org/?format=json")
            .then(res => res.json()).then(data => setIp(data.ip));
    };

    useEffect(() => {
        getIp()
    }, [])

    return (
        <div className={"flex gap-2"}>
            <LineNumbers lines={200} />
            <div className={"whitespace-pre"}>
                <p className={"text-slate-400"}>// URL: zoutigewolf.dev</p>
                <p className={"text-slate-400"}>// Current Time: {time}</p>
                <p className={"text-slate-400"}>// IP Address: {ip}</p>
                <p className={"text-slate-400"}>// Client: {browserName} {fullBrowserVersion}</p>
                <p> </p>
                <Json>
                    <Data name={"name"} value={"ZoutigeWolf"} indentLevel={1}/>
                    <Data name={"description"} value={"Computer Science Student"} indentLevel={1}/>
                    <List name={"projects"} indentLevel={1}>
                        <Object indentLevel={2}>
                            <Data name={"name"} value={"AH-UN Schedule"} indentLevel={3}/>
                            <Data name={"when"} value={"WIP"} indentLevel={3}/>
                            <Data name={"type"} value={"Personal Project"} indentLevel={3}/>
                            <Data name={"description"} value={"Mobile app to view work schedules."} indentLevel={3}/>
                            <Link name={"github"} value={"https://github.com/ZoutigeWolf/AH-UN-Schedule"} indentLevel={3}/>
                        </Object>
                    </List>
                    <Object name={"socials"} indentLevel={1}>
                        <Link name={"github"} value={"https://github.com/ZoutigeWolf"} indentLevel={2}/>
                        <Data name={"discord"} value={"zoutigewolf"} indentLevel={2}/>
                    </Object>
                </Json>
            </div>
        </div>
    )
}

export default App
