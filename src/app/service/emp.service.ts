import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }

  getEmpList()
  {
    return[
      {"eno":1, "ename":"Varsha","salary":20000},
      {"eno":2, "ename":"Reshma","salary":30000},
      {"eno":3, "ename":"Sneha","salary":40000},
      {"eno":4, "ename":"Arti","salary":25000}
    ]
  }
}
