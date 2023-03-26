import React, { useState } from "react";
import './styles.scss';

const Taixiu = () => {
    const [count, randomCount] = useState("00")

    const handleRandom = () => {
        const max = 100;
        var rand = Math.round((Math.random() * (max - 10)));

        //thêm số 0 vào trước số có 1 chữ số
        if (rand < 10) {
            randomCount('0' + rand)
        } else {
            randomCount(rand);
        }
    }
 
    return (
        <div className="tai-xiu" >
            <div className="tai-xiu-content">
                <div className="tai-xiu-content-1">
                    <div className={count % 2 === 0 ? "chan" : "le"} id="tai">
                        Chẳn
                    </div>
                    <div className="random">
                        <span className="random-show"> {count} </span>
                    </div>
                    <div className={count % 2 !== 0 ? "chan" : "le"} id="xiu" >
                        Lẻ
                    </div>
                </div>
                <button onClick={handleRandom}>Random</button>
            </div>
        </div>
    )
}

export default Taixiu;