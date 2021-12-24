const projects = document.getElementById("myProjects");

api
  .get("/projects")
  .then((result) => {
    console.log(result);
    projectPrint(result.data);
  })
  .catch((err) => {
    console.error(err);
  });

const projectPrint = async (array) => {
  await array.forEach((item) => {
    projects.innerHTML += `
<div class="card m-2" style="width: 25rem;">
  <img src="${item.img1}" class="card-img-top" alt="...">  
  <div class="card-body">
    <p class="card-title h3">${item.title}</p>
    <p class="card-text">${item.description}</p>
  </div>
  <img src="${item.img2}" class="card-img-bottom" alt="...">
</div>
          `;
  });
};
