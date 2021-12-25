const projects = document.getElementById("myProjects");

api
  .get("/projects")
  .then((result) => {
    projectPrint(result.data);
  })
  .catch((err) => {
    console.error(err);
  });

const projectPrint = async (array) => {
  await array.forEach((item) => {
    projects.innerHTML += `
<div class="card mt-2 mb-5 bg-black text-light text-center" style="width: 30rem;">
  <img src="${item.img1}" class="card-img-top" alt="${item.title} img1">  
  <div class="card-body m-5">
    <p class="card-title h3 mb-3">${item.title}</p>
    <p class="card-text mb-3">${item.description}</p>
    <p class="card-text">Ano: ${item.Date}</p>
  </div>
  <img src="${item.img2}" class="card-img-bottom" alt="${item.title} img2">
</div>
          `;
  });
};
