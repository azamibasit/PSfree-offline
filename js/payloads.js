//------BIG THANKS TO SISTRO FOR THIS !!!!!--------


var getPayload = function(payload, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open('GET', payload);
  req.send();
  req.responseType = "arraybuffer";
  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

var sendPayload = function(url, data, onLoadEndCallback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.send(data);

  req.onload = function (event) {
      if (onLoadEndCallback) onLoadEndCallback(req, event);
  };
}

function LoadpaylodsGhen20(PLfile){ //Loading Payload via Payload Param.
  var PS4IP = '127.0.0.1';
	  
		// First do an initial check to see if the BinLoader server is running, ready or busy.
		var req = new XMLHttpRequest();
    if (PS4IP == "127.0.0.1") {
      req.open("POST", `http://${PS4IP}:9090/status`);
    } else {
      req.open("GET", `http://${PS4IP}:9090/status`);
    }
		req.send();
		req.onerror = function(){
			alert("Cannot Load Payload Because The BinLoader Server Is Not Running");//<<If server is not running, alert message.
      //ServerStatus("Cannot Load Payload Because The BinLoader Server Is Not Running");
			return;
		};
		req.onload = function(){
			var responseJson = JSON.parse(req.responseText);
			if (responseJson.status=="ready"){
		  getPayload(PLfile, function (req) {
				if ((req.status === 200 || req.status === 304) && req.response) {
				   //Sending bins via IP POST Method
           sendPayload(`http://${PS4IP}:9090`, req.response, function (req) {
            if (req.status === 200) {
              alert("Payload sent !");
					   }else{
               //ErrorNotif();
               return;
              }
					})
				}
			});
      PleaseWait();
			}
			else {
				alert("Cannot Load Payload Because The BinLoader Server Is Busy");//<<If server is busy, alert message.
        //ErrorNotif3();
				return;
		  }
	  };
  }

//--------------------------------------------------

//------Payloads ONLY OR 9.00--------


// Payloads

// Dumpers

function load_AppDumper(){
    PLfile = "../payloads/Bins/Dumper/appdumper.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_KernelDumper(){
    PLfile = "../payloads/Bins/Dumper/kerneldumper.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_VTXDumper(){
    PLfile = "../payloads/Bins/Dumper/ps4-dumper-vtx-900.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_ModuleDumper(){
    PLfile = "../payloads/Bins/Tools/moduledumper.bin";
    LoadpaylodsGhen20(PLfile);
}


// Tools

function load_PS4Debug(){
    PLfile = "../payloads/Bins/Tools/ps4debug.bin";
    Pay = PLfile;
    LoadpaylodsGhen20(PLfile);
}

function load_App2USB(){
    PLfile = "../payloads/Bins/Tools/app2usb.bin";
    Pay = PLfile;
    LoadpaylodsGhen20(PLfile);
}


function load_BackupDB(){
    PLfile = "../payloads/Bins/Tools/backupdb.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_RestoreDB(){
    PLfile = "../payloads/Bins/Tools/exitidu.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_DisableASLR(){
    PLfile = "../payloads/Bins/Tools/disableaslr.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_DisableUpdates(){
    PLfile = "../payloads/Bins/Tools/disableupdates.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_EnableUpdates(){
    PLfile = "../payloads/Bins/Tools/enbaleupdates.bin";
    LoadpaylodsGhen20(PLfile);
}

function load_ExitIDU(){
    PLfile = "../payloads/Bins/Tools/exitidu.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_FTP(){
    PLfile = "../payloads/Bins/Tools/ftp.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_HistoryBlocker(){
    PLfile = "../payloads/Bins/Tools/historyblocker.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_RIFRenamer(){
    PLfile = "../payloads/Bins/Tools/rifrenamer.bin";
    LoadpaylodsGhen20(PLfile);
}
  
function load_Orbis(){
    PLfile = `../payloads/Bins/Tools/Orbis-Toolbox-900.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_WebrRTE(){
    PLfile = `../payloads/Bins/Tools/WebRTE_900.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_ToDex(){
    PLfile = `../payloads/Bins/Tools/ToDex.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_KernelClock(){
    PLfile = "../payloads/Bins/Tools/kernel-clock.bin";
    LoadpaylodsGhen20(PLfile);
}

// Linux

function load_Linux(){
    PLfile = `../payloads/Bins/Linux/LinuxLoader-900.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_Linux2gb(){
    PLfile = `../payloads/Bins/Linux/LinuxLoader-900-2gb.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_Linux3gb(){
    PLfile = `../payloads/Bins/Linux/LinuxLoader-900-3gb.bin`;
    LoadpaylodsGhen20(PLfile);  
}

function load_Linux4gb(){
    PLfile = `../payloads/Bins/Linux/LinuxLoader-900-4gb.bin`;
    LoadpaylodsGhen20(PLfile);  

}

function load_Linux5gb(){
    PLfile = `../payloads/Bins/Linux/LinuxLoader-900-5gb.bin`;
    LoadpaylodsGhen20(PLfile);  
}


// Mod Menu

// GTA

function load_GTAArbic(){
    PLfile = `../payloads/Bins/GTA/ArabicGuy-1.0-1.27-rfoodxmodz.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_GTAArbic3(){
    PLfile = `../payloads/Bins/GTA/ArabicGuy-1.0-1.32-rfoodxmodz.bin`;
    LoadpaylodsGhen20(PLfile);

}

function load_GTAArbic33(){
    PLfile = `../payloads/Bins/GTA/ArabicGuy-1.0-1.33-rfoodxmodz.bin`;
    LoadpaylodsGhen20(PLfile);
}


function load_GTABQ(){
    PLfile = `../payloads/Bins/GTA/gtavbq133-900-GraFfiX_221211.bin`;
    LoadpaylodsGhen20(PLfile);
}

// RDR2

function load_Oysters100(){
    PLfile = `../payloads/Bins/RDR2/OystersMenu-1.00-FREE.bin`;
    LoadpaylodsGhen20(PLfile);
}


function load_Oysters113(){
    PLfile = `../payloads/Bins/RDR2/OystersMenu-1.13-FREE.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_Oysters119(){
    PLfile = `../payloads/Bins/RDR2/OystersMenu-1.19-FREE.bin`;
    LoadpaylodsGhen20(PLfile);
}

function load_Oysters124(){
    PLfile = `../payloads/Bins/RDR2/OystersMenu-1.24-FREE.bin`;
    LoadpaylodsGhen20(PLfile);
}