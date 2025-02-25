function updateCarouselCard(title, description, image, ref) {
    parent = document.getElementById("project-content");
    if (window.getComputedStyle(parent).display === 'none') {
        parent.style.display = "block";
    }

    h3_tag = parent.getElementsByTagName("h3")[0];
    ref_tag = parent.getElementsByTagName("a")[0];
    img_tag = parent.getElementsByTagName("img")[0];
    img_ref = img_tag.parentNode;
    p_tag = parent.getElementsByTagName("p")[0];

    ref_tag.setAttribute("href", ref);
    img_ref.setAttribute("href", ref);

    h3_tag.innerHTML = title;
    h3_tag.appendChild(ref_tag);

    img_tag.setAttribute("src", image);
    p_tag.innerHTML = description;
}


document.addEventListener('DOMContentLoaded', function() {
    // Header animation
    let typed = new Typed('.typewriter', {
        strings: ['Software Engineer', 'Technophile', 'DevOps Enthusiast', 'Backend Obsessed'],
        typeSpeed: 120,
        loop: true
    });

    // Carousel animation
    myButton = document.getElementById("my");
    lytButton = document.getElementById("lyt");
    bfButton = document.getElementById("bf");
    mdiButton = document.getElementById("mdi");

    // Add event lister on click on buttons above to display summarize
    // of each project + Re-direct to new page
    myButton.addEventListener('click', (e) => {
        myButton.setAttribute("disabled", "");
        lytButton.removeAttribute("disabled");
        bfButton.removeAttribute("disabled");
        mdiButton.removeAttribute("disabled");

        updateCarouselCard(
            title = "MealYou",
            description = "An android application I developed to create \
                           grocery lists from a list of recipes created \
                           by the user itself. It allows user to create \
                           its own recipes without being scared of missing \
                           any ingrediants when doing its groceries!",
            image = "imgs/mealyou.png",
            ref = "pages/mealyou.html"
        );
    });

    lytButton.addEventListener('click', (e) => {
        myButton.removeAttribute("disabled");
        lytButton.setAttribute("disabled", "");
        bfButton.removeAttribute("disabled");
        mdiButton.removeAttribute("disabled");

        updateCarouselCard(
            title = "Learn Your Tables",
            description = "A website designed to help children in their \
                           learning journey of mastering arithmethic \
                           operations. It challenges the player by \
                           generating random calculs from pre-configured\
                            'tables', and ask the player to find all \
                           answers in a short period of time.",
            image = "imgs/learn-your-tables.png",
            ref = "pages/learn-your-tables.html"
        );
    });

    bfButton.addEventListener('click', (e) => {
        myButton.removeAttribute("disabled");
        lytButton.removeAttribute("disabled");
        bfButton.setAttribute("disabled", "");
        mdiButton.removeAttribute("disabled");

        updateCarouselCard(
            title = "Bird Feaver",
            description = "An android video game highly inspired by the \
                           well-known 'Flappy Bird' where the player \
                           tries to avoid hitting obstacles on its path. \
                           Each avoided obstacles increases his score by +1.",
            image = "imgs/birdfeaver.jpg",
            ref = "pages/birdfeaver.html"
        );
    });

    mdiButton.addEventListener('click', (e) => {
        myButton.removeAttribute("disabled");
        lytButton.removeAttribute("disabled");
        bfButton.removeAttribute("disabled");
        mdiButton.setAttribute("disabled", "");

        updateCarouselCard(
            title = "Million $ Idea",
            description = "This website lets you share great ideas you can't \
                          or don't want to develop yourself and discover \
                          others' ideas to bring to life. Whether you're \
                          seeking inspiration or hoping someone will build \
                          your vision, Million $ Idea connects creativity \
                          with execution!",
            image = "imgs/million-dollars-idea.png",
            ref = "pages/million-dollars-idea.html"
        );
    });
});
