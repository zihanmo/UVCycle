// NeoPixel test program showing use of the WHITE channel for RGBW
// pixels only (won't look correct on regular RGB NeoPixel strips).

#include <Adafruit_NeoPixel.h>
#include <Wire.h>
#include "Adafruit_SI1145.h"
#include "WiFi.h" // ESP32 WiFi
#include <stdlib.h>

bool deviceConnected = false;
bool oldDeviceConnected = false;

uint8_t txValue = 0;
WiFiClient client;

RTC_DATA_ATTR int bootCount = -1;

String data;
int historyid;
volatile int interruptCounter = 0;

// See the following for generating UUIDs:
// https://www.uuidgenerator.net/

#define SERVICE_UUID           "6E400001-B5A3-F393-E0A9-E50E24DCCA9E" // UART service UUID
#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"
#define CHARACTERISTIC_UUID_TX "6E400003-B5A3-F393-E0A9-E50E24DCCA9E"



// Which pin on the Arduino is connected to the NeoPixels?
#define LED_PIN     12

// How many NeoPixels are attached to the Arduino?
#define LED_COUNT  16

// NeoPixel brightness, 0 (min) to 255 (max)
#define BRIGHTNESS 50

#define SENSOR_ID 13

// Declare our NeoPixel strip object:
Adafruit_NeoPixel strip(LED_COUNT, LED_PIN, NEO_RGBW + NEO_KHZ800);
// Argument 1 = Number of pixels in NeoPixel strip
// Argument 2 = Arduino pin number (most are valid)
// Argument 3 = Pixel type flags, add together as needed:
//   NEO_KHZ800  800 KHz bitstream (most NeoPixel products w/WS2812 LEDs)
//   NEO_RGBW    Pixels are wired for RGBW bitstream (NeoPixel RGBW products)

Adafruit_SI1145 uv = Adafruit_SI1145();

void ConnectToWiFi()
{
 
  WiFi.mode(WIFI_STA);
  WiFi.begin("AndroidAPD987", "ongp1202");
  Serial.print("Connecting to "); Serial.println("AndroidAPD987");
 
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

void IRAM_ATTR blink() {
    esp_deep_sleep_start();
}

/*
Method to print the reason by which ESP32
has been awaken from sleep
*/
void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;

  wakeup_reason = esp_sleep_get_wakeup_cause();

  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}
int loopCount = 0;
void setup() {
  strip.begin();           // INITIALIZE NeoPixel strip object (REQUIRED)
  strip.show();            // Turn OFF all pixels ASAP
  strip.setBrightness(BRIGHTNESS); // Set BRIGHTNESS to about 1/5 (max = 255)

    Serial.begin(115200);

    //Increment boot number and print it every reboot
  ++bootCount;
  loopCount = 0;

  Serial.println("Boot number: " + String(bootCount));
    
    esp_sleep_enable_ext0_wakeup(GPIO_NUM_13, 1);
    pinMode(13, INPUT_PULLDOWN);
    attachInterrupt(digitalPinToInterrupt(13), blink, FALLING);

      if (bootCount == 1) {
    esp_deep_sleep_start();
  }

    ConnectToWiFi();

  
  Serial.println("Waiting a client connection to notify...");
  
  Serial.println("Adafruit SI1145 test");
  
  if (! uv.begin()) {
    Serial.println("Didn't find Si1145");
    while (1);
  }

  //Serial.println("OK!");
  data = "";
  historyid = 1;

}

uint32_t currentRingColour = 0;
int deepSleep = 0;
void loop() {


  Serial.println("interrupt count");
  Serial.println(interruptCounter);
  Serial.println("===================");
  Serial.print("Vis: "); Serial.println(uv.readVisible());
  Serial.print("IR: "); Serial.println(uv.readIR());
  
  // Uncomment if you have an IR LED attached to LED pin!
  //Serial.print("Prox: "); Serial.println(uv.readProx());

  float UVindex = uv.readUV();
  // the index is multiplied by 100 so to get the
  // integer index, divide by 100!
  UVindex /= 1.0;  
  Serial.print("UV: ");  Serial.println(UVindex);

  
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

      
     if (deviceConnected) {
        txValue = UVindex;
  }

    // disconnecting
    if (!deviceConnected && oldDeviceConnected) {
        delay(500); // give the bluetooth stack the chance to get things ready
        oldDeviceConnected = deviceConnected;
    }
    // connecting
    if (deviceConnected && !oldDeviceConnected) {
    // do stuff here on connecting
        oldDeviceConnected = deviceConnected;
    }
  

  //data = "historyid=" + historyid + "&uvindex=" + (int)UVindex;
  data = "historyid=20&uvindex=19";
  uint8_t uvlive = (int)UVindex;
    char buffer2[20];
    sprintf(buffer2, "%d", uvlive);
    Serial.print("sprintf");
    Serial.print(buffer2);
  
  char buffer[100]; 
  sprintf(buffer, "{\"uvindex\": %f, \"sensorid\": %d, \"history_id\": %d}", UVindex, SENSOR_ID, bootCount); 
  Serial.print(buffer);
  Serial.print(buffer2);

  

  if (client.connect("deco3801-teamwyzards.uqcloud.net",80) && (loopCount % 5 == 0)) { // REPLACE WITH YOUR SERVER ADDRESS
    client.println("POST /updateUVIndex.php HTTP/1.1"); 
    client.println("Host: deco3801-teamwyzards.uqcloud.net"); // SERVER ADDRESS HERE TOO
    client.println("Content-Type: application/x-www-form-urlencoded"); 
    client.print("Content-Length: "); 
    client.println(strlen(buffer)); 
    client.println(); 
    client.print(buffer); 
    historyid = historyid + 1;
    Serial.print("connected");
  } else {
    Serial.print("didn't connect");
  }

  if (client.connected()) { 
    client.stop();  // DISCONNECT FROM THE SERVER
  }

  loopCount = loopCount + 1;
  delay(1000);
}

void setLEDRingColour(int r, int g, int b) {
  if (currentRingColour != strip.Color(r, g, b)) {
    strip.fill(strip.Color(r, g, b));
    strip.show();
    currentRingColour = strip.Color(r, g, b);
  }
}
