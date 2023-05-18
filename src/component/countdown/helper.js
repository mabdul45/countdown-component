import { useEffect, useState } from "react"
const useCountDown = () => {
    const [days, setDays] = useState('00')
    const [hrs, setHrs] = useState('00')
    const [mins, setMins] = useState('00')
    const [secs, setSecs] = useState('00')

    const TODATE = new Date('may 30, 2023 00:00:00').getTime()
    const FROMDATE = new Date().getTime()
    const countDownTimer = () => {
        const timeGap = (TODATE - FROMDATE) / 1000
        const day = Math.floor(timeGap / 3600 / 24)
        setDays(day)
        const hr = Math.floor((timeGap / 3600) % 24)
        setHrs(hr)
        const min = Math.floor((timeGap / 60) % 60)
        setMins(min)
        const sec = Math.floor((timeGap) % 60)
        setSecs(sec)
        console.log(TODATE, FROMDATE, day, sec)
    }

    useEffect(
        () => {
            const interval = setInterval(countDownTimer, 1000)
            return () => {
                clearInterval(interval)
            }
        }
    )

    return [days, hrs, mins, secs]
}

export default useCountDown
