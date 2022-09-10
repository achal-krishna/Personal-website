
const control_btn = document.querySelectorAll('.control');
const section_list = document.querySelectorAll('section');
const container = document.querySelector('.container');
(function(){
    control_btn.forEach(button => {
        button.addEventListener("click", function(e) {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            const idd = e.target.dataset.id;
            document.getElementById(idd).scrollIntoView();
        });
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
})();
container.addEventListener("scroll", function() {
    var a=container.scrollTop;
    var b=container.scrollHeight/4;
    //console.log(a,b);
    if(a<b/2){
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(".home-btn").classList.add("active-btn");
    }
    if(a>(b/2)){
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(".about-btn").classList.add("active-btn");
    }
    if(a>(3*b/2)){
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(".project-btn").classList.add("active-btn");
    }
    if(a>(5*b/2)){
        document.querySelector(".active-btn").classList.remove("active-btn");
        document.querySelector(".contact-btn").classList.add("active-btn");
    }
})

var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "success";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "error"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "error"
      });
}
form.addEventListener("submit", handleSubmit)
