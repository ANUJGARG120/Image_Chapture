const video = document.getElementById('video');

function startCamera() {
    navigator.getUserMedia(
        {
            video: {}
        },

        strem => video.srcObject = strem,
        err => console.error(err)
    );
}
startCamera()



Webcam.set({
    width: 350,
    height: 350,
    image_format: 'jpeg',
    jpeg_quality: 1040,
})
Webcam.attach("#camera")

function take_photo() {
    Webcam.snap(function (data_uri) {
       let data=  document.getElementById('results').innerHTML = ` <img src=${data_uri} >`
       ;
       
    });
}



