import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {


hasError = true
greetings =''
public title = 'INDIA'

Color = ''


onClick(){
  // console.log('hi aslam, hwo are you ?')
  this.hasError = false
}
Click(){
  this.hasError = true
}





data={
  tech1: 'angular',
  tech2:'nodejs',
  programingLanguage:'typescript'
}

ColorFunction (){
  return 'green'
}


goodMorning(){
  this.greetings ='hy friends good morning'

}
goodAfternoon(){
  this.greetings ='hy friends good after none'
}









public count =0
count1(){
  this.count +=1

  this.count%2 ? this.Color = 'green' : this.Color = 'red'
}
count2(){
  this.count -=1
  this.count%2 ? this.Color = 'green' : this.Color = 'red'
}















}
