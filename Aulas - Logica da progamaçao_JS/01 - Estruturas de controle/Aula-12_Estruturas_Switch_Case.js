 /* estruturas de decicao */

 /* switch */

 let fruta = "laranja"

 switch (fruta){
        case "laranja":
        console.log("suco de laranja")

        case "banana":
        console.log("vitamina de banana")

        case "abacate":
        console.log("vitamina de abacate")
 }

  /* switch com break para ele para de executar e executa somente a case */


 fruta = "morango"

  switch (fruta){
         case "laranja":
         console.log("suco de laranja")
         break
 
         case "banana":
         case "morango":
         console.log("vitamina de " + fruta)
         break
 
         case "abacate":
         console.log("vitamina de abacate")
  }


  /* default - é uma mensagem generica, quando nao cair em nenhumas das condicoes */

  fruta = "pera"

  switch (fruta){
         case "laranja":
         console.log("suco de laranja")
         break
 
         case "banana":
         console.log("vitamina de banana")
         break
 
         case "abacate":
         console.log("vitamina de abacate")
         break

         default:
            console.log("suco generico")
  }