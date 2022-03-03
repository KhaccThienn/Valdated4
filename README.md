
    input cua name => id: name
    input cua email => id = email
    input cua dia chi => id = add
    input cua sdt => id = tel
    input cua ngay => id = day

document.getElementById('id-name').addEventListener('input', check=()=>{
    var var-name = document.getElementById('id-name').value;
    
    if(functionCheck(var-name)){
        document.getElementById('id-name').style.border = '3px solid #35fc03';
    } else {
        document.getElementById('id-name').style.border = '3px solid red';
    }
});

reg Name: ^[A-Z_-]{3,16}$
reg mail: ^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$
reg add: ^[a-zA-Z0-9\s,'-]*$
reg tel: ^[0][3|5|7|8|9][0-9]{8,9}$

reg day: ^( 
    ((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)
    [-/]?[0-9]{4}|29[-/]?02[-/]?
    ([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00) 
)$