🚀 OPCIÓN 1: Si tu proyecto usa Expo

🧩 Paso 1: Instala la CLI de Expo



**npm install -g expo-cli**



==================================================



🧩 Paso 2: Inicia sesión en Expo



**npx expo login**



==================================================



🧩 Paso 3: Genera el APK (build local o en la nube)

🔸 Opción A: Generar APK en la nube (recomendado)



**npx expo build:android -t apk**



==================================================

Esto sube tu proyecto a los servidores de Expo y genera un .apk descargable.



📦 Al finalizar, te mostrará una URL donde puedes bajar el archivo:



✔ Build successful

➡ Download: https://expo.dev/artifacts/eas/abc123.apk



=====================================================================================





🚀 EXPORTAR TU APP EXPO A APK LOCALMENTE

🧩 1. Instala EAS CLI



Si aún no la tienes => **npm install -g eas-cli**



**Verifica la instalación => eas --version**



=====================================================================================



🧩 2. Inicia sesión en tu cuenta de Expo



(EAS requiere estar logueado incluso para builds locales) => **eas login**

&nbsp;

En caso de que no tenga cuenta ejecuta este comando => **eas login --help** 



=====================================================================================



🧩 3. Configura EAS en tu proyecto (solo la primera vez)



Dentro de la raíz de tu proyecto => **npx eas build:configure**





Esto creará un archivo:

📄 eas.json



Ejemplo de configuración mínima:



{

&nbsp; "build": {

&nbsp;   "development": {

&nbsp;     "developmentClient": true,

&nbsp;     "distribution": "internal"

&nbsp;   },

&nbsp;   "preview": {

&nbsp;     "distribution": "internal",

&nbsp;     "android": {

&nbsp;       "buildType": "apk"

&nbsp;     }

&nbsp;   },

&nbsp;   "production": {

&nbsp;     "android": {

&nbsp;       "buildType": "app-bundle"

&nbsp;     }

&nbsp;   }

&nbsp; }

}



=====================================================================================



🧩 4. Ejecuta el build local



Para generar el APK directamente en tu máquina:



***npx eas build -p android --profile preview --local***



=====================================================================================



🧩 5. Espera a que termine y localiza el APK



Al finalizar, verás un mensaje como:



✔ Build finished

📦 File saved to: ./dist/MyApp-preview.apk



