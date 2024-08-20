import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton ]
})
export class MainPage implements OnInit {

  constructor(private router: Router) { } // Añade el Router al constructor

  ngOnInit() {}

  navigateToContact() {
    this.router.navigate(['/contact']); // Usa el router para navegar a la página de contacto
  }

}
