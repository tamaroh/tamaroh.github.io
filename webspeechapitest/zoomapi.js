const btn = document.getElementById('btn');
const content = document.getElementById('content');
let zoomApiToken;
let seq;
btn.addEventListener('click' , function() {
    // save token
    zoomApiToken = document.getElementById("apitoken").value;
    // reset seq
    seq = 0;
    for (let i = 0; i < 10; i++) {
        const message = `メッセージテスト: i = ${i}, seq = ${seq}`;
        const url = zoomApiToken + '&seq=' + seq + '&lang=ja-JP';
        fetch (url, {
            method: 'POST',
            mode: 'no-cors',
            body: message + '\r\n'
        })
        .then (res => {
            console.log(res);
            console.log(res.ok);
            content.innerHTML += '<div>'+ message +'</div>\r\n';
            seq ++;
            return res;
        });
    setTimeout(null, 3000);
    }
});

/**
 * Access to fetch at 'https://us02wmcc.zoom.us/closedcaption?id=89390871051&ns=VGFtYXJvaOOBrlpvb23jg5_jg7zjg4bjgqPjg7Pj&expire=86400&sparams=id%2Cns%2Cexpire&signature=-_eY5udIbx4SzvD9pRnoKZhoruaGKDe63KNO5dq6tEM.AG.aDzLw9vAHfsIfYBKnHSAPuUyHJXXvBybiFJxcPAb5PST-8JUDsvdDtQBNmy-HPnFqe84HWjGYPRCMLNLp1ksFfZ0dg2dCjPYmSq4-uIP3RFFmvQZVBtzmwQF629EC80B5ExAPxBYRHY7tvZV3E2KmZFhMtnn5M4r.9sRJBvBjc4iiuN8r7nqtig.JYwFIDJgmKR7zmUH&seq=0&lang=ja-JP' 
 * from origin 'https://tamaroh.github.io' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
zoomapi.js:13 

POST https://us02wmcc.zoom.us/closedcaption?id=89390871051&ns=VGFtYXJvaOOBrlpvb23jg5_jg7zjg4bjgqPjg7Pj&expire=86400&sparams=id%2Cns%2Cexpire&signature=-_eY5udIbx4SzvD9pRnoKZhoruaGKDe63KNO5dq6tEM.AG.aDzLw9vAHfsIfYBKnHSAPuUyHJXXvBybiFJxcPAb5PST-8JUDsvdDtQBNmy-HPnFqe84HWjGYPRCMLNLp1ksFfZ0dg2dCjPYmSq4-uIP3RFFmvQZVBtzmwQF629EC80B5ExAPxBYRHY7tvZV3E2KmZFhMtnn5M4r.9sRJBvBjc4iiuN8r7nqtig.JYwFIDJgmKR7zmUH&seq=0&lang=ja-JP
 net::ERR_FAILED 403
(anonymous) @ zoomapi.js:13

zoomapi.js:13   Uncaught (in promise) TypeError: Failed to fetch
    at HTMLButtonElement.<anonymous> (zoomapi.js:13)
 */