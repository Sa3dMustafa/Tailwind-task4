let btnOpen =document.getElementById("open");
            let btnClose =document.getElementById("close");
            let navbar=document.getElementById("navbar");

            btnClose.onclick = function() {
                navbar.classList.add("hidden");
                this.classList.add("hidden");
                btnOpen.classList.remove("hidden");
            }

            btnOpen.onclick =function() {
                this.classList.add("hidden");
                navbar.classList.remove("hidden");
                btnClose.classList.remove("hidden");
            }

            const optionElement = document.querySelector(".option");
            const menuElement = optionElement.querySelector(".menu");
            const upArrow = optionElement.querySelector(".up");
            const downArrow = optionElement.querySelector(".down");

            // Function to show the menu and switch arrows
            function showMenu() {
            menuElement.classList.remove("hidden");
            upArrow.classList.remove("hidden");
            downArrow.classList.add("hidden");
            }

            // Function to hide the menu and switch arrows
            function hideMenu() {
            menuElement.classList.add("hidden");
            upArrow.classList.add("hidden");
            downArrow.classList.remove("hidden");
            }

            // Initial state: menu and up arrow hidden, down arrow visible
            hideMenu();

            // Add click event listener to the arrows
            upArrow.onclick = hideMenu;
            downArrow.onclick = showMenu;
