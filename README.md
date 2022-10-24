creating controller:
- create controller via cli 'nest g co coffees'

validation:
- validate DTO's via 'npm i class-validator class-transformer'

extend Dto's:
need package npm i @nestjs/mapped-types

database integration module:
- i need typeorm packages
- npm i @nestjs/typeorm typeorm pg




- npx typeorm migration:revert
- npx typeorm migration:run

Manual migration
npx typeorm migration:create -n CoffeeRefactor

Automate , change in entity then build and run command
- npx typeorm migration:generate -n SchemaSync



## Dependency Injection

