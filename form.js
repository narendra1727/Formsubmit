let userdata=[]
let data1={};
function output1(event,field){
    data1[field]=event.target.value
    console.log(data1);
}

let check=[];
function checkbox(event){
    let cb=event.target.value
    if(check.includes(cb)){
        check.splice(check.indexOf(cb.value),1)
    }else{
        check.push(cb)}
    console.log(check)
    data1["foods"]=check
}

function table1(){
    userdata.push(data1);
    console.log(userdata)
    data1={};
    
    
    let tablebody=document.getElementById("table-body")
    let tablerow="";

    for(let user of userdata){
        console.log(user);
        tablerow += `<tr>
        <td>${user.firstname}</td>
        <td>${user.lastname}</td>
        <td>${user.address}</td>
        <td>${user.pincode}</td>
        <td>${user.gender}</td>
        <td>${user.state}</td>
        <td>${user.country}</td>
        <td>${user.foods}</td>
        </tr>`
    }

    tablebody.innerHTML=tablerow;

    
    
}