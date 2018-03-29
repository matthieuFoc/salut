document.addEventListener("deviceready", onDeviceReady, false);
window.addEventListener("batterystatus", onBatteryStatus, false);

    function onDeviceReady(){
        checkConnection();
        var modele = device.model;
        var sys = device.platform;
        var version = device.version;
        var uuid = device.uuid;

        alert(" Modele : "+ modele+"\n"+
              " Systeme : "+ sys+"\n"+
              " Version : "+ version+"\n"+
              " UUID : "+ uuid+"\n");

    }


function onBatteryStatus(status) {
    alert("Level: " + status.level+"%");
}


function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}


