import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User } from './user';
import { Enrollment } from './enrollment';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tdf';
  errorMessage = '';
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Deepesh', 'rob@email.com', 1234567899, 'Angular', 'evening', false);
  constructor(private _enrollment: Enrollment) { }

  onSubmit() {
    console.log('ON Submit button ' , this.userModel);
    this._enrollment.enroll(this.userModel)
    .subscribe({
      next: data => console.log('success', data),      
      error: error=> this.errorMessage = error
      //error: error=> console.log(' from onSubmit app ' + error)
    })}
     

  
}
