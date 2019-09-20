// NeoPixel test program showing use of the WHITE channel for RGBW
// pixels only (won't look correct on regular RGB NeoPixel strips).

#include <Adafruit_NeoPixel.h>
#include <Wire.h>
#include "Adafruit_SI1145.h"
#include "WiFi.h" // ESP32 WiFi
#include <stdlib.h>

WiFiClient client;

String data;
int historyid;

// See the following for generating UUIDs:
// https://www.uuidgenerator.net/

#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"



// Which pin on the Arduino is connected to the NeoPixels?
#define LED_PIN     15

// How many NeoPixels are attached to the Arduino?
#define LED_COUNT  16

// NeoPixel brightness, 0 (min) to 255 (max)
#define BRIGHTNESS 50

// Declare our NeoPixel strip object:
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_GRB + NEO_KHZ800);
// Argument 1 = Number of pixels in NeoPixel strip
// Argument 2 = Arduino pin number (most are valid)
// Argument 3 = Pixel type flags, add together as needed:
//   NEO_KHZ800  800 KHz bitstream (most NeoPixel products w/WS2812 LEDs)
//   NEO_RGBW    Pixels are wired for RGBW bitstream (NeoPixel RGBW products)

Adafruit_SI1145 uv = Adafruit_SI1145();

void ConnectToWiFi()
{

  //enter wifi username and password here
  WiFi.mode(WIFI_STA);
  WiFi.begin("", "");
 
  uint8_t i = 0;
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print('.');
    delay(500);
 
    if ((++i % 16) == 0)
    {
      Serial.println(F(" still trying to connect"));
    }
  }
 
  Serial.print(F("Connected. My IP address is: "));
  Serial.println(WiFi.localIP());
}


void setup() {
  strip.begin();           // INITIALIZE NeoPixel strip object (REQUIRED)
  strip.show();            // Turn OFF all pixels ASAP
  strip.setBrightness(BRIGHTNESS); // Set BRIGHTNESS to about 1/5 (max = 255)

  Serial.begin(115200);
  ConnectToWiFi();

  Serial.println("Adafruit SI1145 test");
  
  if (! uv.begin()) {
    Serial.println("Didn't find Si1145");
    while (1);
  }
  
  data = "";
  historyid = 1;

}

uint32_t currentRingColour = 0;

void loop() {
  Serial.println("===================");
  Serial.print("Vis: "); Serial.println(uv.readVisible());
  Serial.print("IR: "); Serial.println(uv.readIR());

  float UVindex = uv.readUV();
  UVindex /= 1.0;  
  Serial.print("UV: ");  Serial.println(UVindex);

  //Set NeoPixel ring colour according to uv index
  switch ((int)UVindex) {
    case 0:
    case 1:
    case 2:
      setLEDRingColour(0, 128, 0); // Green
      break;
    case 3:
    case 4:
    case 5:
      setLEDRingColour(255, 255, 0); // Yellow
      break;
    case 6:
    case 7:
      setLEDRingColour(241, 139, 0); // Orange
      break;
    case 8:
    case 9:
    case 10:
      setLEDRingColour(255, 0, 0); // Red
      break;
    default:
      setLEDRingColour(238, 130, 238); // Violet
  } 

  // Latest uv index should be stored at index 0 of history table.
  char buffer[50]; 
  sprintf(buffer, "{\"historyid\": \"0\", \"uvindex\": %f}", UVindex); 
  Serial.print(buffer);

  
  // Post uv index to History table of database
  if (client.connect("deco3801-teamwyzards.uqcloud.net",80)) { // REPLACE WITH YOUR SERVER ADDRESS
    client.println("POST /updateUVIndex.php HTTP/1.1"); 
    client.println("Host: deco3801-teamwyzards.uqcloud.net"); // SERVER ADDRESS HERE TOO
    client.println("Content-Type: application/x-www-form-urlencoded"); 
    client.print("Content-Length: "); 
    client.println(strlen(buffer)); 
    client.println(); 
    client.print(buffer); 

    Serial.print("connected");
  } else {
    Serial.print("didn't connect");
  }

  if (client.connected()) { 
    client.stop();
  }


  delay(1000);
}

// Helper function to set Neopixel ring colour
void setLEDRingColour(int r, int g, int b) {
  if (currentRingColour != strip.Color(r, g, b)) {
    strip.fill(strip.Color(r, g, b));
    strip.show();
    currentRingColour = strip.Color(r, g, b);
  }
}
