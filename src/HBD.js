import { KNT } from 'knt-react/utils/js/knt'
import React from 'react'

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
    <div style={{display: 'flex', height: '100vh', justifyContent: "center", backgroundColor: "#2471a3"}}>
        <div style={{
            width: "85%",
            // border: '0.2px solid gray',
            backgroundColor: "#ffffff",
            padding: "10px",
            borderRadius: "4px",
            minHeight: "60vh",
            marginTop: "20px",
             overflow: "auto"
        }}>
            <h2 style={{
                color:  "#2471a3"
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
        <div style={{
            border: "4px solid #f5b7b1",
            borderRadius: "5px",
            padding: "5px",
            marginBottom: '20px'
        }} key={key}>
            <h5>Channel: {title}</h5>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
            }}>
            <span style={{fontSize: "13px", fontWeight: "bold", color: "orange"}}>Details: {splite(value, 10)}</span>
            <button type='button' style={{ padding: "2px 5px", color: "tomato", background: "white", border: "2px solid tomato", borderRadius: "4px", fontWeight: "bold"}} onClick={() => KNT.action.copyToClipboard(value, null, true)}>copy</button>
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