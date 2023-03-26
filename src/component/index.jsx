import React, { useState } from "react";


const Taixiu = () => {
    const [count, randomCount] = useState(10)

    const handleRandom = () => {
        const max = 100;
        var rand = Math.round(10 + (Math.random() * (max - 10)));
        randomCount(rand);


        if (rand % 2 == 0) {
            alert("số chẳn nè !!!")
            console.log("chan ne")
        } else {
            alert("số lẻ nè !!!")
            console.log("le ne")
        }

    }

    return (
        <div style={{ margin: "100px 200px", border: "2px solid black", height: "500px", width: "1150px", borderRadius: "10px", background: "orange" }}>
            <div style={{ display: "grid", gridAutoRows: "355px 145px" }}>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <div style={{ width: "40%" }}>
                        <span style={{ fontSize: "50px", position: "absolute", top: "28%", left: "18%", border: "1px solid black", padding: "50px", width: "200px", textAlign: "center", background: "grey" }}>Chẳn</span>
                    </div>
                    <div style={{ width: "20%", border: "1px solid black", borderRadius: "200px", height: "65%", marginTop: "6%", background: "red" }}>
                        <span style={{ fontSize: "50px", fontWeight: "bold", position: "absolute", top: "35%", left: "49%" }}> {count} </span>
                    </div>
                    <div style={{ width: "40%" }}>
                        <span style={{ fontSize: "50px", position: "absolute", top: "28%", right: "18%", border: "1px solid black", padding: "50px", width: "200px", textAlign: "center", background: "grey" }}>Lẻ</span>
                    </div>
                </div>
                <button style={{ borderRadius: "10px", margin: "0 300px 10px", background: "yellow", fontSize: "90px" }} onClick={handleRandom}>Random</button>
            </div>
        </div>
    )
}

export default Taixiu;