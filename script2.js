const videoElement = document.getElementById('video');
const button = document.getElementById('button');


async function selectMediaStream(){
    try{

    const mediaStream = navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObj = mediaStream;
    videoElement.onloadedmetadata = () =>{
        videoElement.onplay();
    }
        }

    catch(error){
        console.log('oops there is an error', error);
    }
}

selectMediaStream();