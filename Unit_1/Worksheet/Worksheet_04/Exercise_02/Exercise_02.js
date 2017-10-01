var idioma = prompt("es en de");

function helloWorld(i) {
  switch (i) {
    case "es":
      return "Hola mundo";
      break;
    case "en":
      return "Hello World";
      break;
    case "de":
      return "Hallo Welt";
      break;
    default:
      return "I dont understand you";
      break;
  }
};

document.write(helloWorld(idioma));
