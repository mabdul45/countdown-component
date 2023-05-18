import useCountDown from "./helper"
const CountDown = () => {

    const [days, hrs, mins, secs] = useCountDown()
    console.log(days, hrs)

    return (
        <main className="countDown">
            <div>
                <p>{days}</p>
                <p>Days</p>
            </div>:
            <div>
                <p>{hrs}</p>
                <p>Hours</p>
            </div>:
            <div>
                <p>{mins}</p>
                <p>Minutes</p>
            </div>:
            <div>
                <p>{secs}</p>
                <p>Seconds</p>
            </div>
        </main>
    )
}

export default CountDown