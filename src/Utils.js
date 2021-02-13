export function LoadJsonFile(filename) {
    let result = null;
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filename, false);
    xmlhttp.send();
    if (xmlhttp.status === 200) {
      result = xmlhttp.responseText;
    }
    return JSON.parse(result);
  }
  