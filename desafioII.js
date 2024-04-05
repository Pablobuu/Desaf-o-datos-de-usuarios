(async () => {
  let api = "https://randomuser.me/api/?results=10";
  let div = document.getElementById("user-data");
  try {
    let result = await fetch(api);
    let datos = await result.json();
    console.log(datos.results);
    datos.results.forEach((element) => {
      div.innerHTML += `<p style="text-align: center;">
      <img src="${element.picture.large}">
      <br>${element.name.first} ${element.name.last}
      <br>${element.email}<br>${element.cell}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
})();
