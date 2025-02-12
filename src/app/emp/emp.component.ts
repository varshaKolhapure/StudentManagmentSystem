import { Component, OnInit } from '@angular/core';
import { EmpService } from '../service/emp.service';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit{
  employees:any=[];
  constructor(private empService:EmpService){}

  ngOnInit(): void {
      this.employees=this.empService.getEmpList();
      alert(JSON.stringify(this.employees));
  }

}
