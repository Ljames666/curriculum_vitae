const comments = document.getElementById("viewComments");
const user = "f0b477c9-ba44-40ee-8faa-56f8f26807cd";

api
  .get("/comments")
  .then((result) => {
    console.log(result.data);
    commentsPrint(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

const commentsSend = () => {
  var name = document.getElementById("floatingInput").value;
  var text = document.getElementById("floatingTextarea2").value;
  api
    .post("/comments", { name_user: name, message: text, user_id: user })
    .then((result) => {
      console.log(result.data);
      window.location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
};

const commentsPrint = (array) => {
  array.forEach((item) => {
    comments.innerHTML += `
        <div class="carousel-item">
          <div class="card">
             <div class="card-header">${item.name_user}</div>
                  <div class="card-body">
                     <blockquote class="blockquote mb-0">
                         <p>${item.message}</p>
                         <footer class="blockquote-footer">
                           Mais um Famoso aqui! <cite title="Source Title">Jamerson</cite>
                         </footer>
                     </blockquote>
                   </div>
                </div>
            </div>
        </div>
        `;
  });
};

// modal
// var myModal = document.getElementById("myModal");
// var myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });
