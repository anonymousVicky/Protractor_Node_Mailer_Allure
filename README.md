# Protractor_Node_Mailer_Allure

1. Install Protractor globally: npm install -g protractor
2. Install webdriver jars: webdriver-manager update
3. Install nodemailer. Please make sure you download nodemailer version less than or equal to 0.7.1: npm install nodemailer@0.7.0
4. Install screenshot reporter version2 as version1 does not works with latest version of jasmine: npm install protractor-jasmine2-screenshot-reporter --save-dev
5. Install allure reporter: npm install jasmine-allure-reporter
6. Start up server.[This step is not mandatory and should be done only if want to run tests on standalone server which can be avoided by directly using chrome from webdriver by default]. Please avoid this step: webdriver-manager start
Project Running Instructions:
7. Run the protractor  tests  using following command: protractor conf.js.

**Make sure to change mail.js as per user and update node >=4.0 to work with latest protractor dependencies. 


