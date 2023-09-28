# Lab_Mobile_Advanced

## Các bài lab cá nhân môn di động nâng cao

## Tạo dự án ionic angular

### `ionic start "atm" blank --type=angular`

## Thêm ứng dụng android

### `ionic cap add android`

## Build production version in /www

### `ionic build --prod`

## Sync the native project from the build folder (/www)

### `npx cap sync`

## Create the native project in Android Studio

### `npx cap open android`

## Tạo file apk trong android studio

Build -> Build bundle (APK) -> Build APK

File apk ở tại => D:\Lab_Mobile_Advanced\atm\android\app\build\outputs\apk\debug\app-debug.apk
===================================
Cài đặt camera
Change file /atm/capacitor.config.json
{
  "appId": "io.ionic.starter",
  -> "appName": "atm",  
  "webDir": "www",
  "bundledWebRuntime": false
}
## `npm install @capacitor/camera`
## `npx cap sync`
## `npm install @ionic/pwa-elements`
atm/src/main.ts
	import { defineCustomElements } from '@ionic/pwa-elements/loader';
	defineCustomElements(window);
