let clear = document.getElementById('limpar')
let mostrar = document.getElementById('mostrar')
let botao = document.getElementById('botao')
let pestana = document.getElementById('pestana')


//****************************************************************************************/

botao.onclick = function () {

    let input = document.getElementById('input').value

    if (input == 'c' || input == 'C'){

        cMaior()


    } else if (input == 'd' || input == 'D'){

        dMaior()

    } else if (input == 'e' || input == 'E'){

        eMaior()

    } else if (input == 'am penta shape 1' || input == 'penta am shape 1'){

        pentaAmShape1()
        
    } else if (input == 'f' || input == 'F'){

        fMaior()
        
    } else if (input == 'g' || input == 'G'){

        gMaior()
        
    } else if (input == 'a' || input == 'A'){

        aMaior()
        
    } else if (input == 'b' || input == 'B'){

        bMaior()
        
    } else if (input == 'c7' || input == 'C7'){

        c7()
        
    } else if (input == 'd7' || input == 'D7'){

        d7()
        
    } else if (input == 'e7' || input == 'E7'){

        e7()
        
    }


    



    
}
//******************************************************************************************************* */
let corda1_casa0 = document.getElementById('corda1_casa0')
let corda1_casa1 = document.getElementById('corda1_casa1')
let corda1_casa2 = document.getElementById('corda1_casa2')
let corda1_casa3 = document.getElementById('corda1_casa3')
let corda1_casa4 = document.getElementById('corda1_casa4')
let corda1_casa5 = document.getElementById('corda1_casa5')
let corda1_casa6 = document.getElementById('corda1_casa6')
let corda1_casa7 = document.getElementById('corda1_casa7')
let corda1_casa8 = document.getElementById('corda1_casa8')
let corda1_casa9 = document.getElementById('corda1_casa9')
let corda1_casa10 = document.getElementById('corda1_casa10')
let corda1_casa11 = document.getElementById('corda1_casa11')
let corda1_casa12 = document.getElementById('corda1_casa12')
//****************************************************************/
let corda2_casa0 = document.getElementById('corda2_casa0')
let corda2_casa1 = document.getElementById('corda2_casa1')
let corda2_casa2 = document.getElementById('corda2_casa2')
let corda2_casa3 = document.getElementById('corda2_casa3')
let corda2_casa4 = document.getElementById('corda2_casa4')
let corda2_casa5 = document.getElementById('corda2_casa5')
let corda2_casa6 = document.getElementById('corda2_casa6')
let corda2_casa7 = document.getElementById('corda2_casa7')
let corda2_casa8 = document.getElementById('corda2_casa8')
let corda2_casa9 = document.getElementById('corda2_casa9')
let corda2_casa10 = document.getElementById('corda2_casa10')
let corda2_casa11 = document.getElementById('corda2_casa11')
let corda2_casa12 = document.getElementById('corda2_casa12')
//****************************************************************/
let corda3_casa0 = document.getElementById('corda3_casa0')
let corda3_casa1 = document.getElementById('corda3_casa1')
let corda3_casa2 = document.getElementById('corda3_casa2')
let corda3_casa3 = document.getElementById('corda3_casa3')
let corda3_casa4 = document.getElementById('corda3_casa4')
let corda3_casa5 = document.getElementById('corda3_casa5')
let corda3_casa6 = document.getElementById('corda3_casa6')
let corda3_casa7 = document.getElementById('corda3_casa7')
let corda3_casa8 = document.getElementById('corda3_casa8')
let corda3_casa9 = document.getElementById('corda3_casa9')
let corda3_casa10 = document.getElementById('corda3_casa10')
let corda3_casa11 = document.getElementById('corda3_casa11')
let corda3_casa12 = document.getElementById('corda3_casa12')
//****************************************************************/
let corda4_casa0 = document.getElementById('corda4_casa0')
let corda4_casa1 = document.getElementById('corda4_casa1')
let corda4_casa2 = document.getElementById('corda4_casa2')
let corda4_casa3 = document.getElementById('corda4_casa3')
let corda4_casa4 = document.getElementById('corda4_casa4')
let corda4_casa5 = document.getElementById('corda4_casa5')
let corda4_casa6 = document.getElementById('corda4_casa6')
let corda4_casa7 = document.getElementById('corda4_casa7')
let corda4_casa8 = document.getElementById('corda4_casa8')
let corda4_casa9 = document.getElementById('corda4_casa9')
let corda4_casa10 = document.getElementById('corda4_casa10')
let corda4_casa11 = document.getElementById('corda4_casa11')
let corda4_casa12 = document.getElementById('corda4_casa12')
//****************************************************************/
let corda5_casa0 = document.getElementById('corda5_casa0')
let corda5_casa1 = document.getElementById('corda5_casa1')
let corda5_casa2 = document.getElementById('corda5_casa2')
let corda5_casa3 = document.getElementById('corda5_casa3')
let corda5_casa4 = document.getElementById('corda5_casa4')
let corda5_casa5 = document.getElementById('corda5_casa5')
let corda5_casa6 = document.getElementById('corda5_casa6')
let corda5_casa7 = document.getElementById('corda5_casa7')
let corda5_casa8 = document.getElementById('corda5_casa8')
let corda5_casa9 = document.getElementById('corda5_casa9')
let corda5_casa10 = document.getElementById('corda5_casa10')
let corda5_casa11 = document.getElementById('corda5_casa11')
let corda5_casa12 = document.getElementById('corda5_casa12')
//****************************************************************/
let corda6_casa0 = document.getElementById('corda6_casa0')
let corda6_casa1 = document.getElementById('corda6_casa1')
let corda6_casa2 = document.getElementById('corda6_casa2')
let corda6_casa3 = document.getElementById('corda6_casa3')
let corda6_casa4 = document.getElementById('corda6_casa4')
let corda6_casa5 = document.getElementById('corda6_casa5')
let corda6_casa6 = document.getElementById('corda6_casa6')
let corda6_casa7 = document.getElementById('corda6_casa7')
let corda6_casa8 = document.getElementById('corda6_casa8')
let corda6_casa9 = document.getElementById('corda6_casa9')
let corda6_casa10 = document.getElementById('corda6_casa10')
let corda6_casa11 = document.getElementById('corda6_casa11')
let corda6_casa12 = document.getElementById('corda6_casa12')
//*****************************************************************************************************/


let corda1 = [corda1_casa0, corda1_casa1, corda1_casa2, corda1_casa3, corda1_casa4, corda1_casa5, corda1_casa6, corda1_casa7, corda1_casa8, corda1_casa9, corda1_casa10, corda1_casa11, corda1_casa12]
let corda2 = [corda2_casa0, corda2_casa1, corda2_casa2, corda2_casa3, corda2_casa4, corda2_casa5, corda2_casa6, corda2_casa7, corda2_casa8, corda2_casa9, corda2_casa10, corda2_casa11, corda2_casa12]
let corda3 = [corda3_casa0, corda3_casa1, corda3_casa2, corda3_casa3, corda3_casa4, corda3_casa5, corda3_casa6, corda3_casa7, corda3_casa8, corda3_casa9, corda3_casa10, corda3_casa11, corda3_casa12]
let corda4 = [corda4_casa0, corda4_casa1, corda4_casa2, corda4_casa3, corda4_casa4, corda4_casa5, corda4_casa6, corda4_casa7, corda4_casa8, corda4_casa9, corda4_casa10, corda4_casa11, corda4_casa12]
let corda5 = [corda5_casa0, corda5_casa1, corda5_casa2, corda5_casa3, corda5_casa4, corda5_casa5, corda5_casa6, corda5_casa7, corda5_casa8, corda5_casa9, corda5_casa10, corda5_casa11, corda5_casa12]
let corda6 = [corda6_casa0, corda6_casa1, corda6_casa2, corda6_casa3, corda6_casa4, corda6_casa5, corda6_casa6, corda6_casa7, corda6_casa8, corda6_casa9, corda6_casa10, corda6_casa11, corda6_casa12]

//******************************************************************************************************/

let escalas = document.getElementById ('escalas')
let acordes = document.getElementById ('acordes')
let arpejos = document.getElementById ('arpejos')
let quadroEscalas = document.getElementById ('quadroEscalas')
let quadroAcordes = document.getElementById ('quadroAcordes')
let quadroArpejos = document.getElementById ('quadroArpejos')

quadroEscalas.onmouseleave = function () {

    quadroEscalas.style.display = 'none'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'
    
}

quadroAcordes.onmouseleave = function () {

    quadroAcordes.style.display = 'none'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'
    
}

quadroArpejos.onmouseleave = function () {

    quadroArpejos.style.display = 'none'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    
}

acordes.onmouseover = function () {

    quadroAcordes.style.display = 'block'
    acordes.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroEscalas.style.display = 'none'

    
    
    
    
}

arpejos.onmouseover = function () {

    quadroArpejos.style.display = 'block'
    arpejos.style.backgroundColor = 'black'
    escalas.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroAcordes.style.display = 'none'
    quadroEscalas.style.display = 'none'
    
    
    
}


escalas.onmouseover = function () {

    quadroEscalas.style.display = 'block'
    escalas.style.backgroundColor = 'black'
    arpejos.style.backgroundColor = 'rgb(112, 112, 112)'
    acordes.style.backgroundColor = 'rgb(112, 112, 112)'

    quadroArpejos.style.display = 'none'
    quadroAcordes.style.display = 'none'
    
    
    
}


clear.onclick = function limpar() {

    pestana.style.display = 'none'
    
    
    for (i = 0; i < 13; i++){

        corda1[i].style.display = 'none'

    }

    for (i = 0; i < 13; i++){

        corda2[i].style.display = 'none'

    }

    for (i = 0; i < 13; i++){

        corda3[i].style.display = 'none'

    }

    for (i = 0; i < 13; i++){

        corda4[i].style.display = 'none'

    }

    for (i = 0; i < 13; i++){

        corda5[i].style.display = 'none'

    }

    for (i = 0; i < 13; i++){

        corda6[i].style.display = 'none'

    }
}


mostrar.onclick = function mostrar() {
    
    
    for (i = 0; i < 13; i++){

        corda1[i].style.display = 'block'

    }

    for (i = 0; i < 13; i++){

        corda2[i].style.display = 'block'

    }

    for (i = 0; i < 13; i++){

        corda3[i].style.display = 'block'

    }

    for (i = 0; i < 13; i++){

        corda4[i].style.display = 'block'

    }

    for (i = 0; i < 13; i++){

        corda5[i].style.display = 'block'

    }

    for (i = 0; i < 13; i++){

        corda6[i].style.display = 'block'

    }
}
//************************************************************************************************** */
function cMaior() {

    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'
    
}

//************************************************************************************************** */
function c7() {

    apagar()

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[3].style.display = 'block'
    corda3[3].style.backgroundColor = 'greenyellow'
    corda3[3].innerHTML = 'Bb'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    
    
}

//********************************************************************************************** */

function dMaior() {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'
    
}

//*************************************************************************************** */

function d7() {

    apagar()

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[1].style.display = 'block'
    corda2[1].style.backgroundColor = 'greenyellow'

    corda1[2].style.display = 'block'
    corda1[2].style.backgroundColor = 'greenyellow'
    
}

function eMaior() {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[0].style.display = 'block'
    corda2[0].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'
    
}

//************************************************************************************** */
function e7() {

    apagar()

    corda6[0].style.display = 'block'
    corda6[0].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[1].style.display = 'block'
    corda3[1].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'
    
}

function fMaior() {

    apagar()
    pestana.style.display = 'block'
    pestana.style.left = '140px'

    

    corda5[3].style.display = 'block'
    corda5[3].style.backgroundColor = 'greenyellow'

    corda4[3].style.display = 'block'
    corda4[3].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

   
    
}

function gMaior() {

    apagar()

    corda6[3].style.display = 'block'
    corda6[3].style.backgroundColor = 'greenyellow'

    corda5[2].style.display = 'block'
    corda5[2].style.backgroundColor = 'greenyellow'

    corda4[0].style.display = 'block'
    corda4[0].style.backgroundColor = 'greenyellow'

    corda3[0].style.display = 'block'
    corda3[0].style.backgroundColor = 'greenyellow'

    corda2[3].style.display = 'block'
    corda2[3].style.backgroundColor = 'greenyellow'

    corda1[3].style.display = 'block'
    corda1[3].style.backgroundColor = 'greenyellow'

    
}

function aMaior() {

    apagar()

    corda5[0].style.display = 'block'
    corda5[0].style.backgroundColor = 'greenyellow'

    corda4[2].style.display = 'block'
    corda4[2].style.backgroundColor = 'greenyellow'

    corda3[2].style.display = 'block'
    corda3[2].style.backgroundColor = 'greenyellow'

    corda2[2].style.display = 'block'
    corda2[2].style.backgroundColor = 'greenyellow'

    corda1[0].style.display = 'block'
    corda1[0].style.backgroundColor = 'greenyellow'
    
}

function bMaior() {

    apagar()

    pestana.style.display = 'block'
    pestana.style.left = '220px'

    corda4[4].style.display = 'block'
    corda4[4].style.backgroundColor = 'greenyellow'

    corda3[4].style.display = 'block'
    corda3[4].style.backgroundColor = 'greenyellow'

    corda2[4].style.display = 'block'
    corda2[4].style.backgroundColor = 'greenyellow'    
}


function apagar() {

    pestana.style.display = 'none'

    for (i = 0; i < 13; i++){

        corda1[i].style.display = 'none'
        corda2[i].style.display = 'none'
        corda3[i].style.display = 'none'
        corda4[i].style.display = 'none'
        corda5[i].style.display = 'none'
        corda6[i].style.display = 'none'

    }  
    
}

apagar()