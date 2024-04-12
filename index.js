class BankBranch {
    constructor(branchInfo) {
      if (!BankBranch.bankBranchInstance) {
        this.branchInfo = branchInfo;
        BankBranch.bankBranchInstance = this;
      }
      return BankBranch.bankBranchInstance;
    }
  
    getBranchInfo() {
      return this.branchInfo;
    }
  }
  
  // Usage
  const branchA = new BankBranch("Branch A Info");
  const branchB = new BankBranch("Branch B Info");
  
  console.log(branchA === branchB); // Output: true (both referring to the same instance)
  
  console.log(branchA.getBranchInfo()); // Output: Branch A Info
  console.log(branchB.getBranchInfo()); // Output: Branch A Info (same instance)
  