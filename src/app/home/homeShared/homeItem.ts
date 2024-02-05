export class HomeItem{
    public EmpName: string;
    public EmpId: string;
    public CompanyName: string;
    public CompanyId: string;
    public BranchName: string;
    public BranchId: string;

    constructor(EmpName: string, EmpId: string, CompanyName: string, CompanyId: string, BranchName: string, BranchId: string){
        this.EmpName=EmpName;
        this.EmpId=EmpId;
        this.CompanyName=CompanyName;
        this.CompanyId=CompanyId
        this.BranchName=BranchName;
        this.BranchId=BranchId;
    }
}

export class BranchItem{
    public BranchName: string;
    public BranchId: string;

    constructor(BranchName: string, BranchId: string){
        this.BranchName=BranchName;
        this.BranchId=BranchId;
    }

}

export class EmpItem{
    public EmpName: string;
    public EmpId: string;

    constructor(EmpName: string, EmpId: string){
        this.EmpName=EmpName;
        this.EmpId=EmpId;
    }

}

export class companyItem{
    public CompanyName: string;
    public CompanyId: string;

    constructor(CompanyName: string, CompanyId: string){
        this.CompanyName=CompanyName;
        this.CompanyId=CompanyId;
    }

}

export class allInfo{
    
    public Id: string;
    public EmpName: string;
    public CompanyName: string;
    public BranchName: string;

    constructor(Id: string,EmpName: string,CompanyName: string,BranchName: string){
        this.Id=Id;
        this.EmpName=EmpName;
        this.CompanyName=CompanyName;
        this.BranchName=BranchName;
    }

}