import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  submitted = false;
  isSending = false;

  constructor(private emailService: EmailService) { }

  async onSubmit(e: Event) {
    if (this.formData.name && this.formData.email && this.formData.message && this.formData.subject) {
      this.isSending = true;
      try {
        await this.emailService.sendEmail(e);
        this.submitted = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later or verify your EmailJS configuration.');
      } finally {
        this.isSending = false;
        if (this.submitted) {
          setTimeout(() => this.submitted = false, 3000);
        }
      }
    }
  }
}
