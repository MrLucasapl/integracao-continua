docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest

sonar.projectKey=integracao-continua
sonar.projectName=integracao-continua
sonar.projectVersion=1.0
 
sonar.sources=src
sonar.exclusions=**/*test.ts

sonar.tests=src
sonar.test.inclusions=**/*test.ts
sonar.host.url=http://localhost:9000
sonar.token=sqp_2b9fd180655fbe4db30f1b25ed30707af616d3db
#sonar.javascript.lcov.reportPaths=./coverage/lcov.info
#sonar.javascript.coveragePlugin=lcov

sonar.sourceEncoding=UTF-8

C:\Users\lucas_pereira\Downloads\sonar-scanner-6.2.0.4584-windows-x64\bin\sonar-scanner -X -D"sonar.projectKey=integracao-continua" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_2b9fd180655fbe4db30f1b25ed30707af616d3db"