const address = document.getElementById("address");

api
  .get("/address")
  .then((result) => {
    console.log(result.data);
    result.data.forEach((add) => {
      address.innerHTML = `<p> Rua ${add.street}, ${add.number} | ${add.city} - ${add.state} | ${add.country}</p>`;
    });
  })
  .catch((error) => {
    console.log(error);
  });
api
  .get("/email-address")
  .then((result) => {
    console.log(result.data);

    address.innerHTML += `<p> Email: ${result.data[0].email}  </p>`;
  })
  .catch((error) => {
    console.log(error);
  });
api
  .get("/phone")
  .then((result) => {
    console.log(result.data);
    address.innerHTML += `<p> Telefone: (55) ${result.data[0].phoneNumber}  </p>`;
  })
  .catch((error) => {
    console.log(error);
  });

const createContact = () => {
  const name = document.getElementById("inputName4").value;
  const email = document.getElementById("inputEmail").value;
  const phone = document.getElementById("inputPhone4").value;
  const message = document.getElementById("inputMessage2").value;
  const user = "f0b477c9-ba44-40ee-8faa-56f8f26807cd";
  api
    .post("/contacts", {
      name: name,
      email: email,
      phone: phone,
      message: message,
      user_id: user,
    })
    .then((result) => {
      console.log(result);
      name = "";
      email = "";
      phone = "";
      message = "";
      user = "";
    })
    .catch((error) => console.log(error));
};
