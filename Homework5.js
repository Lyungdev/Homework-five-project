
function main() {    
    window.addEventListener("keyup", eventHandler);
}

function eventHandler() {
    window.onkeyup = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        //console.log(key);
        var elem = document.getElementById("balloon");
        var sizeStr = window.getComputedStyle(elem, null).getPropertyValue("font-size"); 
        var size = Number(sizeStr.replace("px", ""));
        console.log(size);
        if (elem.innerText == "💥" || elem.innerText == "Done") {
            return;
        }

        const winPlus = 107; 
        const winMinus = 109; 
        const macPlus = 187; 
        const macMinus = 189; 
        if (key == winPlus || key == macPlus) {
            var newSize = size + 15; 
            if (size > 60) {
                elem.innerText = "💥";
            }
        } else if (key == winMinus || key == macMinus) {
            var newSize = size - 15;
            if (size <= 0) {
                elem.innerText = "Done";
                document.getElementById("balloon").style.fontSize = "30px";
            }
        }

        newfontSize = newSize + "px";
        document.getElementById("balloon").style.fontSize = newfontSize;
    }
}