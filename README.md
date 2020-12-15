install nestjs
- npm i -g @nestjs/cli

install class-validator
- npm i class-validator

install class-transformer
- npm i class-transformer

install mapped-types
- npm i @nestjs/mapped-types

create project
- nest new (project name)

start project
- npm run start:dev

create controller - movies
- nest generate controller 
- nest g co

create service - movies
- nest generate service
- nest g s

create module - movies
- nest generate module
- nest g mo


jest는 자바스크립트를 쉽게 테스팅하는 npm 패키지
.spec.ts는 테스트를 포함하는 파일
nestJS에서는 jest가 .spec.ts파일들을 찾아볼 수 있도록 설정되어 있음

npm run test:cov - 코드가 얼마나 테스팅 됐는지 확인