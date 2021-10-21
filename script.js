for (var i = 0; i < 130; i++) {
  
    var theImage = document.createElement('img');
      theImage.src = "./assets/flower.webp";
    theImage.innerHTML = "New div number " + i;
    theImage.classList.add("dragme");
   document.body.appendChild(theImage);
      theImage.width = "200";
      theImage.style.margin = "0px";
      // return theImage;
  }
    
  
  //Make the DIV element draggagle:
  // dragElement(document.getElementsByTagName("img"));
  
  function startDrag(e) {
    // determine event object
    if (!e) {
      var e = window.event;
    }
  
    // IE uses srcElement, others use target
    var targ = e.target ? e.target : e.srcElement;
  
    if (targ.className != 'dragme') {
      return
    };
    // calculate event X, Y coordinates
    offsetX = e.clientX;
    offsetY = e.clientY;
  
    // assign default values for top and left properties
    if (!targ.style.left) {
      targ.style.left = '0px'
    };
    if (!targ.style.top) {
      targ.style.top = '0px'
    };
  
    // calculate integer values for top and left 
    // properties
    coordX = parseInt(targ.style.left);
    coordY = parseInt(targ.style.top);
    drag = true;
  
    // move div element
    document.onmousemove = dragDiv;
  }
  
  function dragDiv(e) {
    if (!drag) {
      return 
    };
    if (!e) {
      var e = window.event
    };
    var targ = e.target ? e.target : e.srcElement;
    // move div element
    targ.style.left = coordX + e.clientX - offsetX + 'px';
    targ.style.top = coordY + e.clientY - offsetY + 'px';
    return false;
  }
  
  function stopDrag() {
    drag = false;
  }
  window.onload = function() {
    document.onmousedown = startDrag;
    document.onmouseup = stopDrag;
  }
  
  //scatter divs
  
  // collect all the divs
  var theImage = document.getElementsByTagName('img');
  // get window width and height
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  
  
  for ( var i=0; i < theImage.length; i++ ) {
       
      // shortcut! the current div in the list
      var thisImg = theImage[i];
      
      // get random numbers for each element
      randomTop = getRandomNumber(0, winHeight);
      randomLeft = getRandomNumber(0, winWidth);
      
      // update top and left position
      thisImg.style.top = randomTop +"px";
      thisImg.style.left = randomLeft +"px";
      
  }
  
  // function that returns a random number between a min and max
  function getRandomNumber(min, max) {
      
    return Math.random() * (max - min) + min;
      
  }

  function myFunction() {
    alert("You've found the Devil!");
  }