const scroller = scrollama();

function handleResize() {
  scroller.resize();
}

function init() {
  scroller
    .setup({
      step: ".story-section",
      offset: 0.6,
    })
    .onStepEnter((response) => {
      response.element.classList.add("is-active");
    });
}

window.addEventListener("resize", handleResize);
init();

/* ==========================================
   SECTION 2 — ISLAND SCROLL ANIMATION
========================================== */

const islandsSection = document.querySelector("#islands");

const islandCards = document.querySelectorAll(".island-card");

const islandsConclusion =
    document.querySelector(".islands-conclusion");


const islandsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                islandCards.forEach((card, index) => {

                    setTimeout(() => {

                        card.classList.add("visible");

                    }, index * 180);

                });


                setTimeout(() => {

                    if (islandsConclusion) {
                        islandsConclusion.classList.add("visible");
                    }

                }, 1200);

            }

        });

    },
    {
        threshold: 0.25
    }
);


if (islandsSection) {
    islandsObserver.observe(islandsSection);
}

