#include <PZEM004Tv30.h>
#include <FirebaseESP8266.h>
#include <FirebaseESP8266HTTPClient.h>
#include <FirebaseJson.h>
#include <ESP8266WiFi.h>
#include "ESPDateTime.h"

#include <SoftwareSerial.h>//NODEMCU ESP8266

#define FIREBASE_HOST "https://proyek-akhir-5b2d1.firebaseio.com/"
#define FIREBASE_AUTH "mgCRW6GRRyCCdFpfLFoC21SAzwWXaJ5bYTCvySR3"
const char *ssid = "MCG";//ganti nama wifi
const char *pass = "r4m4dh4n1";//ganti password
String hardwareAuth = "-MBHvaOkeIAsllPej2Tg";

PZEM004Tv30 pzem(D5, D6); // (RX,TX) that connected to TX,RX of PZEM
WiFiClient client;
FirebaseData firebaseData;
FirebaseJson firebaseJson;

void setupDateTime() {
  DateTime.setTimeZone(7);
  DateTime.begin();
  if (!DateTime.isTimeValid()) {
    Serial.println("Failed to get time from server.");
  }
}

void setup()
{
  Serial.begin(9600);

  //Reset energy value of pzem
  Serial.print("Reset Energy");
  pzem.resetEnergy();
  Serial.print("Set address to 0x42");
  pzem.setAddress(0x42);

  //Initialize Time
  setupDateTime();
  DateTimeParts p = DateTime.getParts();

  //Initialize WiFi
  delay(10);
  Serial.print("Menghubungkan ke: ");
  Serial.println(ssid);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print("...\n");
  }
  Serial.print("\n");
  Serial.print("IP address: ");
  Serial.print(WiFi.localIP());
  Serial.print("\n");
  Serial.print("MAC: ");
  Serial.println(WiFi.macAddress());
  Serial.println("");
  Serial.print("Terhubung dengan: ");
  Serial.println(ssid);

  //Initialize Firebase
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
}

String getCurrentTime() {
  String res = "";
  if (!DateTime.isTimeValid()) {
    Serial.println("Failed to get time from server, retry.");
    DateTime.begin();
    res = "Null";
  } else {
    //Serial.printf("Local  Time:   %s\n", DateTime.toString().c_str());
    res = DateTime.toString().c_str();
  }
  return res;
}

void push2firebase(float v, float i, float p, float e) {
  firebaseJson.set("tegangan", String(v));
  firebaseJson.set("arus",  String(i));
  firebaseJson.set("daya",  String(p));
  firebaseJson.set("energi",  String(e));
  firebaseJson.set("waktu",  getCurrentTime());
  Serial.println();
  Serial.println(firebaseData.pushName());
  
  if (Firebase.pushJSON(firebaseData, "lab/" + hardwareAuth + "/data_listrik", firebaseJson)) {
    Serial.println(firebaseData.dataPath());
    Serial.println(firebaseData.pushName());
    Serial.println(getCurrentTime());
  } else {
    Serial.println(firebaseData.errorReason());
  }
}

void loop() {
  //Start get time
  if (!DateTime.isTimeValid()) {
    Serial.println("Failed to get time from server, retry.");
    DateTime.begin();
  } else {
    //Serial.printf("Local  Time:   %s\n", DateTime.toString().c_str());
  }

  //Start get PZEM data
  float v = pzem.voltage();
  if (v < 0.0) v = 0.0;
  Serial.print(v); Serial.print("V; ");
  float i = pzem.current();
  Serial.print(i); Serial.print("A; ");
  float p = pzem.power();
  Serial.print(p); Serial.print("W; ");
  float e = pzem.energy();
  Serial.print(e); Serial.print("Wh; ");
  Serial.println();

  //Start Firebase push JSON with current time
  push2firebase(v, i, p, e);

  delay(60000);

}
