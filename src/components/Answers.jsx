import { useEffect, useState } from "react";



const Answer = ({ ans, key }) => {
    const [heading, setHeading] = useState(false)

    useEffect(() => {
        if (checkHeading(ans)) {
            setHeading(true)
        }

    }, [])


    function checkHeading(str) {
        return /^(\*)(\*)(.*)\*$/.test(str)
    }

    return (
        <>
            {ans}
            {heading?<span className="py-5 block">{ans}</span>:<span>{ans}</span>}
        </>
    )
}
export default Answer;