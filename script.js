let run_timer;

function timer() {
    // stops if any previous Timer is running so that User can start a New timer 
    //clearInterval(run_timer)
    document.getElementById('info').innerHTML = ''

    // starting a new timer 
    let user_input = document.getElementById('Count').value;
    if (isNaN(user_input)) {
        document.getElementById('current-time').innerHTML = 0
    }
    else {
        user_input = parseInt(user_input)
        run_timer = setInterval(() => {
            if (user_input >= 0) {
                document.getElementById('current-time').innerHTML = user_input--
                console.log(user_input);
            }
            else {
                document.getElementById('timeCount').innerHTML = ''
                document.getElementById('info').innerHTML = 'Timer Completed'
                clearInterval(run_timer)
            }
        }, 1000)
    }
}