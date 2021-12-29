<!-- From the Project Folder -->
mkdir backend frontend

npm init

npm i express dotenv mongoose

cd backend

<!-- Basic express config -->
touch app.js

<!-- for ENVIRONMENT VARIABLES -->
mkdir config && touch config/config.env

<!-- Entrypoint...imports basic config from app.js and sets up the connection to outside world -->
touch server.js

<!-- for server auto restart and sets the scripts key in package.json to required values -->
npm install nodemon

<!-- for routes and controller functions -->
mkdir controllers routes

<!-- import productController.js into productRoute.js...then import productRoute into app.js-->
touch controllers/productController.js
touch routes/productRoute.js

<!-- *************** -->
<!-- configure postman to manage environment Clip 3.4 -->
<!-- *************** -->

<!-- Database setup and imports into server.js  -->
touch config/database.js

<!--  -->
<!-- ***************************************************** -->
<!-- ********************* MODULE 4 ***********************-->
<!-- ***************************************************** -->

<!-- for data model schema -->
mkdir models && touch models/product.js

<!-- imports ../models/product.js into productController.js for data-model manipulation -->
<!-- imports productController.js into productRoute.js for route setup -->

<!-- for seed data -->
mkdir data && touch data/product.json
mkdir utils && touch utils/seeder.js
set seeder Script in package.json