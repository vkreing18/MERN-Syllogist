let Employee = {
    Name: "Mirza Sahid",
    Email: "MirzaSahid786@gmail.com",
    phone: 9778412240,
    Basic_Salary: 1000000,
    Total_Salary: function(){
      const HRA = .15*this.Basic_Salary;
      const Special_Allowance = .2*this.Basic_Salary;
      var Total_Sal = this.Basic_Salary + HRA + Special_Allowance;
      if(this.Basic_Salary>90000)
        Total_Sal = Total_Sal - (0.30*Total_Sal);
      else if(this.Basic_Salary>70000)
        Total_Sal = Total_Sal - (0.20*Total_Sal);
      else if(this.Basic_Salary>50000)
        Total_Sal = Total_Sal - (0.15*Total_Sal);
      else if(this.Basic_Salary>40000)
        Total_Sal = Total_Sal - (0.10*Total_Sal);
      return Total_Sal;
    }
  }
  console.log(`Name--->`+Employee.Name);
  console.log(`Email--->`+Employee.Email);
  console.log(`Phone Number--->`+Employee.phone);
  console.log(`Basic Salary-->`+Employee.Basic_Salary);
  console.log(`calculated Total salary after deduction-->`+Employee.Total_Salary());