
let d = new Date();
function edad(){
    const anoNacimiento = 1993;
    const mesNacimiento = 3;
    const diaNacimiento = 18;
    const fechaNacimiento = [anoNacimiento,mesNacimiento,diaNacimiento];
    
    anoEdad = d.getFullYear()-anoNacimiento;
    if(mesNacimiento>=parseInt(d.getMonth()+2)&&diaNacimiento>=d.getDate()){
        return anoEdad-1;
    }else{
        if(mesNacimiento==parseInt(d.getMonth()+2)&&diaNacimiento>=d.getDate()){
        return anoEdad-1;
    }
    return anoEdad;
    }
}
    
var perfil;
function mostrar(perfil) {
    div = document.getElementById(perfil);
    div.style.display = 'inline-flex';
}

function ocultar(perfil) {
    div = document.getElementById(perfil);
    div.style.display = 'none';
}

