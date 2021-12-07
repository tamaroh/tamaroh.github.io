const speech = new webkitSpeechRecognition();
speech.lang = 'ja-JP';

const btn = document.getElementById('btn');
const content = document.getElementById('content');
let zoomApiToken;
let seq;
btn.addEventListener('click' , function() {
    // save token
    zoomApiToken = document.getElementById("apitoken").value;
    // reset seq
    seq = 0;
    speech.start();
});

speech.onresult = function(e) {
        speech.stop();
        if(e.results[0].isFinal){
            let autotext =  e.results[0][0].transcript
            content.innerHTML += '<div>'+ autotext +'</div>';
            // post to zoom
            const url = zoomApiToken + '&seq=' + seq + '&lang=' + speech.lang;
            console.log("zoomApiToken:", url);
            fetch (url, {
                method: 'POST',
                body:autotext
            })
            .then (res => {
                content.innerHTML += '<div>'+ autotext +'</div>';
                seq ++;
                return res;
            });
            // if responce is not error
            //     seq ++
            // else retry
        }
    }

    speech.onend = () => { 
    speech.start() 
    };
/**
    curl  -X POST -H "Content-Type: text/plain\nContent-Length:11" --data "hello world" 'https://us02wmcc.zoom.us/closedcaption?id=88681175459&ns=VGFtYXJvaOOBrlpvb23jg5_jg7zjg4bjgqPjg7Pj&expire=86400&sparams=id%2Cns%2Cexpire&signature=WgfkjKDMtbdVjhSerQuUZL5fe_V2cX_lA-ULGw7F2Bw.AG.ZMZp5kygFSrzpo-f7vTO9KImJx8U6TVzxt-L4WXLYcQdTVdwyO4agGOah8e11i5xOViAmK1eb_H4BTXLIMSrmd6pQRJPjHYkBgi4g591jHzSyzQGFWcSr8pgiNt2TbB48sI8Ctv3QJJ-NK819-m4lfCnd64d3EUb.D7Txnr9bBZ2P-kyMM_Jf-w.1_C9GBVwOZBVMimZ&seq=0&lang=ja-JP' 
    */