import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username!: string;
  password!: string;
  errMsg!: string;
  signinForm: FormGroup;

  constructor(public fb: FormBuilder,private authService: AuthService, private router: Router) {
    this.signinForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    this.username = 'LaFaceCachéeDeLaLune';
    this.password = 'Issou2021';
  }
  onSubmitAuthForm() {
      this.authService.signIn(this.signinForm.value);

  }
}
