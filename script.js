var gateway = `ws://${window.location.hostname}/ws`;
var websocket;
window.addEventListener('load', onLoad);

function onLoad(event) {
    initWebSocket();
}

function initWebSocket() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen    = onOpen;
    websocket.onclose   = onClose;
    websocket.onmessage = onMessage;
}

function onOpen(event) {
    console.log('Connection opened');
    websocket.send("states");
	websocket.send("Message_J1");
}
  
function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
} 

function onMessage(event) {
    var myObj = JSON.parse(event.data);
            console.log(myObj);
            for (i in myObj.gpios){
                var output = myObj.gpios[i].output;
                var state = myObj.gpios[i].state;
                console.log(output);
                console.log(state);
                if (state == "1"){
                    document.getElementById(output).checked = true;
                    document.getElementById(output+"s").innerHTML = "ON";
                }
                else{
                    document.getElementById(output).checked = false;
                    document.getElementById(output+"s").innerHTML = "OFF";
                }
            }
    console.log(event.data);
}

// Send Requests to Control GPIOs
function toggleCheckbox (element) {
    console.log(element.id);
    websocket.send(element.id);
    websocket.send("Message_J2");
    if (element.checked){
        document.getElementById(element.id+"s").innerHTML = "ON";
    }
    else {
        document.getElementById(element.id+"s").innerHTML = "OFF"; 
    }
	var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7],[77, 77, 77, 77]];
 
	for (var i in a) 
	{
		console.log("row " + i);
		for (var j in a[i]) 
		{
			console.log(" " + a[i][j]);
		}
	}
}