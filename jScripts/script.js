function show() {
    var myInput = document.getElementById("code");
    if (myInput && myInput.value == "122") {
        document.getElementsByClassName('bg-img')[0].style.visibility = 'hidden';
        document.getElementById('gameIframe1').style.display = "block";
    } else if (myInput && myInput.value == "123") {
        document.getElementsByClassName('bg-img')[0].style.visibility = 'hidden';
        document.getElementById('gameIframe2').style.display = "block";
    }
}