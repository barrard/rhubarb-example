var Rhubarb = require("rhubarb-js");

Rhubarb.init({
	protocolDefinitionPath: "./public/protocol-definition.json",
	isServer: true,
	serverListenPort: 3001,
});

console.log("Server listening to port 3001");

var userNamesByClientID = new Object();
var reusableProtocolObject = { userName: "", x: 0, y: 0 };

Rhubarb.onReceived("nicknameSelected", function (getter, clientID) {
	var userName = getter("value");
	userNamesByClientID[clientID] = userName;
	console.log(userName + " connected --> " + clientID);
});

Rhubarb.onReceived("positionUpdated", function (getter, clientID) {
	var userName = userNamesByClientID[clientID];
	var x = getter("x");
	var y = getter("y");
	reusableProtocolObject.userName = userName;
	reusableProtocolObject.x = x;
	reusableProtocolObject.y = y;
	for (var cID in userNamesByClientID) {
		if (cID != clientID) {
			Rhubarb.send("positionUpdated", reusableProtocolObject, cID);
		}
	}
});

Rhubarb.onClientDisconnected(function (clientID) {
	var userName = userNamesByClientID[clientID];
	if (!userName) {
		return;
	}
	console.log(userName + " disconnected --> " + clientID);
	delete userNamesByClientID[clientID];
	for (var cID in userNamesByClientID) {
		Rhubarb.send(
			"playerDisconnected",
			{
				userName: userName,
			},
			cID
		);
	}
});

process.stdin.resume();
