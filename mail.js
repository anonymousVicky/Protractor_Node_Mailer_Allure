{
    var nodemailer = require("nodemailer");

    var transport = nodemailer.createTransport("SMTP", {
        host: "smtp.gmail.com", // hostname
        secureConnection: true, // use SSL
        port: 465, // port for secure SMTP
        auth: {
            user: "xxx@gmail.com",
            pass: "xxxx"
        }
    });
    console.log("SMTP Configured");
    var mailOptions = {
        from: 'xxxxx@gmail.com', // sender address
        to: 'xxxx@gmail.com', // list of receivers
        subject: 'Report for Test Result', // Subject line
        text: 'Contains the test result for the smoke test in html file.' +
        '\n Detailed Allure reports for latest build can be found at: http://192.168.1.4:1234/#/' + //replace this url by your jenkins node ip on which test is running
        '\n Allure results has also been artifacted for all builds on jenkins instance', // plaintext body
        attachments: [
            {
                'filename': 'Results.html',
                'filePath': './Reports/Results.html',
            }
        ]
    };
    transport.sendMail(mailOptions, function (error, response) {
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

    });
}
