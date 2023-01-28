//START SET BUDGET CODE
let setBudget = document.getElementById("set-budget");
let budgetBtn = document.getElementById("budget-btn");
let totalBudget = document.getElementById("total-budget");
budgetBtn.addEventListener("click", () => {
  setBudgetFun();
});
const setBudgetFun = () => {
  if(setBudget.value != ""){
    localStorage.setItem("button",setBudget.value);
  }else{
    swal("Input Field Empty!", "Please Enter a Budget !", "warning");
  }
};

//END SET BUDGET CODE
//