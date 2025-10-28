import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtatConnexion {
   // Création du BehaviorSubject avec une valeur initiale de `false`
  private readonly _estConnecte = new BehaviorSubject<boolean>(false);

  // Exposition du flux en tant qu'Observable public
  // On cache le Subject pour ne pas que n'importe qui puisse émettre
  estConnecte$: Observable<boolean> = this._estConnecte.asObservable();

  // Méthode pour mettre à jour l'état
  seConnecter() {
    console.log("Utilisateur connecté !");
    this._estConnecte.next(true);
  }

  seDeconnecter() {
    console.log("Utilisateur déconnecté !");
    this._estConnecte.next(false);
  }
}
