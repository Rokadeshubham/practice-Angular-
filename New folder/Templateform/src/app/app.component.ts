
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupForm:NgForm;

  title = 'firstapp';
  defaultQuestion ="pet";
  answer = "";

  genders = ['male','female'];

  user ={
    username :'',
    email : '',
    secretQuestion: '',
    answer: "",
    gender:""

  }
  submitted = false;

  SuggestName (){
    const suggestedName = 'Superuser';
  }
  onSubmit(form:NgForm){
    console.log(form)
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
  }
}