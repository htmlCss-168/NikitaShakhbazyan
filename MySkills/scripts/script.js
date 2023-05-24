function Nick() {
    var x = document.getElementById("js");
    if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    

      let clock = 5;

      if (clock <= 5) {
          alert("შეგიძლია გაისეირნო");
      } else if (clock > 5) {
          alert ("დარჩი სახლში");
      } else {
          alert ("დაიძინე");
      }
}
