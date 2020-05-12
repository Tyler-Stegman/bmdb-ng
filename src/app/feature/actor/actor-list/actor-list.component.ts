import { Component, OnInit } from '@angular/core';
import { ActorService } from 'src/app/service/actor.service';
import { Actor } from 'src/app/model/actor.class';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  title: string = "Actor-List";
  actors: Actor[] = [];

  constructor(private actorSvc: ActorService) { }

  ngOnInit(): void {
    this.actorSvc.list().subscribe(
      jr => {
        console.log("jr:", jr);
        this.actors = jr.data as Actor[];
        console.log("List of actors: ", this.actors);
      }
    );
  }

}
