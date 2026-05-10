Started by user simon
Obtained Jenkinsfile from git 
https://github.com/MonacoSimon/qa-repository-juice-shop.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/pipeline-juice-shop
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
No credentials specified
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/pipeline-juice-shop/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://github.com/MonacoSimon/qa-repository-juice-shop.git # timeout=10
Fetching upstream changes from https://github.com/MonacoSimon/qa-repository-juice-shop.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
 > git fetch --tags --force --progress -- https://github.com/MonacoSimon/qa-repository-juice-shop.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
Checking out Revision 29b6196f35f1a7a97377c62f82f1984c5856aead (refs/remotes/origin/main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 29b6196f35f1a7a97377c62f82f1984c5856aead # timeout=10
Commit message: "jenkins file"
 > git rev-list --no-walk b328c58f1829ac9df4a5a196efcdbbee818e45b1 # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Clean up previous containers)
[Pipeline] sh
+ docker-compose down --remove-orphans
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Levantar Juice Shop)
[Pipeline] sh
+ docker-compose up -d juice-shop
 Network pipeline-juice-shop_default Creating 
 Network pipeline-juice-shop_default Created 
 Container juice-shop Creating 
 Container juice-shop Created 
 Container juice-shop Starting 
 Container juice-shop Started 
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Ejecutar pruebas)
[Pipeline] parallel
[Pipeline] { (Branch: Cypress)
[Pipeline] { (Branch: API)
[Pipeline] { (Branch: JMeter)
[Pipeline] { (Branch: ZAP)
[Pipeline] stage
[Pipeline] { (Cypress)
[Pipeline] stage
[Pipeline] { (API)
[Pipeline] stage
[Pipeline] { (JMeter)
[Pipeline] stage
[Pipeline] { (ZAP)
[Pipeline] sh
[Pipeline] sh
[Pipeline] sh
[Pipeline] sh
+ docker-compose up cypress-tests
 Container juice-shop Running 
 Container pipeline-juice-shop-cypress-tests-1 Creating 
 Container pipeline-juice-shop-cypress-tests-1 Created 
Attaching to cypress-tests-1
 Container pipeline-juice-shop-cypress-tests-1 Starting 
 Container pipeline-juice-shop-cypress-tests-1 Started 
+ docker-compose up api-tests
 Container juice-shop Running 
 Container pipeline-juice-shop-api-tests-1 Creating 
 Container pipeline-juice-shop-api-tests-1 Created 
Attaching to api-tests-1
 Container pipeline-juice-shop-api-tests-1 Starting 
 Container pipeline-juice-shop-api-tests-1 Started 
api-tests-1  | fetch https://dl-cdn.alpinelinux.org/alpine/v3.18/main/x86_64/APKINDEX.tar.gz
+ docker-compose up jmeter-tests
 Container juice-shop Running 
 Container pipeline-juice-shop-jmeter-tests-1 Creating 
 Container pipeline-juice-shop-jmeter-tests-1 Created 
Attaching to jmeter-tests-1
 Container pipeline-juice-shop-jmeter-tests-1 Starting 
jmeter-tests-1  | Ejecutando: *
 Container pipeline-juice-shop-jmeter-tests-1 Started 
+ docker-compose up zap-tests
 Container juice-shop Running 
 Container pipeline-juice-shop-zap-tests-1 Creating 
 Container pipeline-juice-shop-zap-tests-1 Created 
Attaching to zap-tests-1
 Container pipeline-juice-shop-zap-tests-1 Starting 
 Container pipeline-juice-shop-zap-tests-1 Started 
cypress-tests-1  | ❯  Verifying Cypress can run /root/.cache/Cypress/15.14.2/Cypress
api-tests-1  | fetch https://dl-cdn.alpinelinux.org/alpine/v3.18/community/x86_64/APKINDEX.tar.gz
jmeter-tests-1  | May 10, 2026 12:35:28 AM java.util.prefs.FileSystemPreferences$1 run
jmeter-tests-1  | INFO: Created user preferences directory.
jmeter-tests-1  | An error occurred: The file /jmeter/test-plan/*.jmx doesn't exist or can't be opened
api-tests-1  | (1/8) Installing ca-certificates (20241121-r1)
api-tests-1  | (2/8) Installing brotli-libs (1.0.9-r14)
api-tests-1  | (3/8) Installing libunistring (1.1-r1)
api-tests-1  | (4/8) Installing libidn2 (2.3.4-r1)
api-tests-1  | (5/8) Installing nghttp2-libs (1.57.0-r0)
api-tests-1  | (6/8) Installing libpsl (0.21.5-r0)
api-tests-1  | (7/8) Installing libcurl (8.12.1-r0)
api-tests-1  | (8/8) Installing curl (8.12.1-r0)
api-tests-1  | Executing busybox-1.36.1-r2.trigger
api-tests-1  | Executing ca-certificates-20241121-r1.trigger
jmeter-tests-1  | ✔ Terminado: *
jmeter-tests-1  | -----------------------------

␛[Kjmeter-tests-1 exited with code 0
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
api-tests-1  | OK: 14 MiB in 25 packages
api-tests-1  |   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
api-tests-1  |                                  Dload  Upload   Total   Spent    Left  Speed
api-tests-1  | 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
api-tests-1  | curl: (56) Recv failure: Connection reset by peer
api-tests-1  | Esperando juice-shop...
cypress-tests-1  | ✔  Verified Cypress!       /root/.cache/Cypress/15.14.2/Cypress
cypress-tests-1  | ␛[31mCould not find a Cypress configuration file in this folder: ␛[94m/e2e␛[39m␛[31m␛[39m

␛[Kcypress-tests-1 exited with code 1
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
api-tests-1  |   % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
api-tests-1  |                                  Dload  Upload   Total   Spent    Left  Speed
api-tests-1  | <!--
api-tests-1  |   ~ Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
api-tests-1  |   ~ SPDX-License-Identifier: MIT
api-tests-1  |   -->
api-tests-1  | 
api-tests-1  | <!doctype html>
api-tests-1  | <html lang="en" data-beasties-container>
api-tests-1  | <head>
api-tests-1  |   <meta charset="utf-8">
api-tests-1  |   <title>OWASP Juice Shop</title>
api-tests-1  |   <meta name="description" content="Probably the most modern and sophisticated insecure web application">
api-tests-1  |   <meta name="viewport" content="width=device-width, initial-scale=1">
api-tests-1  |   <link id="favicon" rel="icon" type="image/x-icon" href="assets/public/favicon_js.ico">
api-tests-1  |   <script>
api-tests-1  |     window.addEventListener("load", function(){
api-tests-1  |       window.cookieconsent.initialise({
api-tests-1  |         "palette": {
api-tests-1  |           "popup": { "background": "var(--theme-primary)", "text": "var(--theme-text)" },
api-tests-1  |           "button": { "background": "var(--theme-accent)", "text": "var(--theme-text)" }
api-tests-1  |         },
api-tests-1  |         "theme": "classic",
api-tests-1  |         "position": "bottom-right",
api-tests-1  |         "content": { "message": "This website uses fruit cookies to ensure you get the juiciest tracking experience.", "dismiss": "Me want it!", "link": "But me wait!", "href": "https://www.youtube.com/watch?v=9PnbKL3wuH4" }
api-tests-1  |       })});
api-tests-1  |   </script>
api-tests-1  | <style>html{--mat-sys-on-surface:initial}.mat-app-background{background-color:var(--mat-app-background-color, head>
api-tests-1  | <body class="mat-app-background mat-typography bluegrey-lightgreen-theme">
api-tests-1  |   <app-root></app-root>
api-tests-1  | <link rel="modulepreload" href="chunk-24EZLZ4I.js"><link rel="modulepreload" href="chunk-T3PSKZ45.js"><link rel="modulepreload" href="chunk-4MIYPPGW.js"><link rel="modulepreload" href="chunk-LHKS7QUN.js"><link rel="modulepreload" href="chunk-TWZW5B45.js"><script src="polyfills.js" type="module"></script><script src="scripts.js" defer></script><script src="main.js" type="module"></script></body>
api-tests-1  | </html>
api-tests-1  | 
  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0
100 75002  100 75002    0     0  4727k      0 --:--:-- --:--:-- --:--:-- 4882k
api-tests-1  | cp: can't stat '/etc/newman/enviroment/juice shop enviroment.postman_environment.json': No such file or directory

␛[Kapi-tests-1 exited with code 1
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
zap-tests-1  | Using the Automation Framework
zap-tests-1  | Total of 123 URLs
zap-tests-1  | PASS: Vulnerable JS Library (Powered by Retire.js) [10003]
zap-tests-1  | PASS: In Page Banner Information Leak [10009]
zap-tests-1  | PASS: Cookie No HttpOnly Flag [10010]
zap-tests-1  | PASS: Cookie Without Secure Flag [10011]
zap-tests-1  | PASS: Re-examine Cache-control Directives [10015]
zap-tests-1  | PASS: Cross-Domain JavaScript Source File Inclusion [10017]
zap-tests-1  | PASS: Content-Type Header Missing [10019]
zap-tests-1  | PASS: Anti-clickjacking Header [10020]
zap-tests-1  | PASS: X-Content-Type-Options Header Missing [10021]
zap-tests-1  | PASS: Information Disclosure - Debug Error Messages [10023]
zap-tests-1  | PASS: Information Disclosure - Sensitive Information in URL [10024]
zap-tests-1  | PASS: Information Disclosure - Sensitive Information in HTTP Referrer Header [10025]
zap-tests-1  | PASS: HTTP Parameter Override [10026]
zap-tests-1  | PASS: Information Disclosure - Suspicious Comments [10027]
zap-tests-1  | PASS: Off-site Redirect [10028]
zap-tests-1  | PASS: Cookie Poisoning [10029]
zap-tests-1  | PASS: User Controllable Charset [10030]
zap-tests-1  | PASS: User Controllable HTML Element Attribute (Potential XSS) [10031]
zap-tests-1  | PASS: Viewstate [10032]
zap-tests-1  | PASS: Directory Browsing [10033]
zap-tests-1  | PASS: Heartbleed OpenSSL Vulnerability (Indicative) [10034]
zap-tests-1  | PASS: Strict-Transport-Security Header [10035]
zap-tests-1  | PASS: HTTP Server Response Header [10036]
zap-tests-1  | PASS: Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) [10037]
zap-tests-1  | PASS: X-Backend-Server Header Information Leak [10039]
zap-tests-1  | PASS: Secure Pages Include Mixed Content [10040]
zap-tests-1  | PASS: HTTP to HTTPS Insecure Transition in Form Post [10041]
zap-tests-1  | PASS: HTTPS to HTTP Insecure Transition in Form Post [10042]
zap-tests-1  | PASS: User Controllable JavaScript Event (XSS) [10043]
zap-tests-1  | PASS: Big Redirect Detected (Potential Sensitive Information Leak) [10044]
zap-tests-1  | PASS: Retrieved from Cache [10050]
zap-tests-1  | PASS: X-ChromeLogger-Data (XCOLD) Header Information Leak [10052]
zap-tests-1  | PASS: Cookie without SameSite Attribute [10054]
zap-tests-1  | PASS: CSP [10055]
zap-tests-1  | PASS: X-Debug-Token Information Leak [10056]
zap-tests-1  | PASS: Username Hash Found [10057]
zap-tests-1  | PASS: X-AspNet-Version Response Header [10061]
zap-tests-1  | PASS: PII Disclosure [10062]
zap-tests-1  | PASS: Hash Disclosure [10097]
zap-tests-1  | PASS: Source Code Disclosure [10099]
zap-tests-1  | PASS: Weak Authentication Method [10105]
zap-tests-1  | PASS: Reverse Tabnabbing [10108]
zap-tests-1  | PASS: Authentication Request Identified [10111]
zap-tests-1  | PASS: Session Management Response Identified [10112]
zap-tests-1  | PASS: Verification Request Identified [10113]
zap-tests-1  | PASS: Script Served From Malicious Domain (polyfill) [10115]
zap-tests-1  | PASS: ZAP is Out of Date [10116]
zap-tests-1  | PASS: Absence of Anti-CSRF Tokens [10202]
zap-tests-1  | PASS: Private IP Disclosure [2]
zap-tests-1  | PASS: Session ID in URL Rewrite [3]
zap-tests-1  | PASS: Script Passive Scan Rules [50001]
zap-tests-1  | PASS: Stats Passive Scan Rule [50003]
zap-tests-1  | PASS: Insecure JSF ViewState [90001]
zap-tests-1  | PASS: Java Serialization Object [90002]
zap-tests-1  | PASS: Sub Resource Integrity Attribute Missing [90003]
zap-tests-1  | PASS: Charset Mismatch [90011]
zap-tests-1  | PASS: Application Error Disclosure [90022]
zap-tests-1  | PASS: WSDL File Detection [90030]
zap-tests-1  | PASS: Loosely Scoped Cookie [90033]
zap-tests-1  | WARN-NEW: Content Security Policy (CSP) Header Not Set [10038] x 5 
zap-tests-1  | 	http://localhost:3000/ (200 OK)
zap-tests-1  | 	http://localhost:3000/ftp (200 OK)
zap-tests-1  | 	http://localhost:3000/ftp/encrypt.pyc (403 Forbidden)
zap-tests-1  | 	http://localhost:3000/ftp/suspicious_errors.yml (403 Forbidden)
zap-tests-1  | 	http://localhost:3000/sitemap.xml (200 OK)
zap-tests-1  | WARN-NEW: Storable and Cacheable Content [10049] x 6 
zap-tests-1  | 	http://localhost:3000/robots.txt (200 OK)
zap-tests-1  | 	http://localhost:3000/assets/public/favicon_js.ico (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-24EZLZ4I.js (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-T3PSKZ45.js (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-TWZW5B45.js (200 OK)
zap-tests-1  | WARN-NEW: Deprecated Feature Policy Header Set [10063] x 5 
zap-tests-1  | 	http://localhost:3000/chunk-24EZLZ4I.js (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-T3PSKZ45.js (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-TWZW5B45.js (200 OK)
zap-tests-1  | 	http://localhost:3000/polyfills.js (200 OK)
zap-tests-1  | 	http://localhost:3000/sitemap.xml (200 OK)
zap-tests-1  | WARN-NEW: Timestamp Disclosure - Unix [10096] x 5 
zap-tests-1  | 	http://localhost:3000/styles.css (200 OK)
zap-tests-1  | 	http://localhost:3000/styles.css (200 OK)
zap-tests-1  | 	http://localhost:3000/styles.css (200 OK)
zap-tests-1  | 	http://localhost:3000/styles.css (200 OK)
zap-tests-1  | 	http://localhost:3000/styles.css (200 OK)
zap-tests-1  | WARN-NEW: Cross-Domain Misconfiguration [10098] x 4 
zap-tests-1  | 	http://localhost:3000/assets/public/favicon_js.ico (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-24EZLZ4I.js (200 OK)
zap-tests-1  | 	http://localhost:3000/chunk-TWZW5B45.js (200 OK)
zap-tests-1  | 	http://localhost:3000/styles.css (200 OK)
zap-tests-1  | WARN-NEW: Modern Web Application [10109] x 5 
zap-tests-1  | 	http://localhost:3000/ (200 OK)
zap-tests-1  | 	http://localhost:3000/juice-shop/build/routes/styles.css (200 OK)
zap-tests-1  | 	http://localhost:3000/juice-shop/node_modules/express/lib/router/index.js:286:9 (200 OK)
zap-tests-1  | 	http://localhost:3000/juice-shop/node_modules/serve-index/index.js:149:39 (200 OK)
zap-tests-1  | 	http://localhost:3000/sitemap.xml (200 OK)
zap-tests-1  | WARN-NEW: Dangerous JS Functions [10110] x 2 
zap-tests-1  | 	http://localhost:3000/chunk-LHKS7QUN.js (200 OK)
zap-tests-1  | 	http://localhost:3000/main.js (200 OK)
zap-tests-1  | WARN-NEW: Cross-Origin-Embedder-Policy Header Missing or Invalid [90004] x 8 
zap-tests-1  | 	http://localhost:3000/ (200 OK)
zap-tests-1  | 	http://localhost:3000/ftp (200 OK)
zap-tests-1  | 	http://localhost:3000/juice-shop/build/routes/styles.css (200 OK)
zap-tests-1  | 	http://localhost:3000/sitemap.xml (200 OK)
zap-tests-1  | 	http://localhost:3000/ (200 OK)
zap-tests-1  | FAIL-NEW: 0	FAIL-INPROG: 0	WARN-NEW: 8	WARN-INPROG: 0	INFO: 0	IGNORE: 0	PASS: 59

␛[Kzap-tests-1 exited with code 0
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // parallel
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Declarative: Post Actions)
[Pipeline] sh
+ docker-compose down --remove-orphans
 Container pipeline-juice-shop-jmeter-tests-1 Stopping 
 Container pipeline-juice-shop-cypress-tests-1 Stopping 
 Container pipeline-juice-shop-zap-tests-1 Stopping 
 Container pipeline-juice-shop-api-tests-1 Stopping 
 Container pipeline-juice-shop-jmeter-tests-1 Stopped 
 Container pipeline-juice-shop-jmeter-tests-1 Removing 
 Container pipeline-juice-shop-zap-tests-1 Stopped 
 Container pipeline-juice-shop-zap-tests-1 Removing 
 Container pipeline-juice-shop-api-tests-1 Stopped 
 Container pipeline-juice-shop-cypress-tests-1 Stopped 
 Container pipeline-juice-shop-cypress-tests-1 Removing 
 Container pipeline-juice-shop-api-tests-1 Removing 
 Container pipeline-juice-shop-cypress-tests-1 Removed 
 Container pipeline-juice-shop-jmeter-tests-1 Removed 
 Container pipeline-juice-shop-api-tests-1 Removed 
 Container pipeline-juice-shop-zap-tests-1 Removed 
 Container juice-shop Stopping 
 Container juice-shop Stopped 
 Container juice-shop Removing 
 Container juice-shop Removed 
 Network pipeline-juice-shop_default Removing 
 Network pipeline-juice-shop_default Removed 
[Pipeline] archiveArtifacts
Archiving artifacts
[Pipeline] junit
Recording test results
[Checks API] No suitable checks publisher found.
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
