const navtoggle = document.querySelector('.nav-toggle');
const navlinks = document.querySelectorAll('.nav__link')
const cancelBTN = document.getElementById('Cancel');
const AddBTN = document.getElementById('Add_Info');



navtoggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

function liveLiveWork(){
alert("This is a live site for the Suncook Valley Chorale.");
};

cancelBTN.addEventListener('click', () =>{
    document.getElementById('Birthday').value="";
    document.getElementById('UserName').value="";
    document.getElementById('Name').value="";
    document.getElementById('HiddenRow').value="";
});

AddBTN.addEventListener('click', () =>{
    PassData();
});


function PassData(){
    var RowID = document.getElementById('HiddenRow').value;
    var Bday = document.getElementById('Birthday').value;
    var UserName =document.getElementById('UserName').value;
    var Name =document.getElementById('Name').value;
    var table = document.getElementById("User_Table");
  
    
  
    if ((Name== '') || (Bday== '') || (UserName== '')){
        alert("Please fill all fields.");
        return;
    }
    var age = getAge(Bday);
    
    if (RowID==''){
        var e =table.rows.length;
    var row = table.insertRow();
    row.id=e;
}
else{
    var row = document.getElementById(RowID);
    DeleteRow(RowID);
    var row = table.insertRow(RowID);
    var e =RowID;
    row.id=e;
}
    
    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);
    var cell3= row.insertCell(3);
    var cell4= row.insertCell(4);
    cell0.innerHTML=Name;
    cell0.id=`${e}_Name`;
    cell1.innerHTML = UserName;
    cell1.id=`${e}_UName`;
    cell2.innerHTML = Bday;
    cell2.id=`${e}_Date`;
    cell3.innerHTML = age;
    cell4.innerHTML='<button class="button muted-button" onclick="EditRow('+e+');">Edit</button> <button class="button muted-button" onclick="DeleteRow('+e+');">Delete</button>';
   
    document.getElementById('Birthday').value="";
    document.getElementById('UserName').value="";
    document.getElementById('Name').value="";
    document.getElementById('HiddenRow').value="";

};

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function DeleteRow(rowid){
    var row = document.getElementById(rowid);
    row.parentNode.removeChild(row);
};

function EditRow(rowid){
   
    var Bday = document.getElementById(rowid+'_Date').innerText;
    var UserName =document.getElementById(rowid+'_UName').innerText;
    var Name =document.getElementById(rowid+'_Name').innerText;
   
     document.getElementById('Birthday').value=Bday;
    document.getElementById('UserName').value=UserName;
    document.getElementById('Name').value=Name;
    document.getElementById('HiddenRow').value=rowid;
};