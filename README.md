Development Mode:
  FE: npm run start
  BE: mvn spring-boot:run

  Browser: http://localhost:8080/tmp/index.html

Production Mode:
  Parent: mvn clean install && java -jar ../be/target/be-0.0.1-SNAPSHOT.jar --spring.profiles.active=prod

  Browser: http://localhost:8888/index.html
  
In development mode, requests are basically being routed through webpack-dev-server, 
and still hitting http://localhost:8888 (but with a live node server)


See http://justincalleja.com/2016/04/17/serving-a-webpack-bundle-in-spring-boot/
npm i html-webpack-plugin --save-dev
npm i style-loader css-loader --save-dev