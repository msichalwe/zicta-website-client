// utils/sendEmail.ts

import nodemailer from 'nodemailer';
import {toast} from "react-hot-toast";
import {TeamMember} from "@/app/dashboard/developer-projects/miscelleneous/types";

async function sendProjectStatusMail(
    subject: string,
    text: string,
    recipients: TeamMember[]
) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'emmanuelchilombodev@gmail.com', //TODO Needs to be gotten from .env, test only
            pass: 'jzkgugswgnrwqljw' //TODO Needs to be gotten from .env, test only
        }
    });

    if (recipients.length == 0) {
        toast.error('An error occurred')
        return;
    } //TODO: Might be problematic, check later


    const recipientEmails = recipients.map(recipient => recipient.name);


    let mailOptions = {
        from: '"Emmanuel Chilombo" emmanuelchilombodev@gmail.com',
        to: recipientEmails.join(','),
        subject: subject,
        html: `<h1> Kindly note that the status of the project has now changed to ${text} </h1>`

    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return info.messageId;
    } catch (error) {
        console.error('Error occurred while sending email:', error);
        toast.error('An error occurred')
        throw error;
    }
}

export default sendProjectStatusMail;
