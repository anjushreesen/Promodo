var ctmnts = 0;
var ctsecs = 0;
var startchr = 0;

function countdownTimer() {

    if (startchr == 0 && document.getElementById('mns') && document.getElementById('scs')) {

        ctmnts = parseInt(document.getElementById('mns').value) + 0;
        ctsecs = parseInt(document.getElementById('scs').value) * 1;

        if (isNaN(ctmnts)) ctmnts = 0;
        if (isNaN(ctsecs)) ctsecs = 0;


        document.getElementById('mns').value = ctmnts;
        document.getElementById('scs').value = ctsecs;
        startchr = 1;
        document.getElementById('start').setAttribute('disabled', 'disabled'); // disable the button
    }


    if (ctmnts == 0 && ctsecs == 0) {
        startchr = 0;
        document.getElementById('start').removeAttribute('disabled');
        return false;
    } else {

        ctsecs--;
        if (ctsecs < 0) {
            if (ctmnts > 0) {
                ctsecs = 59;
                ctmnts--;
            } else {
                ctsecs = 0;
                ctmnts = 0;
            }
        }
    }


    document.getElementById('min').innerHTML = ctmnts;
    document.getElementById('sec').innerHTML = ctsecs;
    setTimeout('countdownTimer()', 1000);
}