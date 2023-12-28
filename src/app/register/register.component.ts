import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '../services/message/message.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'User', 'Super Admin'];
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Register Successfull !');
      this.messageService.showMessage('Register Successfully');
      this.router.navigate(['/login']);
    }
  }
}
