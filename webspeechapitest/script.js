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
            // post to zoom
            const url = zoomApiToken + '&seq=' + seq + '&lang=' + speech.lang;
            // fetch (url, autotext)
            // .then (res => {
                content.innerHTML += '<div>'+ autotext +'</div>';
            //     seq ++;
            // } )
            // .catch((res, err) => {
            //     console.log(err);
            // })
            // if responce is not error
            //     seq ++
            // else retry
        }
    }

    speech.onend = () => { 
    speech.start() 
    };