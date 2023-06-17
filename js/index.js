function printInHTML(lines) {
    var outputElement = $('#output');
  
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var parts = line.split(',');
  
      if (parts.length === 2) {
        var title = parts[0].trim();
        var price = parts[1].trim();

        var dishElement = $('<div></div>').text(title + ' ' + price);
  
        var titleElement = $('<h2></h2>').text(title);
        var priceElement = $('<h2></h2>').text(price);

        titleElement.addClass('titolo');
        priceElement.addClass('prezzo');
        
        outputElement.append(titleElement);
        outputElement.append(priceElement);
      }
    }
  }
  
  function readFile() {
    var filePath = 'fileReader/primi.txt'; // Percorso relativo del file di testo
  
    $.get(filePath, function(contents) {
      var lines = contents.split('\n');
      printInHTML(lines);
    });
  }
  
  // Esegui la lettura del file
  readFile();