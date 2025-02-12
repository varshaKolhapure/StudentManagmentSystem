import { Component, OnInit } from '@angular/core';
import { Options, StudService } from '../service/stud.service';
import { Student } from '../pojo/Student';
//an import for popup
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

//import for datatable
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Stuttable } from '../pojo/Stuttable';


@Component({
  selector: 'app-stud',
  templateUrl: './stud.component.html',
  styleUrls: ['./stud.component.css']
})
export class StudComponent implements OnInit{

studentList:any=[ ];
studobj:Student=new Student();
flag:string="";
options:Options=new Options();

ELEMENT_DATA: Stuttable[]=new Array();
displayedColumns: string[] = ['studentNumber', 'studentName', 'studentAge', 'update', 'delete', 'img'];
dataSource = new MatTableDataSource<Stuttable>(this.ELEMENT_DATA);

//  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatPaginator, {static: true}) paginator: any;

applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();
  }
/////asdfgghhhhhhhjjkl;l//////
  public bool: Array<boolean> = [true, false, true, false];
  public fixPlayerNames: Array<String> = ["Reading", "Dancing", "Swimming"];

    public genders: Array<String> = ["Male", "Female"];
    public genderValues: Array<String> = ["M", "F"];
    public gen:String="F";

    public city:String="Kolkata";
    public cities: Array<String> = ["Pune", "Mumbai", "Kolkata"];

    
constructor(private studService:StudService, private modalService:NgbModal){}

  ngOnInit(): void {
    this.fillList();
  }

  clearData()
  {
    this.studobj.studentNumber=0;
    this.studobj.studentName="";
    this.studobj.studentAge=0;
   this.studobj.gender="";
   this.studobj.city="";
   this.studobj.reading;
   this.studobj.swimming;
   this.studobj.dancing;
  }
  fillList()
  {
   // this.studService.getData("studentList").subscribe(data=>{this.studentList=data; /*alert(JSON.stringify(this.students));*/ });
   this.studService.getData("studentList", this.options).subscribe(data=>{this.ELEMENT_DATA=data; /*alert(JSON.stringify(this.ELEMENT_DATA));*/ this.dataSource = new MatTableDataSource<Stuttable>(this.ELEMENT_DATA); this.dataSource.paginator = this.paginator;});
   this.clearData();
  }

  save()
  {
    if (this.flag=="add")
    this.studService.insertData("studentList", this.studobj, this.options).subscribe(data=>{this.fillList();});
  else
  this.studService.updateData("studentList", this.studobj, this.options).subscribe(data=>{this.fillList();});
  }

  update(stud: any)
  {
    console.log(stud)
    this.flag="update";
    this.studobj= stud;
  }

  edit()
  {
    this.studService.updateData("studentList", this.studobj, this.options).subscribe(data=>{this.fillList();});
  }

  delete(studentNumber:number)
  {
    let ans=confirm("R u sure u wanna delete this record?");

    if(ans)
      this.studService.deleteData("studentList/" + studentNumber, this.options).subscribe(data=>{this.fillList();});
  }

  //Code for modal starts here
// *************************
openPopUp(content:any) {
  this.modalService.open(content, { size: 'lg' });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}

// *************************
//Code for modal ends here

add(){
  this.flag="add"
}

}
