import { useEffect} from "react";



    const Answer = ({ ans, key }) => {

        useEffect(() => {
            console.log(ans,checkHeading(ans));
            
        }, [])
    

    function checkHeading(str) {
        return /^(\*)(\*)(.*)\*$/.test(str)
    }

    return (
        <>
            {ans}
        </>
    )
}
export default Answer;