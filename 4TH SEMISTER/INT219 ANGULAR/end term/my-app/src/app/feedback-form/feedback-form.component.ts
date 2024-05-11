import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [],
  templateUrl: './feedback-form.component.html',
  styleUrl: './feedback-form.component.css'
})
export class FeedbackFormComponent {
  constructor() {}
  validate() {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const descTextarea = document.getElementById('desc') as HTMLTextAreaElement;

    const nameError = document.querySelector('.nerror') as HTMLElement;
    const emailError = document.querySelector('.eerror') as HTMLElement;

    let isValid = true;

    
    if (nameInput.value=== '') {
      nameError.textContent = 'Name is required';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    
    if (emailInput.validity.valid) {
      emailError.textContent = '';
    } else {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }

    
    if (isValid) {
      console.log('Form submitted successfully!');
      // Add your form submission logic here
    }
  
  }

}