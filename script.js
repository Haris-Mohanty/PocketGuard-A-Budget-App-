//START SET BUDGET CODE
let setBudget = document.getElementById("set-budget");
let budgetBtn = document.getElementById("budget-btn");
budgetBtn.addEventListener("click", () => {
  setBudgetFun();
});
const setBudgetFun = () => {
  if(setBudget.value != ""){
    localStorage.setItem("budget",setBudget.value);
    location.href = location.href;
  }else{
    swal("Input Field Empty!", "Please Enter a Budget !", "warning");
  }
};
//END SET BUDGET CODE

//GET DATA FROM LOCALSTORAGE CODE START
let totalBudget = document.getElementById("total-budget");

function all_data(){
 totalBudget.innerHTML = localStorage.getItem("budget");
}
all_data();
//GET DATA FROM LOCALSTORAGE CODE END