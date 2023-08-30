import { Component, Input,Output,EventEmitter,OnInit,} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent{
aboutus='welcome to about us';
@Input() myinputmsg: any;
@Output() myOutput:EventEmitter<string>= new EventEmitter(); 
outputMessage:string="I am child component."  
constructor() { }  
ngOnInit() {  
  console.log(this.myinputmsg);  
  }  
  sendValues(){  
    this.myOutput.emit(this.outputMessage);  
 }  
}
