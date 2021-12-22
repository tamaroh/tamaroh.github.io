const start = document.getElementById('start');
// const send = document.getElementById('send');
const content = document.getElementById('content');
const speech = new webkitSpeechRecognition();
let zoomApiToken;
let seq = 0;

function setZoom() {
    zoomApiToken = document.getElementById("apitoken").value;
    speech.start();
}

function sendToZoom(msg) {
    const url = zoomApiToken + '&seq=' + seq + '&lang=ja-JP';
    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: msg,
        origin: 'https://tamaroh.github.io/',
    });
    seq ++ ;
}
speech.onresult = function(e) {
    speech.stop();
    if(e.results[0].isFinal){
        let autotext =  e.results[0][0].transcript
        content.innerHTML += '<div>'+ autotext +'</div>';
        // post to zoom
        sendToZoom(autotext);
        // if responce is not error
        //     seq ++
        // else retry
    }
}

speech.onend = () => { 
    speech.start() 
};
start.addEventListener('click' ,setZoom);
// send.addEventListener('click', sendToZoom)
// async function useZoom() {
//     // save token
//     zoomApiToken = document.getElementById("apitoken").value;
//     // reset seq
//     for (let seq = 0; seq < 10; seq++) {
//         const message = `メッセージテスト: seq = ${seq}`;
//         const url = zoomApiToken + '&seq=' + seq + '&lang=ja-JP';
//         fetch (url, {
//             method: 'POST',
//             mode : "no-cors",
//             body: message + '\r\n'
//         })
//         .then (res => {
//             console.log(res);
//             content.innerHTML += '<div>'+ message +'</div>\r\n';
//             console.log("seq:", seq)
//         });
//         await setTimeout(function(){
//             console.log("seq:", seq)
//         }, 3000);

//     }
// }
/**
 * Access to fetch at 'https://us02wmcc.zoom.us/closedcaption?id=89390871051&ns=VGFtYXJvaOOBrlpvb23jg5_jg7zjg4bjgqPjg7Pj&expire=86400&sparams=id%2Cns%2Cexpire&signature=-_eY5udIbx4SzvD9pRnoKZhoruaGKDe63KNO5dq6tEM.AG.aDzLw9vAHfsIfYBKnHSAPuUyHJXXvBybiFJxcPAb5PST-8JUDsvdDtQBNmy-HPnFqe84HWjGYPRCMLNLp1ksFfZ0dg2dCjPYmSq4-uIP3RFFmvQZVBtzmwQF629EC80B5ExAPxBYRHY7tvZV3E2KmZFhMtnn5M4r.9sRJBvBjc4iiuN8r7nqtig.JYwFIDJgmKR7zmUH&seq=0&lang=ja-JP' 
 * from origin 'https://tamaroh.github.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
zoomapi.js:13 

POST https://us02wmcc.zoom.us/closedcaption?id=89390871051&ns=VGFtYXJvaOOBrlpvb23jg5_jg7zjg4bjgqPjg7Pj&expire=86400&sparams=id%2Cns%2Cexpire&signature=-_eY5udIbx4SzvD9pRnoKZhoruaGKDe63KNO5dq6tEM.AG.aDzLw9vAHfsIfYBKnHSAPuUyHJXXvBybiFJxcPAb5PST-8JUDsvdDtQBNmy-HPnFqe84HWjGYPRCMLNLp1ksFfZ0dg2dCjPYmSq4-uIP3RFFmvQZVBtzmwQF629EC80B5ExAPxBYRHY7tvZV3E2KmZFhMtnn5M4r.9sRJBvBjc4iiuN8r7nqtig.JYwFIDJgmKR7zmUH&seq=0&lang=ja-JP
 net::ERR_FAILED 403
(anonymous) @ zoomapi.js:13

zoomapi.js:13   Uncaught (in promise) TypeError: Failed to fetch
    at HTMLButtonElement.<anonymous> (zoomapi.js:13)

https://us02wmcc.zoom.us/closedcaption?id=85323821898&ns=VGFtYXJvaOOBrlpvb23jg5_jg7zjg4bjgqPjg7Pj&expire=86400&sparams=id%2Cns%2Cexpire&signature=S5y3WD8O4K2AODA_4WxxDH5savDZp8oD00nE12FWgzM.AG.jxt8CQjLYaaeDStnZScCia8S2F6DvMuGjHWUscDy-eAv27a94LCDCig09cOOs1iLsxzbLl6BupWTncvMoKcPaZNyc4c7jAbm6SmdMsUf8m_USl4R6je4gvL13P1vzo1ujN11pqMeCONH7KbIP8FQLIS3UaTQOYKz.1ouREpERjgaucr9dTB9Plg.u2GZO3KpSXSYVYVi



 */