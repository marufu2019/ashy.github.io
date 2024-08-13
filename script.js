var icon = document.getElementById("icon");

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "17945a6d-90dc-4993-920e-6569ee02e922");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)        }
  };


  icon.onclick = function(){
      document.body.classList.toggle("dark-theme");
      if(document.body.classList.contains("dark-theme")){
          icon.src = "moon.png";
      } else {
          icon.src = "sun.png";
      }
  }


var sideMenu = document.getElementById("sideMenu")

function openMenu(){
  sideMenu.style.right = "0";
}
function closeMenu(){
  sideMenu.style.right = "-350px";
}