using System;
using System.Net;
using System.Net.Mail;

namespace RegistrationApp
{
    class EmailNotification
    {
        public static void SendEmail(RegistrationAccount account)
        {
            try
            {
                MailMessage mailMessage = new MailMessage();
                SmtpClient smptClient = new SmtpClient();
                mailMessage.From = new MailAddress("jonaitisdevmail@gmail.com");
                mailMessage.To.Add(new MailAddress(account.EmailAddress));
                mailMessage.Subject = "Registration";
                mailMessage.IsBodyHtml = true;
                mailMessage.Body = $"Hello {account.FirstName}, You have successfully registered!!!";
                smptClient.Port = 587;
                smptClient.Host = "smtp.gmail.com";
                smptClient.EnableSsl = true;
                smptClient.UseDefaultCredentials = false;
                smptClient.Credentials = new NetworkCredential("jonaitisdevmail@gmail.com", "Slaptazodis123!");
                smptClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smptClient.Send(mailMessage);
                Console.WriteLine("Email sent successfully");
            }
            catch (Exception e)
            {
                Console.WriteLine("Error occurred" + e.Message);
            }
        }
    }
}
