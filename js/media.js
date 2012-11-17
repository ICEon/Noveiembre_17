/* document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
						alert ("empieza");
            playAudio("/sdcard/Music/01 d.m.c-1.mp3");

        }

        // Audio player
        //
        var my_media = null;
        var mediaTimer = null;

        // Play audio
        //
        function playAudio(src) {
            if (my_media == null) {
                // Create Media object from src
                my_media = new Media(src, onSuccess, onError);
            } // else play current audio
            // Play audio
            my_media.play();

            // Update my_media position every second
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }

        // Pause audio
        // 
        function pauseAudio() {
            if (my_media) {
                my_media.pause();
            }
        }

        // Stop audio
        // 
        function stopAudio() {
            if (my_media) {
                my_media.stop();
            }
            clearInterval(mediaTimer);
            mediaTimer = null;
        }

        // onSuccess Callback
        //
        function onSuccess() {
			alert ("si sale");
            console.log("playAudio():Audio Success");
        }

        // onError Callback 
        //
        function onError(error) {
            alert('code: '    + error.code    + '\n' + 
                  'message: ' + error.message + '\n');
        }

        // Set audio position
        // 
        function setAudioPosition(position) {
            document.getElementById('audio_position').innerHTML = position;
        }
*/
document.addEventListener("deviceready", function () {					
var opciones = { limit: 2 };
navigator.device.capture.captureAudio(function (Archivo_Media) {
	  /*  var i, path, len;
	
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
		alert (path);
	}*/

alert ("here");
    }
,  function (erro) {
//      var msg = 'An error occurred during capture: ' + error.code;
      //  navigator.notification.alert(msg, null, 'Uh oh!');
if (erro.equals (CaptureError.CAPTURE_INTERNAL_ERR))
{alert ("1");}
if (erro.equals (CaptureError.CAPTURE_APPLICATION_BUSY))
{alert ("2");}

if (erro.equals (CaptureError.CAPTURE_INVALID_ARGUMENT))
{alert ("3");}

if (erro.equlas(CaptureError.CAPTURE_NO_MEDIA_FILES))
{alert ("4");}
if (erro.equals(CaptureError.CAPTURE_NOT_SUPPORTED))
{alert ("5");}


		alert ("error: "+ error.code);
    }, opciones);

        }, false);


    // Called if something bad happens.
    // 
   

  

