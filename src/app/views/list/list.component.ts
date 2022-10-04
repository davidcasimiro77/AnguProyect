import { Component, OnInit } from '@angular/core';
import { EntreeService } from 'src/app/shared/services/entree.service';
@Component({
  selector: 'app-listado',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // Atibutos
  public entryList: any;
  constructor(private entreeService: EntreeService) {
    // aquí habría que inicializar, pero como aún no
    // hemos decidido la estructura de las entradas no lo ponemos

  }
  ngOnInit(): void { // Llamar a la petición, para recuperar entradas
    this.retrieveEntry();
  }
  // creo el método
  private retrieveEntry(): void {
    this.entreeService.retrieveEntry().subscribe(
      (data) => {
        this.entryList = data;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }
  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }
}