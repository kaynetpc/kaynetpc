import { KNT } from 'knt-react/utils/js/knt'
import React from 'react';
import  './HBD.css';

function HBD() {
    const cards = [
        {
            name: "Wema Bank", title: "0241084308"
        },
        {
            name: "GTB Bank", title: "0221798345"
        },
        {
            name: "Bitcoin Address", title: "15REjDvZhJ5ssMbDiC5cAN4n4Ef9MkWCDr"
        },
    ]
  return (
    <div style={{display: 'flex', height: '100vh', justifyContent: "center", backgroundColor: "#f4f6f6"}}>
        <div style={{
            width: "85%",
            border: '2px solid #2471a3',
            backgroundColor: "#ffffff",
            padding: "10px",
            borderRadius: "4px",
            marginTop: "20px",
            overflow: "auto"
        }}>
            <h2 style={{
                color:  "#2471a3",
                fontSize: "15px",
                fontWeight: "bold"
            }}>Payment Channels 😍 Kayode Akinwumi🤗</h2>
            {
                cards.map((cd, i) => (
                    card(cd.name, cd.title, i)
                ))
            }
        </div>
    </div>
  )
}


const card = (title, value, key) => {
    return (
        <div className='card' key={key}>
            <h5 color='#34495e'>Channel: {title}</h5>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <span style={{fontSize: "13px", fontWeight: "bold", color: "#2471a3"}} onClick={() => KNT.action.copyToClipboard(value, null, true)} >Details: {splite(value, 10)}</span>
            <button title='Copy to clipboard' type='button' className='copy-btn' onClick={() => KNT.action.copyToClipboard(value, null, true)}>copy</button>
            </div>
            <div className="card-image">
                
            </div>
        </div>
    )
}

const splite = (str = "", len = 10) => {
    let res = ""
    let strArr = str.split("")
    strArr.forEach((s, i) => i< len? res += s: null)
    return  strArr.length <= len? res: res+"...";
}
export default HBD