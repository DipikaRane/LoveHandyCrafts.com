function validateFname(){
    var fname=document.getElementById('firstname').value;
    if(fname.trim().length==0){
        document.getElementById('fout').innerHTML="Please Enter First name";
        document.getElementById('firstname').style.borderColor="purple";
    }
    else{
        document.getElementById('fout').innerHTML="";
        fname=fname.charAt(0).toUpperCaes()+fname.slice(1).toLowerCase();
        document.getElementById('firstname').value=fname;
    }
}
const validatelastname=()=>
{
    var lastname=document.getElementById('lastname').value;
    if(lastname.trim().length==0)
    {
        document.getElementById('lout').innerHTML=`Please Enter Last Name`;
        document.getElementById('lastname').style.borderColor="purple";
    }
    else
    {
        document.getElementById('lout').innerHTML="";
        firstname=lastname.char(0).toUpperCase()+lastname.slice(1).toLowerCase();
        document.getElementById('lastname').value=lastname;
    }
}
function validatePassword()
{ 
    var pwd=document.getElementById('pwd').value;
    if(pwd.length<15)
    {
        if(pwd.length<8)
        {
            document.getElementById('pout').innerText="Min length is 8";
            document.getElementById('ppout').style.display="block";
            document.getElementById('ppout').style.backgroundColor="red";
        }else if(pwd.length<11)
            {
                document.getElementById('pout').innerText="";
                document.getElementById('ppout').style.backgroundColor="orange";
            }
        
    }else
    {
        document.getElementById('pout').innerText="Password is Strong";
        document.getElementById('ppout').style.backgroundColor="green";
        document.getElementById('pwd').style.borderColor="green";
    }
}
var showPassword =()=>
{
    var pwd=document.getElementById('pwd');
    if(pwd.type=='password'){
        pwd.type="text";
    }else{
        pwd.type=="password";
    }
}
function validateCPassword()
{
    var pwd=document.getElementById('pwd').value;
    var cpw=document.getElementById('cpwd').value;
    if(pwd!==cpw)
    {
        document.getElementById('cpout').innerText="Password Does not match";
    }else{
        document.getElementById('cpout').innerText="";
    }
}
function validatemnumber()
{
    var mnum=document.getElementById('mobnumb').value;
    if(mnum.trim().length>10)
    {
        document.getElementById('mobinumb').innerText="Enter 10 digit only";
    }else
    {
        document.getElementById('mobinumb').innerText="";
        document.getElementById('mobnumb').style.borderColor="green"
    }
}
function validateRegister()
{
    document.getElementById('firstname').style.borderColor="purple";
    document.getElementById('lastname').style.borderColor="purple";
    document.getElementById('mobnumb').style.borderColor="green";
    document.getElementById('emailid').style.borderColor="purple";
}
