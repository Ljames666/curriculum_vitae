const intro = document.getElementById("cardIntro");
const abstract = document.getElementById("abstract");
const education = document.getElementById("education");
const professional = document.getElementById("professional");

api
  .get("/users")
  .then((result) => {
    console.log(result.data);
    cardPrint(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

api
  .get("/education")
  .then((result) => {
    console.log(result.data);
    educationPrint(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

api
  .get("/professional")
  .then((result) => {
    console.log(result.data);
    professionalPrint(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const cardPrint = (array) => {
  array.forEach((user) => {
    intro.innerHTML += `
             <div class="card-body">
            <h3 class="card-title text-danger">Olá sou ${user.name}</h3>
            <h6 class="card-subtitle mb-2 text-muted">${user.title}</h6>
            <p class="card-text h1 mt-4">Olhar digital não é saber os códigos
             ou linhas de comando, é saber o que fazer com eles para chegar
              em algum lugar.</p>
          
              <a href="#about" class="text-decoration-none text-muted"> Role mais_<i class="fad fa-arrow-alt-circle-down h4"></i></a>
        </div>
             `;

    abstract.innerHTML = `<div><p class="h1 ms-4 mt-2 mb-2">${user.abstract}</p></div>`;
  });
};

const educationPrint = (array) => {
  array.forEach((edu) => {
    education.innerHTML += `
    <div class="card text-white bg-black mb-5" style="max-width: 25rem;">
    <div class="card-header">${edu.title}</div>
    <div class="card-body">
      <h5 class="card-title">${edu.institute}</h5>
      <h5 class="card-title">${edu.city} | ${edu.country}</h5>
      <p class="card-text">${edu.description}</p>
      <p class="card-text">Conclusão: ${edu.Date}</p>
    </div>
  </div>
             `;
  });
};
const professionalPrint = (array) => {
  array.forEach((edu) => {
    professional.innerHTML += `
    <div class="card text-white bg-black  mb-5" style="max-width: 25rem;">
    <div class="card-header">${edu.position}</div>
    <div class="card-body">
      <h5 class="card-title">${edu.company}</h5>
      <h5 class="card-title">${edu.city} | ${edu.country}</h5>
      <p class="card-text">${edu.description}</p>
      <p class="card-text">Tempo: ${edu.Date}</p>
    </div>
  </div>
             `;
  });
};
