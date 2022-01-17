Shopify Backend Developer Intern Challenge - Summer 2022
Nodejs Express web-app.

## Technologies/libaries used
 * ``Nodejs``
 * ``Express``
 * ``Handlebars: templating Engine``
 * ``Lokijs: local database``

## Inventory Model
  * ``id: integer, unique``
  * ``name: string, required``
  * ``quantity: integer, required``

Note: if ``id`` exists, it will just overwrite the values. ``CRUD`` operations are supported, and the inventory list can be exported by clicking ``Export to CSV`` button.

## API Routes
```/api/inventory/create``` ``POST`` expects Inventory data in body parameters
```/api/inventory/export``` ``GET``
```/api/inventory/edit``` ``POST`` expects Inventory data in body parameters
```/api/inventory/delete?id=shoes``` ``POST``
```/api/inventory/list``` ``GET``
```/api/inventory/get?id=shoes``` ``GET``

## Pages URL
```/list```
```/create```
```/edit```

## Requirements

 * ``Node >= 12.18.3``
 * ``npm >= 6.14`` or newer

## Setting Up

1. Run ```npm i``` in the project directory to install all dependencies
2. Run ```npm start``` in the same directory to launch the web-server at port 8200
3. visit ```http://localhost:8200``` to access in your browser.


