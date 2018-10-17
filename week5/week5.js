var serial; // variable to hold an instance of the serialport library
var sensorValue = 0;		// ellipse position

function setup() {
  createCanvas(320, 240);
  serial = new p5.SerialPort();  // make a new instance of  serialport library
  serial.on('list', printList);  // callback function for serialport list event
  serial.on('data', serialEvent);// callback for new data coming in
	serial.list();                         // list the serial ports
	serial.open("/dev/cu.usbserial-DN050GXS"); // open a port
}

function draw() {
  background("#2307AF");
	fill(255);
	ellipse(sensorValue, height/2, 20, 20);
  text(sensorValue, 20, 20);
}