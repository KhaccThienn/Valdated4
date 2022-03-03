document.getElementById('name').addEventListener('input', check=()=>{
    var name = document.getElementById('name').value;
    if(checkName(name)){
        document.getElementById('name').style.border = '3px solid #35fc03';
    } else {
        document.getElementById('name').style.border = '3px solid red';
    }
});

document.getElementById('email').addEventListener('input', check=()=>{
    var email = document.getElementById('email').value;
    if(checkMail(email)){
        document.getElementById('email').style.border = '3px solid #35fc03';
    } else {
        document.getElementById('email').style.border = '3px solid red';
    }
});

document.getElementById('tel').addEventListener('input', check=()=>{
    var tel = document.getElementById('tel').value;
    if(checkTel(tel)){
        document.getElementById('tel').style.border = '3px solid #35fc03';
    } else {
        document.getElementById('tel').style.border = '3px solid red';
    }
});

document.getElementById('add').addEventListener('input', check=()=>{
    var add = document.getElementById('add').value;
    if(checkAdd(add)){
        document.getElementById('add').style.border = '3px solid #35fc03';
    } else {
        document.getElementById('add').style.border = '3px solid red';
    }
});

document.getElementById('day').addEventListener('input', check=()=>{
    var day = document.getElementById('day').value;
    if(checkDay(day)){
        document.getElementById('day').style.border = '3px solid #35fc03';
    } else {
        document.getElementById('day').style.border = '3px solid red';
    }
});

checkName = (name) => (/^[A-Z_-\s]{3,16}$/.test(name));
checkMail = (email) => (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email));
checkTel = (tel) => (/^[0][3|5|7|8|9][0-9]{8,9}$/.test(tel));
checkAdd = (add) => (/^[a-zA-Z0-9\s,'-]*$/.test(add));
checkDay = (day) => (/^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/.test(day));

// end validate dinh dang ten, mail, tel, address, days
