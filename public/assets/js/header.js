const social = document.getElementById("redes");
const userId = "f0b477c9-ba44-40ee-8faa-56f8f26807cd";
api
  .get("/social-networks")
  .then((result) => {
    netPrint(result.data, userId);
  })
  .catch((err) => {
    console.log(err);
  });

const netPrint = (array, id) => {
  array.forEach((element) => {
    if (element.user_id === id) {
      social.innerHTML += `<a href="${element.url}" target="_blank"><i class="${element.icon}"></i></a>`;
    } else {
      console.log("So");
    }
  });
};
