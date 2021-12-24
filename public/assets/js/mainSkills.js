const skills = document.getElementById("mySkills");

api
  .get("/skills")
  .then((result) => {
    skillPrint(result.data);
  })
  .catch((err) => {
    console.error(err);
  });

const skillPrint = (array) => {
  array.forEach((item) => {
    let img =
      item.imgurl !== null
        ? item.imgurl
        : "./assets/images/Dollify-e6863119-95a5-4e5c-987c-08ba635ba453-3.png";
    skills.innerHTML += `
          <div class="card m-5" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-title">${item.title}</p>
    <p class="card-text">${item.description}</p>
  </div>
</div>
          `;
  });
};
