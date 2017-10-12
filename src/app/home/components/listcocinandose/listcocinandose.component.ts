import { ListcocAddModalComponent } from './components/listcocinandose-add-modal/listcocinandose-add-modal.component';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'ng2-bootstrap-modal';


@Component({
  selector: 'app-listcocinandose',
  templateUrl: './listcocinandose.component.html',
  styleUrls: ['./listcocinandose.component.css']
})
export class ListcocinandoseComponent implements OnInit {
    public link = '#';
    public imgLink = 'assets/img/galeria02.jpg';
    public descripcion = 'Descripcion de prueba';
    public number = '123234';
    public precio = '$ 87.00';
    public titulo = 'POZOLE RICO SABOR CASERO';
    public moneda = 'MXN';
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

  // This will contain the response from Modal PEDIR
  onModalResponse( res: any ) {
      console.log(res);
  }

}
