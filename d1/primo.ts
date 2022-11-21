
var estratto : number ;



function verifica(){
    let giocatore1 : number = 5;
    let giocatore2 : number =20;
    

    if (!giocatore1 || !giocatore2 || giocatore1 == 0 || giocatore2 == 0){
        console.log("Entrambi devono inserire un valore!") ;
        return;
    }else if (giocatore1==giocatore2){
        console.log('I due giocatori devono inserire valori differenti!');
        return;
    }
    generazione();
    confronto(giocatore1 , giocatore2);
}

function generazione(){
    estratto = Math.floor((Math.random()*100) + 1);
    console.log(`Numero estratto: ${estratto}`) ;
}

function confronto(valore1 : number, valore2 : number) {
    if(valore1 == estratto){
        console.log('Il giocatore 1 ha indovinato!');
    } else if (valore2 == estratto){
        console.log('Il giocatore 2 ha indovinato!')
    } else if ((Math.abs(estratto - valore1))<(Math.abs(estratto - valore2))){
        console.log('Nessuno ha indovinato nessuno, ma il giocatore 1 si è avvicinato di più');
    } else {
       console.log('Nessuno ha indovinato nessuno, ma il giocatore 2 si è avvicinato di più');
    }
}

function scrivi(){
   console.log(`${estratto}`);
}
