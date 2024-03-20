function traducirAPIdioma(frase) {
    
    const palabras = frase.split(" ");

    function traducirPalabra(palabra) {
        const vocales = "aeiouAEIOU";
        let palabraTraducida = "";
        for (let letra of palabra) {
            
            if (vocales.includes(letra)) {
                palabraTraducida += letra + 'p' + letra.toLowerCase();
            } else {
                palabraTraducida += letra;
            }
        }
        return palabraTraducida;
    }
    const fraseTraducida = palabras.map(traducirPalabra).join(" ");
    return fraseTraducida;
}
const fraseOriginal = process.argv.slice(2).join(" ");
if (fraseOriginal) {
    const fraseTraducida = traducirAPIdioma(fraseOriginal);
    console.log("Frase original:", fraseOriginal);
    console.log("Frase traducida:", fraseTraducida);
} else {
    console.log("Por favor ingresa una frase para traducir.");
}
