import {Component, OnInit} from '@angular/core';
import {EtatConnexion} from '../../../../core/services/etat-connexion';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="container">
       <div class="row">
         <span class="badge bg-primary">{{ message }}</span>
         cas d'etat de connexion connexion heard : {{ statutConnexion }}
       </div>
    </div>
  `,
  styles: ``,
})
export class Header  implements OnInit {
  statutConnexion: string = '';
  message: string = 'HeaderComponent: Souscription au BehaviorSubject.';
  constructor(private readonly etatConnexionService: EtatConnexion) {
  }

  ngOnInit() {
    console.log(this.message);
    this.etatConnexionService.estConnecte$.subscribe(estConnecte => {
      this.statutConnexion = estConnecte ? 'Connecté' : 'Déconnecté';
    });
  }
}
