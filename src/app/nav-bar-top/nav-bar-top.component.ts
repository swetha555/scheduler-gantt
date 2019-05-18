import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.scss']
})
export class NavBarTopComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  navigate(tabName) {
    if (tabName == 'task')
      this.router.navigate(['..', "task-hierarchy"], { relativeTo: this.route });
    else if (tabName == 'create')
      this.router.navigate(['..', "create-runbook"], { relativeTo: this.route });
    else if (tabName == 'list')
      this.router.navigate(['..', "runbook-list"], { relativeTo: this.route });
  }
}
