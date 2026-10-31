import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Import correct du composant (sans .ts)
import { ProductComponent } from './product/product.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // 2. Utilisation de ProductComponent dans imports
  imports: [RouterOutlet, ProductComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Liste';

  // 3. Tableau mta3 les produits kima fi sujet HW1
  products = [
    { name: 'Produit 1', price: 20, imageUrl: 'https://via.placeholder.com/150', available: true },
    { name: 'Produit 2', price: 50, imageUrl: 'https://via.placeholder.com/150', available: false },
    { name: 'Produit 3', price: 15, imageUrl: 'https://via.placeholder.com/150' }, // available optionnel
    { name: 'Produit 4', price: 80, imageUrl: 'https://via.placeholder.com/150', available: true },
    { name: 'Produit 5', price: 25, imageUrl: 'https://via.placeholder.com/150' }  // available optionnel
  ];
}