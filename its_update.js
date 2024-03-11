async function its() {
    //LEGARE FILE JSON A JAVASCRIPT 
    const response = await fetch('https://raw.githubusercontent.com/dariusk/corpora/master/data/technology/programming_languages_popular.json');
    const json = await response.json();

    //Recupera SPAN 
    let divisioni = document.getElementsByTagName("span");
    console.log(divisioni.length);                        //Ci sono 199 elementi con tag span 

    /*for(let i=0; i < divisioni.length; i++) {
        console.log("Indice: " + i + " " + divisioni[i].innerHTML);
    }                                                     //Torna elementi con tag span sulla console*/

    
    divisioni[7].innerHTML = '<a href="https://it.wikipedia.org/wiki/Assembly" target="_blank">' + json.programming_languages_popular[0] + '</a>';
    divisioni[9].innerHTML = '<a href="https://it.wikipedia.org/wiki/Batchfile" target="_blank">' + json.programming_languages_popular[1] + '</a>';
    divisioni[17].innerHTML = '<a href="https://it.wikipedia.org/wiki/C" target="_blank">' + json.programming_languages_popular[2] + '</a>';
    divisioni[19].innerHTML = '<a href="https://it.wikipedia.org/wiki/C_sharp" target="_blank">' + json.programming_languages_popular[3] + '</a>';
    divisioni[27].innerHTML = '<a href="https://it.wikipedia.org/wiki/C++" target="_blank">' + json.programming_languages_popular[4] + '</a>';
    divisioni[33].innerHTML = '<a href="https://it.wikipedia.org/wiki/Clojure" target="_blank">' + json.programming_languages_popular[5] + '</a>';
    divisioni[35].innerHTML = '<a href="https://it.wikipedia.org/wiki/CoffeeScript" target="_blank">' + json.programming_languages_popular[6] + '</a>';
    divisioni[39].innerHTML = '<a href="https://it.wikipedia.org/wiki/Dart" target="_blank">' + json.programming_languages_popular[7] + '</a>';

    //Sostituire immagine
    let img = document.getElementsByTagName("img");
    //console.log(img);
    img[0].src="https://logospng.org/download/w3schools/w3schools-2048.png";
}

its();