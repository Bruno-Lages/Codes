let body = document.querySelector('body');    /////////identify the body element
        let script = document.querySelector("script"); /////////identify the script element
        let section = document.querySelector(".photos"); /////////identify the photos container

        

        ////////////create a gray background///////////////
        function createBackground(){
            let main = document.querySelector("main"); ///select the container to the background
            let background = document.createElement("div"); //////create a div
            background.setAttribute("class", "grayBackground"); /////set a class to the div
            main.append(background); /////////add the div to the end of the container
        }
        /////////////////////////remove the gray background
        function removeBackground(){
            let main = document.querySelector("main"); ///select the container to the background
            let background = document.querySelector(".grayBackground"); ////select the background div
            main.removeChild(background); /////////remove the background
        }
        ///////////////////remove the player if alredy exists////////////////////////
        function removePlayer(){
            /////////////////////check if the player alredy exists///////////////////////
            let removeExistentDiv = document.querySelector(".photoPlayer");
            ///////if so, remove the existent player ////////////////
            if (removeExistentDiv){
                body.removeChild(removeExistentDiv);
            }
        }

        ///////////////////////////////change the photo to the next one
        function nextPhoto(photoId){ //////receive the actual photo as parameter
            let photoPlayer = document.querySelector(".photoPlayer"); //select the photo player
            let actualImage = photoId;  /////sets the actual photo in a variable
            let parent = actualImage.parentElement; ///go to the div that contains the image
            let parentSibling = parent.nextElementSibling; //go to the next sibling of the actual image
            if (parentSibling === null || parentSibling === undefined){  ///if there's no next photo,  the funtion stop
                return photoId;
            }
            let nextImage = parentSibling.firstElementChild; //go to the photo into the div
            let nextImageUrl = nextImage.getAttribute("src"); // take the url of the image
            photoPlayer.style.backgroundImage = `url('${nextImageUrl}')`; // set the background with the image url
            return nextImage; // return the element of the actual image
        }
        ///////////////////////////////change the photo to the previous one
        function previousPhoto(photoId){ //////receive the actual photo as parameter
            let photoPlayer = document.querySelector(".photoPlayer"); //select the photo player
            let actualImage = photoId; /////sets the actual photo in a variable
            let parentImage = actualImage.parentElement; ///go to the div that contains the image
            let parentSibling = parentImage.previousElementSibling; //go to the previous sibling of the actual image
            if (parentSibling === null || parentSibling === undefined){ ///if there's no previous photo, the function stop
                return photoId;
            }
            let previousImage = parentSibling.firstElementChild; //go to the photo into the div
            let previousImageUrl = previousImage.getAttribute("src") // take the url of the image
            photoPlayer.style.backgroundImage = `url("${previousImageUrl}")`; // set the background with the image url
            return previousImage; // return the element of the actual image
        }
        //////////////////create the player photo/////////////////////////
        function createDiv(e) { 

            ///////////////create a gray background////////////////////
            createBackground();
            ////////////////////////create the player//////////////////
            let div = document.createElement("div"); ////create a div
            div.setAttribute("class", "photoPlayer"); ///set a class to the div
            body.insertBefore(div, script); /////add the div before the script element

            /////////////////////choose what photo to show///////////////
            let photoPlayer = document.querySelector(".photoPlayer"); /////select the player
            let photoId = document.getElementById(e.target.id); ///check the id of the clicked photo
            let photoUrl = photoId.getAttribute("src"); //check the url of the clicked photo
            photoPlayer.style.backgroundImage = `url('${photoUrl}')`; ///put the photo in the player

            ////////////////create the close icon/////////////
            let link = document.createElement("div"); ///create a div
            link.setAttribute("class", "closeButton"); ///set a class to the div
            photoPlayer.append(link); ///add the div in the player

            ///////////////if someone click the close icon, the player is destroyed///
            let closeButton = document.querySelector(".closeButton");///identify the button
            closeButton.addEventListener("click", removePlayer);  ///////remove the player when clicked
            closeButton.addEventListener("click", removeBackground); ///remove the gray background

            //////////////////////creating the next/previous image button////////////
            // create a next and previous button
            createPreviousButton = document.createElement("div"); 
            createNextButton = document.createElement("div"); 
            //create a class to the buttons
            createPreviousButton.setAttribute("class", "previousButton"); 
            createNextButton.setAttribute("class", "nextButton");
            //add the buttons to the photo player
            photoPlayer.append(createPreviousButton);
            photoPlayer.append(createNextButton);

            //identify the buttons
            let previousButton = document.querySelector(".previousButton");
            let nextButton = document.querySelector(".nextButton");

            ///////////when one of the buttons is clicked, got to the next or previous image////////
            nextButton.addEventListener("click", function(){
                photoId = nextPhoto(photoId); ///when the photo is changed, the new image is stored in the function, which is also the argument of the function, this makes possible change more than one time
            });
            previousButton.addEventListener("click", function(){
                photoId = previousPhoto(photoId); ///when the photo is changed, the new image is stored in the function, which is also the argument of the function, this makes possible change more than one time
            })
            
        }
        
        section.addEventListener("click", createDiv, false); ////create the player when click some photo
        