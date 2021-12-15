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
            body:message
        })
        .then (res => {
            console.log(res);
            content.innerHTML += '<div>'+ message +'</div>\r\n';
            seq ++;
            return res;
        });
    }
});
