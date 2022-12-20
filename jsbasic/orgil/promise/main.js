let imgDisp = document.querySelector("#result");
let urlImg = "https://images.unsplash.com/photo-1671418193953-9402c71d612d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";

const newPromise = new Promise((myResolve, reject) => {
    
    setTimeout(() => {
        if (urlImg !== null) {
          myResolve();
        } else {
          reject();
        }
    }, 2000);
});

newPromise
  .then(function (url) {
    displayImage(url);
  })
  .catch((err) => {
    console.error("Error uuslee: " + err);
    console.log(err);
  })
  .finally(() => {
    console.log("Finally worked");
  });

function displayImage(value) {
  imgDisp.innerHTML = `<img src="${value}" width="300" crossorigin="anonymous"/>`;
}
