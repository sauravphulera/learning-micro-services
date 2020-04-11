# learning-micro-services
This is a simple micro service project which queries through graphql gateway which is connected to MLab to store mails and Mailing service(Node mailer and  rabitMQ Queue) to send mails.

1. git clone repo-url
2. hit npm i
3. go to packages and hit  npm i inside every service
4. run pm2 start ecosystem.config.js
5. hit localhost:2000/gq in your browser and you are good to go
