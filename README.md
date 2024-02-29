# tushar_backend
This is to practice backend development for Tushar


BH-INTERNAL-COPY-LEFT
AppShell
App Shell is a shell/skeleton that can be used to host multiple web applications within it. It is a React.js, Node.js, and Express application that can onboard apps developed in the different technology stacks. It is available as a code or docker image with product companies within BH.

Getting Started
Installation
Prerequisite
Install app-shell
Running Server
Using code
What do each Key in configuration mean
Docker
Running Unit Tests
Configuration for different use cases
Minimal appshell configuration
Run AppShell with Mock service
Run micro app with WebSocket enabled
Integrate standalone microapp into App-shell
Add a third party application
Features
Application Login
Flexibility of choosing technologies and dependencies
Context sharing
Ability to control Browser History
Multiapp support
Health probes
Display and edit user information
Display static page and microapps in a dialog box
Toast Message
Session Management
Multi-instance support
Matomo Configurable
Logger Configuration
Internationalization
Multi layout Microapp Control Guide
File Upload
Caching Appshell Static Files
Run AppShell on a custom route
Add links to an icon on the navigation bar
Feedback
Notification
Update application logo
Obfuscation
Header Menu Config
Global Search
Make keys Configurable
Make favicon Configurable
BHDS 2 Drawer with Parent Child
Refresh Window Token
Custom SVG support for microApp Icons
Support for customer configurable Theme
Hide the menuItem child menu
Multi Tenancy
Overlay window width configuration
Integrated authentication for internationalization service
Stacked Toast Messages
Support for AppShell Reload Listener
Notification Hub Front end
BH-Toolkit-Update-Process
AppShell limitations
Documentation
TroubleShooting
Getting Started
Installation
Prerequisite
	  -Install [Node](https://nodejs.org/en/). You will need version 16.20.x or above.
	  -React version 18 shipped with appshell build.
	  -npm version should be 8.x.x
	  -Install https://www.sonarqube.org/sonarlint/ extension is IDE used for development purpose. (Recomended to detect SonarLint errors at development time)
Install app-shell
1. Clone the app-shell repository to your local machine and open a Terminal window in its root folder..
2. Type `npm install` to install all dependencies.
3. Type `npm run my-command` at the root folder of your local app-shell repository for creating the build and run AppShell on localhost:8000.
Running Server
Using code
Type npm run my-command to start your local app-shell server.
You should now be able to see the login screen of app-shell by going to http://localhost:8000/ in your web browser.

What do each Key in configuration mean
Mandatory keys:
grantType - Supports password and oauth2.

secure - Should be false for local.

HTTPOnly - Should be false for local.

clientId - It is the app id that is created in IDP.

uaaClientSecret - It is the app's secret key found in the credentials of clientID.

uaaURL - It is the load balancer URL of the Security Service.

redirectUrl - In Case grantType is oauth2, this string needs to be registered at IDP for the callback. The URL user will be redirected once auth code is generated.

tenant - It is used for specific tenancy modes.

tokenURL - Substring part of auth service token fetch API URL.

microappServices - This array of objects contains the microapp to be integrated with the App shell application.

Non Mandatory keys:
tenantDropDown - If set to true(Boolean), multi tenant dropdown will be visible in appshell header, default is set to false.

uaaPrivateUrl - Can we used when uaaPublicUrl gives connection error intermittently.

redisConfig - redisConfig object has host, port, username, password key which is Redis endpoint URL and Redis endpoint port to add multi-instance support for App-shell in your env.

displayTextId - This key helps making the name of microapp configurable/internationlized.

productName - It is used for specifying application name.

designTemplate - designTemplate sets desired layout with horizontal header if empty will show default vertical header

wsport - wsport key enables web-socket to run on the user-specified port, default port is 9000 in case the key is not specified.

userInfoDialogMap - userInfoDialogMap object helps to display static pages and microapps in a dialog box

loggerMap - loggerMap Object is used to specify the configuration of logs

templateOverloading - This object helps in show/hide of common apps in multi-layout model

id - It is used for microapp id and should be unique.

name - It is the name of the microapp.

link - It is used for linking the microapp while navigating. It will be used in nav menus inside AppShell.

icon - It is used for the microapp icon and it should be set as material-ui with reactjs.

host - You must set the microapp URL where the microapp is running.

path - It is used for default nav.

default - When set to true it is used for loading the default microapp inside AppShell.

template - It is used for loading the default page of the microapp.

feedbackFlag - feedbackFlag allows to record feedback.

visibility - If visibility is false, the app will not be shown in the appdrawer/navbar.

thirdPartyApp - thirdPartyApp key should be set to true for the thirdparty app.

navService - It must be set as /nav.

trackUserActiveEnabled - It allows users to track activity and events across the app using matomo by setting its value as true. By default, it is set to false.

serverUrl - It is used to define hosted URL of the matomo dashboard.

baseHref - This enables appshell to run on the route specified by the user. For example, if the value of the key is set to '/shell/', appshell will run on https://{host}/shell/#/login. If the key is not present, appshell will run on https://{host}/#/login

menuItems - This array of objects will help in grouping microapps in a single tab.

cssClass - "material-icons-outlined" value will show outlined icons. Default will be filled material icons.

apiCacheTime - Time to keep index.html of microapp in cache.

licencesUrl - This URL help to fetch licensing data.

toastMaxCount - This sets the number of toast a user can see at once.

toastAutoHideDuration - This sets the time for toast to disapper.

noPreLoginTheme - This flag when set to true disables dark theme in prelogin page.

isCookieConsentPopupActive - This key when set to false will hide cookie consent pop-up.

microappStaticFileCacheInSec - Time to keep static files of microapp in cache.

sameSite - SameSite prevents the browser from sending this cookie along with cross-site requests, incase of OKTA always use "Lax".

displayMenuItemOnHeader - If set to true, parent name will be visible on header

displayMicroappOnHeader - If set to true, microapp name will be visible on header

applicationName - This is used to set application name on header.(For this to work, displayMenuItemOnHeader and displayMicroappOnHeader should be false).

appVersion - This helps to show new logo in cached scenario.

preloginProductName - This key help show/hide product name in prelogin page.

consumerLogo - This key help show/hide consumer logo in prelogin page.

clickHere - This key help to add URL in "click here" section prelogin page.

contactSupport - This key help to add contact support URL in prelogin page.

contactSupportConfig - This key supports additional config like contact number and email.

privacyPolicy - This key help to add privacy policy URL in prelogin page.

contactUs - This key help to add contact us info in prelogin page.

termsOfUse - This key help to add T&C info in prelogin page.

feedbackServiceUrl - This URL connects apshell to the feedback service.

overlayWidth - Defines the width of the common app.

pinAppWidth - Defines the width of the common app if overlayWidth is not present.

showPreloginPageForSingleTenant - Set to false in configmap.yaml to skip the prelogin page for a single tenant configured in configmap-tenant.yaml.

uaaprivateURL - Connects appshell to an keycloak/Security internal URL instead of CNAME.

notificationServiceUrl - This URL connects apshell to the notification service.

appshellStaticFileCacheInDay - Determines the time in days static files should be cached for.

maxNumOfAppsCached - Specifies the maximum number of apps that appshell should cache.

Docker
To run docker via docker-compose.yaml type "npm run local" in terminal.
The docker-compose.yml file can be modified as required by updating builds and adding/removing services.
If any value in the env files is to be modified, it can be done from the path /app-shell/env.
Update favicon
Add/Update new image in /app-shell/env and rename the image as "favicon.ico".
Uncommment the below code in /app-shell/docker-compose.yaml and re-run docker (npm run update).
    # volumes:
    #   - ./env/favicon.ico:/app-shell/client/build/favicon.ico
Update Application Logo
Add/Update new image in /app-shell/env and rename the image as "logo.svg".
Uncommment the below code in /app-shell/docker-compose.yaml and re-run docker (npm run update).
    # volumes:
    #   - ./env/logo.svg:/app-shell/client/build/images/logo.svg
Update Login page logo
Add/Update new image in /app-shell/env and rename the image as "login_logo.svg".
Uncommment the below code in /app-shell/docker-compose.yaml and re-run docker (npm run update).
    # volumes:
    #   - ./env/login_logo.svg:/app-shell/client/build/images/login_logo.svg
Persist data in Keycloak after docker restart
Stop containers (in VS, right-click container and click Compose Stop; in Docker Desktop click the Stop button) and re-run using "npm run local" (bootrexport.json will be updated). Note: Do not delete/remove containers in step 1.
Next, delete/remove containers (in VS, right-click container and click Compose Down; in Docker Desktop click the Delete button) and re-run the docker. Your data will now be persisted.
Configure websocket port
The default port for websocket is 9000, however, if the port number is required to be modified, the "wsport" key enables web-socket to run on the user-specified port.
Note : Ensure that "WSL 2 based engine" is enabled in docker settings.

Running Unit Tests
To run test case of client side go to the client folder appshell/client and run following command npm run test:coverage

Similarly, we can get test coverage for server-side code by the running below command at appshell/server npm run test:coverage

Check the results in respective coverage/index.html generated by mocha & chai.

Configuration for different use cases
Minimal appshell configuration
https://github.com/bh-ent-tech/sparq-appshell-argocd/blob/8afa62f853200a2e55e2333cdf8300d8a4414bcc/perf/cde-app-shell/configmap.yaml

Run AppShell with Mock service
We can use the below object when we don't want to go through the authentication process.
Users can login using any random username and password.
We need to add these objects in localconfig.json

    "mockSecurityServiceObj": {
    "access_token": "",
    "id_token":"",
    "token_type": "Bearer",
    "expires_in": 3600,
    "scope": null,
    "refresh_token": ""
    },
    "permittedapps": [
    {

      "rsid": "d45dd0cc-13d5-405f-9f77-198a5d3c2ae0",
      "rsname": "userprofileapp"
    },
    {
      "rsid": "fd1a8e91-1963-4986-a6e1-015fe91b52f6",
      "rsname": "assetTree"
    },
    {
      "rsid": "fd1a8e91-1963-4986-a6e1-015fe91b52f6",
      "rsname": "eventApp",
      "scopes": [
        "view","delete"
      ]
    },
    {
      "rsid": "fd1a8e91-1963-4986-a6e1-015fe91b52f6",
      "rsname": "statusApp"
    }
  ]
Run micro app with WebSocket enabled
Some third-party apps have their websocket enabled which can conflict with appshell's websocket. To handle this we have a key "isWebsocketRequired" introduced which should be "true" when we add such third-party apps.

{
   "id": "dremio",
   "name": "Dremio",
   "link": "/dremio/",
   "icon": "archiverounded",
   "host": "<host_URL>",
   "path": "/dremio",
   "template": "/index.html",

   "default": false,
   "thirdPartyApp": true,
   "isWebsocketRequired" : true,
   "websocketPathMap" :[
       {"webSocketServiceName": "","websocketServicePath":"/apiv2/socket"}
     ],
   "feedbackFlag": false
 }
Integrate standalone microapp into App-shell
When running locally, AppShell looks for a microapp-services.json file inside the server. For easy reference of developers, there is a microapp-services.json sample file at the app-shell\server location. This file can be used by the developers to configure and start a local server.

   {
              "id": "<appid>",
              "name": "<app name>",
              "link": "/<applink>/",
              "icon": "<app-icon>",
              "host": "http://<host_url>",
              "path": "/<applink>",
              "template": "/index.html",
              "default": false,
              "visibility":true
          }
Note : If microapp is built using AppBuilder, "template" key should have value "/micro-app.html"

Add a third-party application
A third-party app is an app of which we do not have source code control.
To add a third-party application "thirdPartyApp" key should be set to true.

{
                "id": "<appid>",
                "name": "<app name>",
                "link": "/<applink>/",
                "icon": "<app-icon>",
                "host": "http://<host_url>",
                "path": "/<applink>",
                "template": "/index.html",
                "default": false,
                "thirdPartyApp": true,
                "feedbackFlag": false,
                "visibility":true
              }
Features
Context sharing
App Shell extends its support to communicate between different apps. You can share context with one or more apps by updating the data/status of the app, with or without navigating to another app. App Shell also allows sharing context using the deep link URL.

Detailed documentation is available here

Ability to control Browser History
    "navigationObject": {
      "mode": "spa",
      "appName": "userprofileapp",
      "deletemyHistory": "true/false"
    }
The "deletemyHistory" key is an optional property that takes the value true or false. If the value is true: the history of the previous URL is deleted; clicking the back button will navigate to the page previous to the deleted URL. If the property is missing, App Shell will consider its value as false.

Detailed documentation is available here

Multiapp support
App Shell allows you to host multiple microapps on a single screen. You have full control to define the position of an app on the page and the CSS of the components.

Detailed documentation is available here

Display and edit user information
App shell provides the capability to display and edit user information via keycloak console. The initials of the user appear in the icon located at the top-right of the screen.

Health probes
Health checks, or probes as they are called in Kubernetes, are carried out by the kubelet to determine when to restart a container (liveness probes) and used by services and deployments to determine if a pod should receive traffic (readiness probes).

Liveness probes could catch a deadlock, where an application is running, but unable to make progress. Restarting a container in such a state can help to make the application more available despite bugs.
The kubelet uses readiness probes to know when a container is ready to start accepting traffic.
Update deployment yaml with the probe keys as shown in the github commit here.

Note: This feature is aviable from Q1 2022.

Display static page and microapps in a dialog box
Add userInfoDialogMap key in appshell-config as below to display static information such as policies, License and attributes, etc. in a web page.

Note:

App object should be available in microServices array
Permission should be created for the specific resource in keycloak
Below example depicts how to configure object for different types(file, app, group)

        "userInfoDialogMap": [
        {
          "type": "file",
          "location": "/openResourceAttributes.html",
          "name": "licensesAttributions",
          "mode": "spa",
          "icon": "tune"
        },
        {
          "type": "app",
          "location": "/user-profile/",
          "name": "User Profile",
          "mode": "tab",
          "icon": "tune"
        },
        {
          "type": "group",
          "mode": "spa",
          "name": "About",
          "icon": "tune",
          "subMenu": [
              {
                  "location": "/openResourceAttributes.html",
                  "name": "Product Licenses",
                  "icon": "tune",
                  "default":true
              },
              {
                  "location": "/version.txt",
                  "name": "Version",
                  "icon": "tune",
                  "default":false
              }
          ]
        }
      ]
Detailed documentation is available here

Toast Message
App Shell provides you the ability to display toast messages for Error, Warning, Info, and Success. The following code snippet must be added in the microapp:

//For Success Message
openSuccessNotifications(){
var event =new CustomEvent("notification",{'detail': {show: true, message: 'Application running successfully.',variant: 'success'}});
document.dispatchEvent(event);
}

//For Error Message
openErrorNotifications(){
var event =new CustomEvent("notification",{'detail': {show: true, message: 'Application error.',variant: 'error'}});
document.dispatchEvent(event);
}

//For Warning Message
openWarningNotifications(){
var event =new CustomEvent("notification",{'detail': {show: true, message: 'Application gives warning.',variant: 'warning'}});
document.dispatchEvent(event);
}

//For Info Message
openInfoNotifications(){
var event =new CustomEvent("notification",{'detail': {show: true, message: 'Application shows some info.',variant: 'info'}});
document.dispatchEvent(event);
}
Flexibility of choosing technologies and dependencies
App Shell allows you to choose your front-end technologies and dependencies, independent of other microapps that may exist within a single application. All the microapps can be deployed and scaled independently.

Application Login
Login screen to authenticate user credentials. App Shell supports the following authentication grant types:

Password grant - App Shell supports OAuth 2.0 Resource Owner Password Credentials grant by rendering the App Shell login screen to accept login credentials, and delegates user authentication call to Security Service. This grant type supports applications with either AWS Cognito, or Keycloak, or any OAuth 2.0 implementation.
Authorization code grant - OAuth 2.0 Authorization Code grant redirects login page to BH or C3 or Customer’s Okta servers. App Shell receives authorization code from the Okta servers and uses it to generate a token using Security Service. This grant type supports applications with either Okta or Active Directory or any OAuth 2.0 implementation.
oauth2 grantType also provides support to display License page for the first time user.

Note: make sure in keycloak authentication section, Terms and Conditions is enabled in Default Action in Required Actions.

Session Management
Appshell allows two mechanism for Session Management:

Websocket : By default Websocket mechanism is supported by App Shell.
Polling(recommended) : If polling is to be used instead of Websocket, "pollingInterval":5000 object is to be added in the App Shell config file where "5000" is in milliseconds. Interval can be configured as required.
Note: make sure in keycloak expiry matches with IDP expiry for session management.

In case of external-IDP (OKTA/EIAM, etc), verify that IDP has been configured to ask for password in case of session expiry.
Multi Instance Support
You can run App Shell on multiple instances by enabling Redis cache. Redis cache allows session-sharing between two pods, resulting in improved performance and lesser downtime. To use the feature add redisConfig to config and replica should be set to more than 1.

Analytic tools
Users can turn on and off the tracking of Analytical tools using the boolean key "trackUserActiveEnabled". By default, the tracking is off.

	"userExperience": [
              {
                "trackUserActiveEnabled": false,
                "trackerType": "matomo",
                "serverUrl": "https://appshell-qa-matomo.np-0000183.npause1.bakerhughes.com/",
                "clientLibraryLocation": "/js/userExperience/track_matomo.js",
                "siteId": "1"
              },
              {
                "trackUserActiveEnabled": true,
                "trackerType": "heap",
                "serverUrl": "https://cdn.heapanalytics.com/js",
                "clientLibraryLocation": "/js/userExperience/track_heap.js",
                "siteId": "3136781264"
              }
            ]
Update various application logos
upload image here (https://github.com/bh-ent-tech/cde-appshell-files/tree/main/dev/icon) image name should be named "consumer-logo.svg" if consumer logo of Prelogin page needs to be updated image name should be named "login_logo.svg" if login logo of login page in password grantType needs to be updated image name should be named "main-logo.svg" if main logo on top left of Prelogin page needs to be updated image name should be named "pre-login.svg" if big left logo of Prelogin page needs to be updated image name should be named "logo.svg" if main logo of appshell dashboard page needs to be updated

run CI https://jenkinsops.prd-0000108.pause1.bakerhughes.com/job/MTC_Jobs/job/SPARQ/job/App_Shell/job/appshell-icon-image/

update image # in deployment.yaml and run CD

Logger Configuration
threshold value can be info/warn/debug/error (debug shows additional debugging logs)

Application logs example :

Logger.error(err as Error);
Logger.info(${success.started} ${port});
Logger.warn(new Error(error.logConfig));
Audit logs example :

const auditPayload = { eventCategory: 'login', eventType: 'Authentication', eventSubtype: 'Success', response: 'Audit_Success', }; Logger.auditInfo(success.userSave, req, auditPayload);
logger object in appshell config to enable logging, if object not present threshold will be considered as "error"

  "loggerMap": {
    "env": "production", //optional
    "logTo": "console", //optional
    "threshold": "error", //mandatory
    "filename": "app-shell-log", //optional
    "fileRotationSize": "400k", //optional
    "format": "json" //optional
  }
Internationalization
Appshell provides the capability to use the application in various languages without requiring engineering changes in source code.

Detailed documentation is available here

Multi layout Microapp Control Guide
Appshell provides the ability to override the styling where you can choose to hide/display common apps for any main app when you switch between the applications. This can be achieved by adding the template overloading property.

Detailed documentation is available here

File Upload
Refer to the confluence link: https://bakerhugheswiki.atlassian.net/wiki/spaces/IEGOQ/pages/17102065774/File+upload+option+in+App-Shell

Caching Appshell Static Files
For NGINX users: Add route in NGINX for static file caching

	location /static/ {
		    #proxy_redirect off;
		    expires 365d; // configurable as per requirement. 365d is 1 year expiry
		    proxy_pass http://app_shell;
		    proxy_http_version 1.1;
		    proxy_set_header Upgrade $http_upgrade;
		    proxy_set_header Connection $connection_upgrade;
		}
Run AppShell on a custom route
App Shell provides the ability to run the app on custom routes by providing a suitable value to key "baseHref" in config.yaml and updating location "/" in nginx to "/{baseHref}".
For example, if the value of the key is set to '/shell/', App Shell will run on https://{{host}}/shell/.
Note: If grantType is set to "oauth2", redirectUrl should also contain baseHref value.

"baseHref":"/main/"
"redirectUrl": "https://{{host}}/main/authorization-code/callback"
Add below in nginx

	location /main {
              #proxy_redirect off;
              proxy_pass http://svc-app-shell;
              proxy_http_version 1.1;
              proxy_set_header Upgrade $http_upgrade;
              proxy_set_header Connection $connection_upgrade;
            }
	location /static {
		    #proxy_redirect off;
		    expires 365d; // configurable as per requirement. 365d is 1 year expiry
		    proxy_pass http://app_shell;
		    proxy_http_version 1.1;
		    proxy_set_header Upgrade $http_upgrade;
		    proxy_set_header Connection $connection_upgrade;
		}
	location /images {
		    #proxy_redirect off;
		    proxy_pass http://app_shell;
		    proxy_http_version 1.1;
		    proxy_set_header Upgrade $http_upgrade;
		    proxy_set_header Connection $connection_upgrade;
		}
	location /favicon.ico {
		    #proxy_redirect off;
		    proxy_pass http://app_shell;
		    proxy_http_version 1.1;
		    proxy_set_header Upgrade $http_upgrade;
		    proxy_set_header Connection $connection_upgrade;
		}
	location /js {
                  #proxy_redirect off;
                  proxy_pass http://app_shell;
                  proxy_http_version 1.1;
                  proxy_set_header Upgrade $http_upgrade;
                  proxy_set_header Connection $connection_upgrade;
                }
Make favicon Configurable
Consumer can update the favicon of Appshell using below steps:

Appshell Deployment.yaml should have below favicon mouting code (contact devops if missing)
          volumeMounts:
            - mountPath: /etc/ssl/certs/ca-bundle.crt
              subPath: ca-bundle.crt
              name: ca-bundle
              readOnly: false
            - mountPath: /app-shell/client/build/favicon.ico
              subPath: favicon.ico
              name: icon-files
      imagePullSecrets:
       - name: cde-reg-credentials
      volumes:
        - configMap:
            name: ca-bundle
          name: ca-bundle
        - emptyDir: {}
          name: icon-files
      initContainers:
        - args:
            - '-c'
            - |
              echo "Copying icon files..."
              cp -R /icon/* /files
          command:
            - sh
          image: ghcr.io/bh-ent-tech/app-shell-icon:4
          imagePullPolicy: Always
          name: icon-provider
          volumeMounts:
            - mountPath: /files
              name: icon-files
Consumer should update Icon image in image key under initContainers in appshell deployment.yaml. Icon Image will provided by appshell.
Add links to an icon on the navigation bar
          {
           "type": "link",
           "location": "https://www.example.com",
           "mode": "TAB",
           "tooltipText": "Help",
           "icon": "help_outlined"
         }
Feedback
App Shell lets it consumers provide feedback on any page/app loaded inside the shell. On logging in, you will view the feedback icon. Using this feedback, you can provide either of the following two types of feedback:

Specific Feedback: Specific feedback lets you take the screenshot of the screen, use the screenshot to either suggest a new feature, report a bug, or provide any other suggestion. You can specify details in the comment section.
General Feedback: With General feedback, you can provide any feedback in the comment section.
We need to add headerMenuConfig and serviceHub objects in configmap.yaml:

   "headerMenuConfig": [
        {
          "id": "feedback",
          "type":"popup",
          "tooltipText":"Feedback",
          "toolTipTextId":"Feedback",
          "icon": "rate_review",
          "order":"4",
          "config":{
            "serviceId":"feedback",
            "type":"feedback"
           }
        }
   ]
  "serviceHub": [
          {
           "id":"feedback",
           "hostName":"https://appshell-dev.np-0000177.npause1.bakerhughes.com/appshell-service-cms",
           "ClientProxyName":"feedback-proxy"
          }
      ]
Detailed documentation is available here

Notification
App Shell lets it consumers view notifications for any new updates or additions to applications within App Shell.

On Login, you will be able to view the Notification icon configured on the header menu.
On clicking that icon, you can see a list with latest 5 notifications.
If you want to view any specific notification, click the required one and and it will appear in a new tab in a PDF format. You can also choose to download the PDF.
On clicking any notification, the count of unread notifications will decrease.
On a click of the View All button, at the bottom of Notifications popup, you will be redirected to the microApp that displays a list of all the notifications.
We need to add headerMenuConfig and serviceHub objects in configmap.yaml for enabling notification:

  "headerMenuConfig": [
        {
        "id": "notifications",
        "type":"popup",
        "tooltipText":"Notifications",
        "toolTipTextId":"Notifications",
        "icon": "notifications_none",
        "order":"2",
        "config":{
            "serviceId":"notifications",
            "type":"notifications",
            "navigationObject": {
               "mode": "spa",
               "appName": "eventApp"
            }
          }
        }
    ]
  "serviceHub": [
        {
        "id":"notificationId",
        "hostName":"http://svc-valves-notification-management.valves:80",
        "ClientProxyName":"notification-proxy"
        }
    ]
Detailed documentation is available here

Notification Hub Front end
App Shell provides the capability to display in-app notifications on click of the bell icon (in the header menu), and a wide range of customizations for these notifications .
The bell icon displays the number of unread notifications.
When that icon is clicked , a notification hub appears that houses those unread notifications.
These notifications can be system-generated as well as user-generated
  "headerMenuConfig": [
        {
        "id": "notifications",
        "type":"popup",
        "tooltipText":"Notifications",
        "toolTipTextId":"Notifications",
        "icon": "notifications_none",
        "order":"2",
        "config":{
          "metaConfig": "advanceNotificationMeta",
          "serviceId": "advanceNotification",
          "type": "notifications"
        }
      }
    ]
 "advanceNotificationMeta": {
      "isCustomNotificationService": false,
      "isCustomNotificationComponent": false,
      "notificationPageSize": 10,
      "pollNotificationTimeInterval": 60000,
      "filter": {
        "filterCriteria": "priority",
        "filterOptions": [
          {
            "value": "all",
            "label": "All"
          },
          {
            "value": "low",
            "label": "Low"
          },
          {
            "value": "high",
            "label": "High"
          },
          {
            "value": "medium",
            "label": "Medium"
          }
        ]
      },
      "fileDownload": {
        "fileUrlAttribute": "documentUrl"
      },
      "tabMenu": true,
      "softDelete": true,
      "showMarkAllRead": true,
      "displayNotificationDesc": true,
      "commonRedirectMicroapp": {
        "navigationObject": {
          "mode": "spa",
          "appName": "eventApp"
        }
      },
      "viewAll": {
        "navigationObject": {
          "mode": "overlay",
          "appName": "notificationApp"
        }
      },
      "settings": {
        "navigationObject": {
          "mode": "spa",
          "appName": "notificationApp"
        }
      },
      "icons": {
        "primaryIconOptions":[
          {
              "type": "system",
              "subType": "alert",
              "iconName": "notification_important",
              "color": "--color-fill-semantic-warning-default",
              "priority":"warning"
          },
          {
              "type": "system",
              "subType": "info",
              "iconName": "info",
              "color": "--color-fill-semantic-warning-default",
              "priority":"warning"
          },
          {
              "type": "system",
              "subType": "messages",
              "iconName": "mail",
              "color": "--color-fill-semantic-warning-default",
              "priority":"warning"
          },
          {
              "type": "system",
              "subType": "success",
              "iconName": "check_circle",
              "color": "--color-fill-semantic-success-default",
              "priority":"default"
          },
          {
              "type": "system",
              "subType": "alert",
              "iconUrl": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/appshell-static-webserver/getImage/Monitor.svg",
              "color": "#77ee00",
              "priority":"low"
          }
        ],
        "secondaryIconOptions": [
          {
              "type": "user",
              "subType": "alert",
              "iconName": "notification_important",
              "color": "--color-fill-semantic-warning-default",
              "priority":"warning"
          },
          {
              "type": "user",
              "subType": "info",
              "iconName": "info",
              "color": "--color-fill-semantic-warning-default",
              "priority":"warning"
          },
          {
              "type": "user",
              "subType": "messages",
              "iconName": "mail",
              "color": "--color-fill-semantic-warning-default",
              "priority":"warning"
          },
          {
              "type": "user",
              "subType": "success",
              "iconName": "check_circle",
              "color": "--color-fill-semantic-success-default",
              "priority":"default"
          },
          {
              "type": "user",
              "subType": "alert",
              "iconUrl": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/appshell-static-webserver/getImage/Monitor.svg",
              "color": "#77ee00",
              "priority":"low"
          }
        ]
      }
    }
  "serviceHub": [
        {
        "id": "advanceNotification",
        "hostName": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/notification-service",
        "ClientProxyName": "advanceNotification-proxy"
      }
    ]
Detailed documentation is available here

BH-Toolkit-Update-Process
We are consuming Bh-Toolkit package from BH-DigitalSolutions repo. It is recommended to consume the customized packages from bh-ent-tech repo.
We have created one jenkins job to update the ui-toolkit and ui-toolkit-react from BH-DigitalSolutions repo to bh-ent-tech repo.
We need to update ui-toolkit packages separately and ui-toolkit-react package separately.
Make sure versions of these two packages should match the versions available in BH-DigitalSolutions repo.
BH-DigitalSolutions Repo Link(https://github.com/orgs/BH-DigitalSolutions/packages?repo_name=bh-ui-toolkit)
bh-ent-tech Repo link(https://github.com/orgs/bh-ent-tech/packages?tab=packages&q=toolkit)
Job link(https://jenkinsops.prd-0000108.pause1.bakerhughes.com/job/MTC_Jobs/job/SPARQ/job/App_Shell/job/CI/job/UI-TOOLKIT-PACKAGE/)
Detailed documentation and steps is available here
Obfuscation
JavaScript code obfuscation is a series of code transformations that encrypts your exposed code and makes it extremely hard to understand and reverse-engineer.
Programming code is often obfuscated to protect intellectual property or trade secrets, and to prevent an attacker from reverse engineering a proprietary software program.
Encrypting some or all of a program's code is one obfuscation method.
To encrypt the code, add the following script in package.json for Client side obfuscation & Server side obfuscation:

"scripts": {
"create-config": "node create-config.js",
"defend": "jsdefender -c jsdefender.config.json --license 283CD738ECFA4C4FBB00BC3D3C70BFC2",
"obfuscate": "jsdefender --license 283CD738ECFA4C4FBB00BC3D3C70BFC2",
"replace-obfuscated-files": "node move-obfuscated-files.js",
"create-config-server": "node create-config-server.js",
"replace-obfuscated-files-server": "node move-obfuscated-files-server.js"
}
headerMenuConfig
headerMenuConfig object is used to display icons on the header menu.
These Icons will display according to order given in object("order":"1").
To display icons, add headerMenuConfig array of objects in configmap.yaml:

 "headerMenuConfig": [
      {
          "id": "feedback",
          "type":"popup",
          "tooltipText":"Feedback",
          "toolTipTextId":"Feedback",
          "icon": "rate_review",
          "order":"2",
          "config":{
            "serviceId":"feedback",
            "type":"feedback"
           }
        },
        {
          "id": "help",
          "type":"link",
          "tooltipText":"Help",
          "toolTipTextId":"Help",
          "icon": "help_outlined",
          "order":"1",
          "config":{
            "serviceId":"help",
            "mode": "TAB",
            "location": "https://aerion-dev.cde.fullstream.ai/http-serve/help?selectedLaunguage={language}"
          }
        }
 ]
Custom text without i18
Update language-files in https://github.com/bh-ent-tech/cde_kubernetes_deployment/tree/master/App-Shell-DEV/App-shell
Run https://jenkins.dsa.apps.ge.com/job/MTC_Jobs/job/CDE/job/CDE_DEV/job/Langauge-files-DockerImage/ to create a new image
Update https://github.com/bh-ent-tech/cde_kubernetes_deployment/blob/master/App-Shell-DEV/App-shell/deployment.yaml with a new version of lang files image
Deploy App shell CD job.
Global Search
A search widget has been integrated on App Shell home page that helps you search any required application. The search widget then launches the microapp either by entering the app name. This is an extension to the existing Search feature and it includes additional configuration to:

support auto type ahead, that is, it provides a list of suggestions when typing in the search bar, and
load the required microapp on clicking any of the suggestions provided in the list To enable this feature, following object must be added in configmap.yaml:
"searchConfig": {
      "id": "search",
      "component": "GlobalSearch",
      "props": {
	"searchEnabled": true,
        "placeholder": "Search",
        "isDropdown": true,
        "dropdownData": ["All","Orders","Plots"],
        "defaultDropdownValue": "All",
        "inputActiveWidth": "367px",
        "inputInActiveWidth": "367px",
        "dropdownWidth": "105px"
      },
      "navigationObject": {
        "mode": "spa",
        "appName": "eventApp"
      }
    }
"searchConfig": {
      "id": "search",
      "component": "GlobalSearch",
      "props": {
	"searchEnabled": true,
	"enableTypeAhead": true,
        "placeholder": "Search",
        "isSmall": true,
        "inputInActiveWidth": "280px",
        "inputActiveWidth": "336px",
        "inputActiveTextColor": "rgba(18, 18, 18, 1)",
        "inputInActiveTextColor": "rgba(255, 255, 255, 0.6)",
        "inputActiveIconColor": "rgba(18, 18, 18, 1)",
        "inputInActiveIconColor": "rgba(255, 255, 255, 0.6)",
        "inputActiveBgColor": "white",
        "inputInActiveBgColor": "#014D40",
	"inputActiveBorderColor": "transparent",
	"inputInActiveBorderColor" : "transparent",
        "searchIcon":"ghost",
	"onFocusSearchIcon": "primary",
	"isCustomizableSearch":true,
	"typeAheadSeparatorChar": "|",
        "searchBeginsAfterChars": 3,
        "numberOfResultsInAutoComplete": 8,
        "characterLimitForSearchBox": 50,
	"searchMicroApp": "eventApp",
	"isDropdown": true,
	"dropdownData": ["All", "valves", "timeseries", "assets", "documents"],
	"searchConfig": [
          {
            "indexName": "valves",
            "displayFields": ["valvesName", "valvesDescription"],
            "navigationMicroApp": "valves-app"
          },{
            "indexName": "assets",
            "searchFields": ["assetName", "assetDescription"],
            "displayFields": ["assetName", "assetDescription"],
            "navigationMicroApp": "none"
          }
	]
      },
      "navigationObject": {
        "mode": "spa",
        "appName": "eventApp"
      }
    }
Custom SVG support for microApp Icons
Custom .svg icon support is available for microApp Icons by using key svgIcon.

Step to be followed:
Consumer should provide value to "iconSvg" key present in microappServices object, where value is "path d" of SVG icon.
SVG icon://verify
<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13V11ZM7.1875 12V13C7.60291 13 7.97507 12.7432 8.12245 12.3548L7.1875 12ZM9.84375 5L10.7901 4.67681C10.6538 4.27787 10.282 4.00722 9.86054 4.00014C9.43904 3.99306 9.05836 4.25108 8.9088 4.64522L9.84375 5ZM14.625 19L13.6787 19.3232C13.8163 19.7263 14.1942 19.9979 14.6202 20C15.0461 20.0021 15.4266 19.7341 15.5682 19.3323L14.625 19ZM17.2812 11.4615V10.4615C16.8571 10.4615 16.4791 10.7291 16.3381 11.1292L17.2812 11.4615ZM21 12.4615C21.5523 12.4615 22 12.0138 22 11.4615C22 10.9093 21.5523 10.4615 21 10.4615V12.4615ZM4 13H7.1875V11H4V13ZM8.12245 12.3548L10.7787 5.35478L8.9088 4.64522L6.25255 11.6452L8.12245 12.3548ZM8.89742 5.32319L13.6787 19.3232L15.5713 18.6768L10.7901 4.67681L8.89742 5.32319ZM15.5682 19.3323L18.2244 11.7939L16.3381 11.1292L13.6818 18.6677L15.5682 19.3323ZM17.2812 12.4615H21V10.4615H17.2812V12.4615Z"
    fill="white"
  />
</svg>
Microapp object:
{
          "id": "dashboard",
          "name": "Status",
          "link": "/status/",
          "iconSvg": "M4 11C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13V11ZM7.1875 12V13C7.60291 13 7.97507 12.7432 8.12245 12.3548L7.1875 12ZM9.84375 5L10.7901 4.67681C10.6538 4.27787 10.282 4.00722 9.86054 4.00014C9.43904 3.99306 9.05836 4.25108 8.9088 4.64522L9.84375 5ZM14.625 19L13.6787 19.3232C13.8163 19.7263 14.1942 19.9979 14.6202 20C15.0461 20.0021 15.4266 19.7341 15.5682 19.3323L14.625 19ZM17.2812 11.4615V10.4615C16.8571 10.4615 16.4791 10.7291 16.3381 11.1292L17.2812 11.4615ZM21 12.4615C21.5523 12.4615 22 12.0138 22 11.4615C22 10.9093 21.5523 10.4615 21 10.4615V12.4615ZM4 13H7.1875V11H4V13ZM8.12245 12.3548L10.7787 5.35478L8.9088 4.64522L6.25255 11.6452L8.12245 12.3548ZM8.89742 5.32319L13.6787 19.3232L15.5713 18.6768L10.7901 4.67681L8.89742 5.32319ZM15.5682 19.3323L18.2244 11.7939L16.3381 11.1292L13.6818 18.6677L15.5682 19.3323ZM17.2812 12.4615H21V10.4615H17.2812V12.4615Z",
          "host": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/appshell-sample-app",
          "path": "/status",
          "template": "/index.html",
          "default": true,
          "feedbackFlag": false,
          "visibility":true
        }
Note :
Appshell supports only single path d value.
Icon will be of 24x24 pixel.
SVG icon must be validated.
BHDS 2 Drawer with Parent Child
The user can create Parent Child Left Drawer.

Single Parent have multiple childs.
We need to add menuItems and microappServices objects in configmap.yaml:

   "menuItems":[
          {
            "id":"demo",
            "name":"Demo",
            "icon":"speedrounded",
            "default":"statusApp"
          }
       ],
    "microappServices": [
          {
            "id": "statusApp",
            "name": "Status",
            "link": "/status-app/",
            "icon": "archiverounded",
            "host": "https://aerion-dev.cde.fullstream.ai/appshell-sample-app",
            "path": "/status-app",
            "template": "/index.html",
            "default": false,
            "visibility": false,
            "menuItemId": "demo"
          },
          {
            "id": "userManagementAdminConsole",
            "name": "User Management Admin Console",
            "link": "/usermanagement-adminconsole/",
            "icon": "archiverounded",
            "host": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/event-sample-app/",
            "path": "/usermanagement-adminconsole",
            "template": "/index.html",
            "default": false,
            "feedbackFlag": false,
            "visibility": false,
            "menuItemId": "demo"
          }]
Hide the menuItem child menu
App Shell allows you to hide and show the menuItem children.

The parent app can hide and show the child app in the left drawer.
MenuItem can hide and show the child app from the MenuItem dropdown.
Tooltip of MenuItem represent menuItems object name eg("name":"Cases").
To achieve this, add "visibility": false/true in the microappServices object in configmap.yaml: "visibility": true - child visible. "visibility": false - child not visible.

   "menuItems":[
          {
            "id":"cases",
            "name":"Cases",
            "icon":"speedrounded",
            "default":"eventApp"
          }
       ],
    "microappServices": [
          {
          "id": "eventApp",
          "name": "Event",
          "link": "/event-app/",
          "icon": "archiverounded",
          "host": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/event-sample-app/",
          "path": "/event-app",
          "template": "/index.html",
          "default": false,
          "feedbackFlag": false,
          "visibility": true,
          "menuItemId": "cases"
        },
        {
          "id": "userprofileapp",
          "name": "User Profile",
          "link": "/user-profile/",
          "icon": "dashboard",
          "cssClass":"material-icons-outlined",
          "host": "https://appshell-dev.np-0000177.npause1.bakerhughes.com/appshell-sample-app/",
          "path": "/user-profile",
          "template": "/micro-app.html",
          "default": false,
          "visibility": true,
          "menuItemId": "cases"
        }]
Refresh Window Token
App Shell allows you to configure the time interval, as required, to refresh the token. To do so, a property named “refreshWindow” is used in configmap.yaml. The value of the refreshWindow property is the time interval (in seconds) after which the token will be refreshed.The refreshWindow value should be less than the Access Token Lifespan of Keycloak

refreshWindow: 60;
Support for customer configurable Theme
1)Dark/Light theme can be configured through the userInfoDialogMap of config.yaml. If the user is not providing this theme config in configmap.yaml then by default it will take light theme.

userInfoDialogMap: [
  {
    type: 'group',
    mode: 'spa',
    name: 'Theme',
    id: 'theme', //Should be same id and value for theme implementations
    icon: 'tune',
    subMenu: [
      {
        name: 'darkTheme', //Can be i18 key or name to be displayed
        theme: 'dark', // Theme value should be match as per Bh 2.0 theme
        default: true,
      },
      {
        name: 'lightTheme', //Can be i18 key or name to be displayed
        theme: 'light', // Theme value should be match as per Bh 2.0 theme
        default: false,
      },
    ],
  },
];
2)Header show menu icon can be configured as part of this feature. It can be disabled through config.yaml

showHeaderMenuIcon: false;
Multi Tenancy
App Shell can connect to different Realms created per Tenant in KeyCloak.

Add config-default.yaml which contains name of common client of the tenants
https://github.com/bh-ent-tech/sparq-appshell-argocd/blob/uat/config/configmap-default.yaml
Add config-tenant.yaml which contains name of common client of the tenants
https://github.com/bh-ent-tech/sparq-appshell-argocd/blob/uat/config/configmap-tenant.yaml
Update below keys in configmap.yaml
"multiTenancy":true
If a single tenant is configured in configmap-tenant.yaml and you want to skip the prelogin page, set the 'showPreloginPageForSingleTenant' key to boolean false in configmap.yaml.
Detailed documentation is available here

Overlay window width configuration
App Shell now let you configure the width of the overlay window by using the property “overlayWidth”. It can be specified either in pixel(px) or percentage(%).

Integrated authentication for internationalization service
App Shell now sends a token to authenticate the Internationalization services. This is available from the Q1 2023 build onwards.

Stacked Toast Messages
App Shell provides support to display toast messages in a stacked manner. You can tweak the configuration code to customize up to three toast messages. For more information, refer to the Stacked Toast Messages document.

Support for AppShell Reload Listener
App Shell allows microapps to reload App Shell by firing an event called APPSHELL_RELOAD. App Shell listens to this event and gets auto refreshed.

Documentation
