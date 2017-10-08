import { ListcocAddModalComponent } from './components/listcocinandose-add-modal/listcocinandose-add-modal.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';


@Component({
  selector: 'app-listcocinandose',
  templateUrl: './listcocinandose.component.html',
  styleUrls: ['./listcocinandose.component.css']
})
export class ListcocinandoseComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }


  addHomeModalShow() {
      let disposable = this.dialogService.addDialog(ListcocAddModalComponent, {
          title:'Confirm title', 
          message:'Confirm message'})
          .subscribe((isConfirmed)=>{
              //We get dialog result
              if(isConfirmed) {
                  alert('accepted');
              }
              else {
                  alert('declined');
              }
          });
      //We can close dialog calling disposable.unsubscribe();
      //If dialog was not closed manually close it by timeout
      setTimeout(()=>{
          disposable.unsubscribe();
      },10000);
  }

}
