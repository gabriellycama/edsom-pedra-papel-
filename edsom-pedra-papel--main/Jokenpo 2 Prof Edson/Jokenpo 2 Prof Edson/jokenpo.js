function jogar (){
     


    if(document.getElementById("pedra").checked ==false &&
      document.getElementById("papel").checked == false
       && document.getElementById("tesoura").checked == false){


        alert("seleciona algo logo")

    }
     else{

        let sorteio = Math.floor(Math.random()*3);
                 // funçao de selecionar baseado na escolha 

        switch(sorteio){
            case 0 :
             document.getElementById("pc").src="pcpedra.png";
             break;
            case 1: 
             document.getElementById("pc").src ="pcpapel.png";
             break;
            case 2: 
             document.getElementById("pc").src = "pctesoura.png";
             break;

        }

      if((document.getElementById("pedra").checked == true && soteio == 0 )||
         (document.getElementById("papel").checked == true && sorteio == 1)||
         (document.getElementById("tesoura").checked == true && sorteio == 2)){

         document.getElementById("placar").ineerHTML="EMPATE!";
      }
      else if((document.getElementById("pedra").checked = true && sorteio == 2)
        ||(document.getElementById("papel").checked == true && sorteio == 0)
        ||(document.getElementById("tesoura").checked == true && sorteio == 1)){
        {
           document.getElementById("placar").inerHTML = "voce venceu "
        }
      }
       else{
        document.getElementById("placar").inerHTML = "computador venceu "
       }
    }

    
}
function resetar(){
      document.getElementById("pc").src="pc.png";
      document.getElementById("placar").innerHTML = "";
}