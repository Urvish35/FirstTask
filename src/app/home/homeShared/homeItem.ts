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