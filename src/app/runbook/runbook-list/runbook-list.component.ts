import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-runbook-list',
  templateUrl: './runbook-list.component.html',
  styleUrls: ['./runbook-list.component.scss']
})
export class RunbookListComponent implements OnInit {

  constructor(
    private router: Router,  
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  // navigate(){
  //   this.router.navigate(['..', "task-hierarchy"], { relativeTo: this.route })
  // }
}
