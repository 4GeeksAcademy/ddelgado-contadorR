


function SecondsCounter({ seconds }) {
    const separadorSegundos = seconds.toString().padStart(6, "0")  //0000000

    const digits = separadorSegundos.split("") // [0] [0] [0] [0]

    console.log(digits)

    return (
        <div className="counter-container">
            <h1>SecondsConter</h1>
            <div className="counter-wrapper">
                <i class="fa-solid fa-clock"></i>
                {digits.map((digit, index) => {
                    return (
                        <div key={index} className="digit-box">
                            {digit}
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default SecondsCounter;