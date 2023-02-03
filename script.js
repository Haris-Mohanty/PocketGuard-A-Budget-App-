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
  let i;
  for(i=0; i<localStorage.length; i++){
    
  }
 totalBudget.innerHTML = localStorage.getItem("budget");
}
all_data();
//GET DATA FROM LOCALSTORAGE CODE END

//SET EXPENSES CODE START
let product_btn = document.getElementById("product-btn");
let title = document.getElementById("title");
let cost = document.getElementById("cost");
product_btn.onclick = function(e){
  e.preventDefault();
  if(title.value != "" && cost.value != ""){
    let p_title = title.value;
    let p_cost = cost.value;
    let data = {p_cost : p_cost,
                p_title : p_title
                };
    let string = JSON.stringify(data);
    localStorage.setItem("budget_"+title.value, string);
    
  }else{
    swal("Input Field Empty!", "Please fill the Details !", "warning");
  }
}
//SET EXPENSES CODE END