import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  imports: [AsyncPipe],
  templateUrl: './combine-latest_.component.html',
  styleUrl: './combine-latest_.component.css',
})
export class CombineLatest_ implements OnInit {
  // Observables pour nos filtres
  nomUtilisateur = new BehaviorSubject<string>('');
  statutCommande = new BehaviorSubject<string>('Toutes');

  resultatFiltre$!: Observable<{ nom: string; statut: string; }>;

  ngOnInit() {
    // combineLatest écoute les deux Observables
    this.resultatFiltre$ = combineLatest([
      this.nomUtilisateur,
      this.statutCommande
    ]).pipe(
      // On combine les deux dernières valeurs reçues
      map(([nom, statut]) => {
        return { nom, statut };
      })
    );
  }
  onStatutChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    if (target) { // Une vérification de sécurité supplémentaire
      this.statutCommande.next(target.value);
    }
  }
}
