import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { Login } from '../login';


  interface usersarray{
    roles:string;
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  mobileno: string='';
  password: string='';
  hero: any;
  users:any;
  headers:any;
  login:Login[]=[];
  Login:any;
  usersarray:any[]=[];
  roles:any[]=[];
  GeneralUser:any[]=[];
  AdminUser:any[]=[];
  admindata:any;
  

  constructor(private router:Router,private snackBar: MatSnackBar, private formBuilder: FormBuilder, private http:HttpClient, private rs:RestService){
      this.loginForm=this.formBuilder.group({
        mobileno:['',[Validators.required]],
        password:['',[Validators.required]]
      })
 
  }
  ngOnInit(): void {
  }
 

  LoginData(): void {
    this.rs.getAllLogin().subscribe((response:any) => {
                                  this.Login = response;
                               
                                  this.showSnackbarAlert('Login Successfully');
    },
     (error:any)=>{
      console.log('error');
     }
    );

  }
 

  onAuthenticate(): void{
    this.http.post("http://192.168.0.113:8000/login/",this.loginForm.value).subscribe(
      (res:any)=>{
            this.usersarray=res;
           
            if (res === "Invalid Password For General User") {
              {this.showSnackbarAlert('Invalid credentials')};
            
            
             
            } 
            else if(res === "Login Successful For General User")
            {
             localStorage.setItem('mobileno',this.loginForm.value.mobileno);
             this.router.navigate(['dashboard']);
           
            }
            
            else if (res === "Login Successful For Admin") {
              localStorage.setItem('mobileno',this.loginForm.value.mobileno)
              this.router.navigate(['dashboard'])
            }
            
      },
      (error)=>{
        console.log('error')
      }
    )
  }

 




  public showSnackbarAlert(message: string): void {
    this.snackBar.open(message, 'close', { duration: 3000 });
  }



  

}
