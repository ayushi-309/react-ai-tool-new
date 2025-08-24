import { useEffect} from "react";

const Answer = ({ ans, key }) => {

    const Answer = (({ ans, key }) => {

        useEffect(() => {
            console.log(ans, key);
        }, [])
    })

    function checkHeading(str) {
        return /^(\*)(\*)|(\*)&/.test(str)
    }

    return (
        <>
            {ans}
        </>
    )
}
export default Answer;