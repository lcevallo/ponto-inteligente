# PontoInteligente

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Ver video 018 Criando modulo de componente de cadastro

echo "# ponto-inteligente" >> README.md
git init
git add .
git commit -m "https://www.udemy.com/course/curso-de-angular-2-5-avancado/"
git remote add origin https://github.com/lcevallo/ponto-inteligente.git
git push -u origin master

Para crear una clase modelo
ng g cl autenticacion/cadastro-pj/models/cadastro-pj --spec=false --type=model

Para crear un modulo con su respectiva ruta
ng g module shared --routing
ng g module autenticacion/cadastro-pf --routing

Para crear directivas
ng g directive shared/directives/mascara

ng g cl shared/validators/cnpj --type=validator --spec=false

ng g s autenticacion/cadastro-pj/services/cadastro-pj --spec=false

cd ../ponto-inteligente-api-curso-angular
mvnw.cmd spring-boot:run

CNPJ 52.003.129/0001-57
CPF 067.441.626-08

CPF
ng g module autenticacion/cadastro-pf --routing
ng g component autenticacion/cadastro-pf/components/cadastrar-pf --spec=false

Para generar el Wrapper
ng g component autenticacion/cadastro-pf/components/cadastro-pf/ --inlineTemplate=true --inlineStyle=true --skipTests=true --skipSelector=true --flat=true

Para crear el modelo
ng g cl autenticacion/cadastro-pf/models/cadastro-pf --skipTests=true --type=model

ng serve --aot
ng g cl autenticacion/cadastro-pf/models/cadastro-pf --spec=false --type=model
ng g s autenticacion/cadastro-pf/services/cadastrar-pf --skipTests=true

Para Funcionarios
ng g module funcionario --routing
ng g component funcionario/components/listagem --skipTests=true
ng g component funcionario/components/lancamento --skipTests=true

Para generar el Wrapper
ng g component funcionario/components/funcionario --inlineTemplate=true --inlineStyle=true --skipTests=true --skipSelector=true --flat=true

npm install moment --save
ng generate e shared/models/tipo

ng g cl shared/models/Lancamento --skipTests=true --type=model

ng g s shared/services/http-util --skipTests=true
ng g s shared/services/lancamento --skipTests=true

ng g pipe shared/pipes/tipo --skipTests=true
ng g pipe shared/pipes/data --skipTests=true

Para Administradores
ng g module admin --routing
ng g component admin/components/listagem --skipTests=true
ng g component admin/components/cadastro --skipTests=true
ng g component admin/components/atualizacao --skipTests=true
ng g component admin/admin --inlineTemplate=true --inlineStyle=true --skipTests=true --skipSelector=true --flat=true

ng g cl shared/models/funcionario --skipTests=true --type=model
