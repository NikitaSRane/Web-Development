import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-marvellous',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './marvellous.component.html',
  styleUrl: './marvellous.component.css',
  providers: [FormBuilder,Validators]
})
export class MarvellousComponent {

  public fbobj = new FormBuilder();
  
  SupportForm=this.fbobj.group(
    {
      fname:['',[Validators.required ,Validators.pattern('^[a-zA-Z]+$')]],
      lname:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required,Validators.pattern('^\\d{10}$')]],
      address:['',[Validators.required]],
      city:['',[Validators.required,Validators.minLength(4)]],
      state:['',[Validators.required]],
      zip:['',[Validators.required,Validators.pattern('^[0-9]{6}$')]],
      comment:['',[Validators.required, Validators.minLength(30)]]
    }
  );

}
