// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
    function (event) {
          function sayHello (event) {
	         this.textContent = "Said It!";
	         var name = document.getElementById("name").value;
             var message = "<h2>Hello " + name + " !</h2>";

            // document.getElementById("content").textContent = message;
             document.getElementById("content").innerHTML = message;

             if(name === "student") {
    	     var title = 
    	     document.getElementById("title").textContent;
    	     title += " & Loving It!";
    	     var title = 
    	     document.querySelector("#title").textContent = title;
             }
           }

           // Unobstructive event binding
          document.querySelector("button")
          .addEventListener("click", sayHello);
          //document.querySelector("button").onclick = sayHello;

          document.querySelector("body")
            .addEventListener("mousemove",
               function (event) {
               	if (event.shiftKey === true) {
               	console.log("x: " + event.clientX);
               	console.log("y: " + event.clientY);
                }
              }  
            );
    }
);





