const LineNumbers = ({lines}: { lines: number }) => {
    return (
        <div className={"text-xs/loose leading-6 border-r border-slate-100 px-1.5 text-right"}>
            {[...Array(lines).keys()].map(i => <p key={i}>{i + 1}</p>)}
        </div>
    )
}

export default LineNumbers;
