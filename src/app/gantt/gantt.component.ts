import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import "dhtmlx-gantt";
import { TaskService } from '../task.service';
import { LinkService } from '../link.service';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'gantt',
  providers: [TaskService, LinkService],
  styleUrls: ['./gantt.component.scss'],
  template: `<div #gantt_here class='gantt-chart'></div>`
})
export class GanttComponent implements OnInit {

  constructor(private taskService: TaskService, private linkService: LinkService){}

  @ViewChild("gantt_here") ganttContainer: ElementRef;

    ngOnInit(){
        gantt.init(this.ganttContainer.nativeElement);
        gantt.config.xml_date = "%Y-%m-%d %H:%i";

gantt.init(this.ganttContainer.nativeElement);

Promise.all([this.taskService.get(), this.linkService.get()])
     .then(([data, links]) => {
         gantt.parse({data, links});
     });
    }

}
