
str = "";
document.addEventListener('keydown', logKey);

function logKey(e) {
    asc = e.keyCode;
    key = String.fromCharCode(asc);
    str  = key;
    txt.innerHTML = str;
}