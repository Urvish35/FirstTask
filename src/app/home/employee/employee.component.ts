// import { EmpItem } from './../homeShared/homeItem';
import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { EmpItem, HomeItem } from '../homeShared/homeItem';
import { HomeDataService } from '../homeShared/home-data.service';
import { LoginService } from 'src/app/shared/login.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, DoCheck, OnDestroy {

  // @Input() search:any

  dataArray: EmpItem[] = []
  EditArray: EmpItem[] = []
  data: any;
  stringData: string | null = '';
  id: number = 0;
  deleteId: number = 0;
  isShow: boolean = true;
  isUpdate: boolean = false;
  filterArr: any[] = []
  isFilterArray: boolean = false;
  // isPermission:any;
  subscription: Subscription | undefined;
  constructor(private service: HomeDataService, private ls: LoginService, private curRoute: ActivatedRoute) {
    // ls.routeData();
  }

  ngOnInit() {
    this.dataArray = this.service.employeeDetail;
    this.stringData = localStorage.getItem('keyPass')
    if (this.stringData) {
      this.data = JSON.parse(this.stringData);
    }
    console.log(this.data);
    // this.isPermission= this.curRoute.snapshot.data['Permissions']
    // console.log(this.isPermission)
    // this.ls.routeData(this.isPermission);
  }

  deleteOpp(data: EmpItem) {
    this.deleteId = this.dataArray.findIndex(ele => {
      return ele.EmpId === data.EmpId && ele.EmpName === data.EmpName
    })
    if (this.isUpdate) {
      this.isShow = false;
      this.service.deleteFunEmoloyee(this.deleteId);
    }
    else {

      this.service.deleteFunEmoloyee(this.deleteId);
    }
  }

  onEditData(val: EmpItem) {
    this.id = this.service.employeeDetail.findIndex((ele) => {
      return ele.EmpId === val.EmpId && ele.EmpName === val.EmpName
    })
    this.EditArray.push(val);
    this.isShow = true;

    if (this.EditArray.length > 1) {
      this.EditArray.shift();
    }

    this.isUpdate = true;
  }

  formEditData(EmpId: string, EmpName: string) {
    this.service.editFunEmoloyee(this.id, EmpId, EmpName);
    this.isShow = !this.isShow
    this.EditArray = []
    this.isUpdate = false;
  }

  filterVal: string = ''
  search = ''

  // ngOnChanges(changes: SimpleChanges) {



  //   for(let change in changes){
  //     // console.log("hello",change.valueOf())
  //     let chan = changes[change]
  //     console.log("empval",chan.currentValue);
  //     let val = chan.currentValue;
  //     this.dataArray.filter((item)=>{
  //       if(item.EmpName.toLowerCase()==val){
  //         this.filterArr.push(item)
  //       }
  //     })
  //     console.log("emp",this.filterArr); 


  //   }
  // }

  ngDoCheck() {
    this.service.filterSub.subscribe(i => {
      console.log(i);
      if (i !== undefined) {
        this.isFilterArray = true;
        this.search = i
      }
      console.log("search", this.search);

    })

    this.filterArr = this.dataArray.filter(e => {
      console.log("", e.EmpName.includes(this.search));

      return e.EmpName.toLowerCase().includes(this.search)
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
