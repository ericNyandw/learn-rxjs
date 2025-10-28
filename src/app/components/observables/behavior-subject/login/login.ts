import {Component, OnDestroy, OnInit} from '@angular/core';
import {EtatConnexion} from '../../../../core/services/etat-connexion';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-login',
  imports: [
  ],
  template: `
    <div class="container">

      <div class="row">
        <span class="badge bg-primary">{{ message }}</span>
       cas d'etat de connexion login : {{ statutConnexion }}
      </div>

      <div class="d-flex justify-content-center align-items-center p-3">
        <!-- Bouton de connexion : affiché si l'utilisateur N'EST PAS connecté -->
        @if (estConnecte$ ) {
          <button class="btn btn-success" (click)="demarrerConnexion()">Se connecter</button>
          <!-- Bouton de déconnexion : affiché si l'utilisateur EST connecté -->
        } @else {
          <button class="btn btn-danger" (click)="deconnecter()">Se déconnecter</button>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Login implements OnInit , OnDestroy {
  statutConnexion: string = '';
  message: string = 'LoginComponent: Souscription au BehaviorSubject.';
  constructor(private readonly etatConnexionService: EtatConnexion) {}

  ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
  estConnecte$!: Subscription ;
  ngOnInit() {
    // Ce composant arrive plus tard (par exemple, après une navigation)
    // Il va immédiatement recevoir l'état actuel
    setTimeout(() => {
      console.log(this.message);
     this.estConnecte$ =this.etatConnexionService.estConnecte$.subscribe(estConnecte => {
        this.statutConnexion = estConnecte ? 'Connecté' : 'Déconnecté';
      });
    }, 2000);
  }

  demarrerConnexion() {
    this.etatConnexionService.seConnecter();
  }
  deconnecter() {
    this.etatConnexionService.seDeconnecter();
  }
}
