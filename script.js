/* =====================================================
   MPOWERTALK — 8 SECOND OPENING
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader =
        document.getElementById("loader");

    const exitLayer =
        document.getElementById("exitLayer");


    /* ==========================================
       TOTAL EXPERIENCE
    =========================================== */

    const totalDuration = 8000;


    /* ==========================================
       START EXIT ANIMATION
    =========================================== */

    setTimeout(() => {

        if (!exitLayer) return;

        exitLayer.style.transition =
            "transform 0.9s cubic-bezier(.76,0,.24,1)";

        exitLayer.style.transform =
            "scaleY(1)";

    }, 7350);


    /* ==========================================
       SHOW WEBSITE + NAVBAR
    =========================================== */

    setTimeout(() => {

        if (!loader) return;

        loader.style.transition =
            "opacity .45s ease";

        loader.style.opacity =
            "0";


        /* SHOW NAVBAR */

        document.body.classList.add(
            "site-ready"
        );


        setTimeout(() => {

            if (loader) {
                loader.remove();
            }

            document.body.style.overflow =
                "auto";

        }, 500);

    }, totalDuration);

});


/* =====================================================
   NAVBAR ELEMENTS
===================================================== */

const siteHeader =
    document.getElementById("siteHeader");

const menuTrigger =
    document.getElementById("menuTrigger");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");


/* =====================================================
   SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", () => {

    if (!siteHeader) return;

    if (window.scrollY > 40) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );

    }

});


/* =====================================================
   OPEN MOBILE MENU
===================================================== */

if (menuTrigger && mobileMenu) {

    menuTrigger.addEventListener(
        "click",
        () => {

            mobileMenu.classList.add(
                "open"
            );

            menuTrigger.classList.add(
                "active"
            );

            menuTrigger.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove(
        "open"
    );


    if (menuTrigger) {

        menuTrigger.classList.remove(
            "active"
        );

        menuTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    document.body.style.overflow =
        "auto";
}


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (mobileClose) {

    mobileClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


/* =====================================================
   CLOSE AFTER CLICKING LINK
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-link"
    );


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* =====================================================
   ESC KEY CLOSE
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            mobileMenu.classList.contains("open")
        ) {

            closeMobileMenu();

        }

    }
);

/* =========================================================
   MPOWERTALK — FOUNDER STORY
   CLEAN WORD-BY-WORD REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const founderSection =
        document.querySelector(".mp-founder-story");

    if (!founderSection) return;


    function showFounder() {

        if (
            founderSection.classList.contains("is-visible")
        ) {
            return;
        }

        founderSection.classList.add("is-visible");
    }


    /* Wait until opening loader finishes */

    if (
        document.body.classList.contains("site-ready")
    ) {

        setTimeout(showFounder, 150);

        return;
    }


    const observer =
        new MutationObserver(() => {

            if (
                document.body.classList.contains(
                    "site-ready"
                )
            ) {

                observer.disconnect();

                setTimeout(
                    showFounder,
                    150
                );
            }

        });


    observer.observe(
        document.body,
        {
            attributes: true,
            attributeFilter: ["class"]
        }
    );

});

/* =========================================================
   MPOWERTALK — SECTION 02

   HERO
      ↓
   FULL WORKSHOP VIDEO
      ↓
   ONE WORD AT A TIME
      ↓
   ABOUT MPOWER TALK

   Clean sequential word reveal
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const section =
        document.getElementById("about");

    const stage =
        document.getElementById("mp2Stage");

    const track =
        section?.querySelector(".mp2-track");

    const videoWrap =
        document.getElementById("mp2VideoWrap");

    const video =
        document.getElementById("mp2Video");

    const wordField =
        document.getElementById("mp2WordField");

    const people =
        document.querySelector(
            ".mp2-word-people"
        );

    const ideas =
        document.querySelector(
            ".mp2-word-ideas"
        );

    const conversations =
        document.querySelector(
            ".mp2-word-conversations"
        );

    const inspiration =
        document.querySelector(
            ".mp2-word-inspiration"
        );

    const aboutLabel =
        document.getElementById(
            "mp2AboutLabel"
        );

    const copy =
        document.getElementById(
            "mp2Copy"
        );

    const scrollNote =
        document.querySelector(
            ".mp2-scroll-note"
        );


    /* =====================================================
       SAFETY
    ===================================================== */

    if (
        !section ||
        !stage ||
        !track ||
        !videoWrap ||
        !video ||
        !wordField
    ) {

        return;

    }


    /* =====================================================
       HELPERS
    ===================================================== */

    const clamp = (
        value,
        min = 0,
        max = 1
    ) => {

        return Math.max(
            min,
            Math.min(
                max,
                value
            )
        );

    };


    const ease = value => {

        const x =
            clamp(value);

        return (
            x *
            x *
            (3 - 2 * x)
        );

    };


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function getProgress() {

  const rect =
    section.getBoundingClientRect();

  const sectionTop =
    rect.top;

  const scrollDistance =
    section.offsetHeight -
    window.innerHeight;


  if (scrollDistance <= 0) {
    return 0;
  }


  const progress =
    -sectionTop /
    scrollDistance;


  return clamp(
    progress
  );

}


    /* =====================================================
       VIDEO CONTROL
    ===================================================== */

    let videoPlaying = false;


    function playWorkshop() {

        if (
            videoPlaying ||
            !video
        ) {

            return;

        }


        videoPlaying = true;

        video.muted = true;

        video.play().catch(() => {

            videoPlaying = false;

        });

    }


    function pauseWorkshop() {

        if (!video) {

            return;

        }

        video.pause();

        videoPlaying = false;

    }


    /* =====================================================
       VIDEO LOOP
    ===================================================== */

    video.addEventListener(
        "ended",
        () => {

            video.currentTime = 0;

            video.play().catch(() => {});

        }
    );


    /* =====================================================
       WORD CONFIGURATION

       Each word gets its own moment.

       PEOPLE
       30% → 42%

       IDEAS
       44% → 56%

       CONVERSATIONS
       58% → 70%

       INSPIRATION
       72% → 84%
    ===================================================== */

    const words = [

    {
        element: people,
        start: 0.26,
        end: 0.40,
        x: -115,
        y: -18
    },

    {
        element: ideas,
        start: 0.41,
        end: 0.55,
        x: 115,
        y: -4
    },

    {
        element: conversations,
        start: 0.56,
        end: 0.70,
        x: -115,
        y: 12
    },

    {
        element: inspiration,
        start: 0.71,
        end: 0.84,
        x: 115,
        y: 28
    }

];


    /* =====================================================
       WORD ANIMATION
    ===================================================== */

    function renderWord(
        item,
        progress
    ) {

        if (!item.element) {

            return;

        }


        const el =
            item.element;


        /*
           Before word starts
        */

        if (
            progress <
            item.start
        ) {

            el.style.opacity = "0";

            el.style.transform =
                `
                translate3d(
                    calc(-50% + ${item.x}vw),
                    calc(-50% + ${item.y}vh),
                    0
                )
                scale(.94)
                `;

            return;

        }


        /*
           AFTER word finishes
        */

        if (
            progress >
            item.end
        ) {

            el.style.opacity = "0";

            el.style.transform =
                `
                translate3d(
                    -50%,
                    calc(-50% + ${item.y}vh),
                    0
                )
                scale(.98)
                `;

            return;

        }


        /*
           Local progress
        */

        const local =
            clamp(
                (
                    progress -
                    item.start
                ) /
                (
                    item.end -
                    item.start
                )
            );


        /*
           Fade in
           0 → 25%
        */

        const fadeIn =
            ease(
                clamp(
                    local / .25
                )
            );


        /*
           Fade out
           75% → 100%
        */

        const fadeOut =
            1 -
            ease(
                clamp(
                    (local - .75) /
                    .25
                )
            );


        const opacity =
            Math.min(
                fadeIn,
                fadeOut
            );


        /*
           Movement

           Starts from left/right
           slowly settles into center
        */

        const movement =
            ease(local);


        const x =
            item.x *
            (1 - movement);


        /*
           Small vertical rise

           This keeps every word
           on a different level.
        */

        const y =
            item.y -
            (
                movement *
                2
            );


        const scale =
            .94 +
            movement *
            .06;


        el.style.opacity =
            String(opacity);


        el.style.transform =
            `
            translate3d(
                calc(-50% + ${x}vw),
                calc(-50% + ${y}vh),
                0
            )
            scale(${scale})
            `;

    }


    /* =====================================================
       MAIN RENDER
    ===================================================== */

    let raf = 0;


    function render() {

        raf = 0;


        const p =
            getProgress();


        /* =================================================
           01 — VIDEO
        ================================================= */

       const videoIn =
    ease(
        clamp(
            p / .06
        )
    );

const videoOut =
    ease(
        clamp(
            (p - .84) /
            .12
        )
    );


        videoWrap.style.opacity =
            String(
                videoIn *
                (1 - videoOut)
            );


        videoWrap.style.transform =
            `
            scale(
                ${1.015 +
                videoOut * .035}
            )
            `;


        /* =================================================
           VIDEO PLAY
        ================================================= */

        if (
            p > .01 &&
            p < .90
        ) {

            playWorkshop();

        } else {

            pauseWorkshop();

        }


        /* =================================================
           02 — WORD FIELD
        ================================================= */

        const wordIn =
            ease(
                clamp(
                    (p - .25) /
                    .06
                )
            );


        const wordOut =
            1 -
            ease(
                clamp(
                    (p - .87) /
                    .06
                )
            );


        wordField.style.opacity =
            String(
                wordIn *
                wordOut
            );


        /* =================================================
           ONE WORD AT A TIME
        ================================================= */

        words.forEach(
            item => {

                renderWord(
                    item,
                    p
                );

            }
        );


        /* =================================================
           03 — ABOUT
        ================================================= */

        const aboutProgress =
            ease(
                clamp(
                    (p - .88) /
                    .12
                )
            );


        if (aboutLabel) {

            aboutLabel.style.opacity =
                String(
                    aboutProgress
                );


            aboutLabel.style.transform =
                `
                translate3d(
                    0,
                    ${45 -
                    aboutProgress *
                    45}px,
                    0
                )
                scale(
                    ${.94 +
                    aboutProgress *
                    .06}
                )
                `;

        }


        /* =================================================
           ABOUT COPY
        ================================================= */

        if (copy) {

            copy.style.opacity =
                String(
                    aboutProgress
                );


            copy.style.transform =
                `
                translate3d(
                    0,
                    ${50 -
                    aboutProgress *
                    50}px,
                    0
                )
                `;

        }


        /* =================================================
           SCROLL INDICATOR
        ================================================= */

        if (scrollNote) {

            scrollNote.style.opacity =
                String(
                    Math.max(
                        0,
                        1 -
                        p * 5
                    )
                );

        }


        /* =================================================
           VIDEO STATE
        ================================================= */

        stage.classList.toggle(
            "is-video",
            p >= .01 &&
            p < .90
        );

    }


    /* =====================================================
       REQUEST RENDER
    ===================================================== */

    function requestRender() {

        if (raf) {

            return;

        }


        raf =
            requestAnimationFrame(
                render
            );

    }


    /* =====================================================
       SCROLL
    ===================================================== */

    window.addEventListener(
        "scroll",
        requestRender,
        {
            passive: true
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        requestRender,
        {
            passive: true
        }
    );


    /* =====================================================
       INITIAL
    ===================================================== */

    requestAnimationFrame(
        render
    );

});
/* =====================================================
   SECTION 03 — WHY MPOWER TALK
   MICROPHONE + WORD STORY
===================================================== */

(function () {

    const section =
        document.querySelector(
            "#programs"
        );

    if (!section) return;


    const track =
        section.querySelector(
            ".mp3-track"
        );

    const intro =
        section.querySelector(
            ".mp3-intro"
        );

    const board =
        section.querySelector(
            ".mp3-board"
        );

    const rows =
        [
            ...section.querySelectorAll(
                ".mp3-row"
            )
        ];

    const micWrap =
        section.querySelector(
            ".mp3-mic-wrap"
        );

    const micVideo =
        section.querySelector(
            "#mp3MicVideo"
        );

    const final =
        section.querySelector(
            ".mp3-final"
        );


    if (
        !track ||
        !intro ||
        !board ||
        !rows.length ||
        !micWrap ||
        !micVideo ||
        !final
    ) {
        return;
    }


    let currentProgress = 0;

    let targetProgress = 0;

    let raf = 0;

    let videoReady = false;


    /* =====================================================
       HELPERS
    ===================================================== */

    function clamp(
        value,
        min = 0,
        max = 1
    ) {

        return Math.max(
            min,
            Math.min(
                max,
                value
            )
        );

    }


    function ease(value) {

        const x =
            clamp(value);

        return (
            x *
            x *
            (3 - 2 * x)
        );

    }


    /* =====================================================
       SCROLL PROGRESS
    ===================================================== */

    function getProgress() {

        const rect =
            section.getBoundingClientRect();

        const total =
            track.offsetHeight -
            window.innerHeight;


        if (total <= 0) {
            return 0;
        }


        return clamp(
            -rect.top /
            total
        );

    }


    /* =====================================================
       VIDEO
    ===================================================== */

micVideo.muted = true;
micVideo.playsInline = true;

function markVideoReady() {

    videoReady = true;

    requestRender();

}


/* Video metadata */

micVideo.addEventListener(
    "loadedmetadata",
    markVideoReady
);


/* Some browsers fire loadeddata
   instead of being ready exactly
   when we expect metadata. */

micVideo.addEventListener(
    "loadeddata",
    markVideoReady
);


/* If browser already loaded it
   before JS reached this point. */

if (
    micVideo.readyState >= 1
) {

    videoReady = true;

}


/* Force browser to load the source */

micVideo.load();

micVideo.pause();


    /* =====================================================
       MAIN RENDER
    ===================================================== */

    function render() {

        raf = 0;


        targetProgress =
            getProgress();


        /*
          Smooth scrolling.
        */

        currentProgress +=
            (
                targetProgress -
                currentProgress
            ) * .14;


        const p =
            currentProgress;


        /* =================================================
           INTRO
        ================================================= */

        const introIn =
            ease(
                clamp(
                    p / .12
                )
            );


        const introOut =
            ease(
                clamp(
                    (p - .68) /
                    .12
                )
            );


        intro.style.opacity =
            String(
                introIn *
                (1 - introOut)
            );


        intro.style.transform =
            `translateY(
                ${
                    25 -
                    25 * introIn -
                    18 * introOut
                }px
            )`;


        /* =================================================
           WORD BOARD
        ================================================= */

        const boardIn =
            ease(
                clamp(
                    (p - .05) /
                    .10
                )
            );


        const boardOut =
            ease(
                clamp(
                    (p - .82) /
                    .08
                )
            );


        board.style.opacity =
            String(
                boardIn *
                (1 - boardOut)
            );


        board.style.transform =
            `translateY(
                ${
                    45 -
                    45 * boardIn -
                    20 * boardOut
                }px
            )`;


        /* =================================================
           WORD TIMELINE

           PEOPLE
           0.12 → 0.27

           IDEAS
           0.30 → 0.45

           CONVERSATIONS
           0.48 → 0.65

           PERSPECTIVES
           0.68 → 0.82
        ================================================= */

        const timings = [
            {
                start: .12,
                end: .27
            },
            {
                start: .30,
                end: .45
            },
            {
                start: .48,
                end: .65
            },
            {
                start: .68,
                end: .82
            }
        ];


        rows.forEach(
            (
                row,
                index
            ) => {

                const timing =
                    timings[index];


                const wordProgress =
                    clamp(
                        (
                            p -
                            timing.start
                        ) /
                        (
                            timing.end -
                            timing.start
                        )
                    );


                const eased =
                    ease(
                        wordProgress
                    );


                /*
                  BEFORE
                */

                if (
                    wordProgress <= 0
                ) {

                    row.classList.remove(
                        "is-active",
                        "is-done",
                        "is-landed"
                    );

                    return;
                }


                /*
                  ACTIVE
                */

                if (
                    wordProgress < 1
                ) {

                    row.classList.add(
                        "is-active"
                    );

                    row.classList.remove(
                        "is-done",
                        "is-landed"
                    );

                    return;
                }


                /*
                  LANDED
                */

                row.classList.remove(
                    "is-active"
                );

                row.classList.add(
                    "is-done",
                    "is-landed"
                );

            }
        );


        /* =================================================
           MICROPHONE
        ================================================= */

        const micStart =
            .08;

        const micEnd =
            .88;


        const micProgress =
            clamp(
                (
                    p -
                    micStart
                ) /
                (
                    micEnd -
                    micStart
                )
            );


        /*
          Enter from RIGHT.
        */

        const micIn =
            ease(
                clamp(
                    (
                        p -
                        .06
                    ) /
                    .10
                )
            );


        /*
          Exit near the end.
        */

        const micOut =
            ease(
                clamp(
                    (
                        p -
                        .82
                    ) /
                    .10
                )
            );


        const micOpacity =
    micIn *
    (1 - micOut);


micWrap.style.opacity =
    String(micOpacity);


micWrap.style.visibility =
    micOpacity > 0.01
        ? "visible"
        : "hidden";


        /*
          Small cinematic movement.

          It enters from the right,
          settles,
          then slightly moves upward
          while the video explores.
        */

        /*
   Full-screen background video.
   No box movement anymore.
*/

micWrap.style.transform =
    "none";


        /* =================================================
           SCROLL → VIDEO
        ================================================= */

        if (
    videoReady &&
    Number.isFinite(
        micVideo.duration
    ) &&
    micVideo.duration > 0
) {

    const targetTime =
        micProgress *
        micVideo.duration;


    if (
        Math.abs(
            micVideo.currentTime -
            targetTime
        ) > .025
    ) {

        try {

            micVideo.currentTime =
                targetTime;

        } catch (error) {

            /* Ignore seek race */

        }

    }

}


        /* =================================================
           FINAL MESSAGE
        ================================================= */

        const finalProgress =
            ease(
                clamp(
                    (
                        p -
                        .88
                    ) /
                    .10
                )
            );


        final.style.opacity =
            String(
                finalProgress
            );


        final.style.visibility =
            finalProgress > .01
                ? "visible"
                : "hidden";


        final.style.transform =
            `translateY(
                ${
                    45 -
                    45 * finalProgress
                }px
            )`;


        /*
          Continue animation while
          scroll smoothing is active.
        */

        if (
            Math.abs(
                targetProgress -
                currentProgress
            ) > .001
        ) {

            requestRender();

        }

    }


    /* =====================================================
       REQUEST RENDER
    ===================================================== */

    function requestRender() {

        if (raf) {
            return;
        }


        raf =
            requestAnimationFrame(
                render
            );

    }


    /* =====================================================
       SCROLL
    ===================================================== */

    window.addEventListener(
        "scroll",
        requestRender,
        {
            passive: true
        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        requestRender,
        {
            passive: true
        }
    );


    /* =====================================================
       INITIAL
    ===================================================== */

    requestRender();

})();
/* =========================================================
   MPOWER TALK — SECTION 04
   WORKSHOP CINEMATIC ENGINE
========================================================= */

(function () {

    const section =
        document.getElementById("events");

    const intro =
        document.getElementById("mp4Intro");

    const transition =
        document.getElementById(
            "mp4Transition"
        );

    const progress =
        document.getElementById(
            "mp4Progress"
        );


    if (
        !section ||
        !transition
    ) return;


    const scenes =
        Array.from(
            document.querySelectorAll(
                ".mp4-scene"
            )
        );


    const totalScenes =
        scenes.length;


    /* =====================================================
       ONLY 6 SMALL SLICES
    ===================================================== */

    const SLICE_COUNT = 10;

    const slices = [];


    for (
        let i = 0;
        i < SLICE_COUNT;
        i++
    ) {

        const slice =
            document.createElement(
                "div"
            );

        slice.className =
            "mp4-slice";


        const img =
            document.createElement(
                "img"
            );


        slice.appendChild(img);

        transition.appendChild(
            slice
        );


        slices.push({
            element: slice,
            image: img
        });

    }


    /* =====================================================
       SLICE GEOMETRY
    ===================================================== */

    function setupSlices() {

        const sliceHeight =
            100 / SLICE_COUNT;


        slices.forEach(
            (slice, index) => {

                const top =
                    index *
                    sliceHeight;


                slice.element.style.top =
                    `${top}%`;


                slice.element.style.height =
                    `${sliceHeight + .25}%`;


                /*
                 * Every slice uses the
                 * SAME full image.
                 *
                 * Only its visible strip
                 * is different.
                 */

                slice.image.style.top =
                    `${-top}%`;

                slice.image.style.height =
                    "100vh";

            }
        );

    }


    setupSlices();


    window.addEventListener(
        "resize",
        setupSlices,
        {
            passive: true
        }
    );


    /* =====================================================
       HELPERS
    ===================================================== */

    function clamp(
        value,
        min,
        max
    ) {

        return Math.max(
            min,
            Math.min(
                max,
                value
            )
        );

    }


    function easeInOut(
        value
    ) {

        return value < .5

            ? 2 * value * value

            : 1 -
              Math.pow(
                  -2 * value + 2,
                  2
              ) / 2;

    }


    function easeOut(
        value
    ) {

        return 1 -
            Math.pow(
                1 - value,
                3
            );

    }


    /* =====================================================
       GET PROGRESS
    ===================================================== */

    function getProgress() {

        const rect =
            section.getBoundingClientRect();


        const distance =
            section.offsetHeight -
            window.innerHeight;


        if (
            distance <= 0
        ) return 0;


        return clamp(
            -rect.top /
            distance,

            0,
            1
        );

    }


    /* =====================================================
       ACTIVE SCENE
    ===================================================== */

    let activeScene = 0;


    function setScene(
        index
    ) {

        scenes.forEach(
            (scene, i) => {

                scene.classList.toggle(
                    "is-active",
                    i === index
                );

            }
        );


        activeScene =
            index;

    }


    /* =====================================================
       WORDS RESET
    ===================================================== */

    function resetWords() {

        scenes.forEach(
            scene => {

                scene.classList.remove(
                    "words-active"
                );

            }
        );

    }


    /* =====================================================
       PREPARE NEXT IMAGE
    ===================================================== */

    function prepareImage(
        nextIndex
    ) {

        const nextScene =
            scenes[nextIndex];


        if (!nextScene) return;


        const source =
            nextScene.querySelector(
                ".mp4-image img"
            );


        if (!source) return;


        slices.forEach(
            slice => {

                if (
                    slice.image.dataset.src !==
                    source.src
                ) {

                    slice.image.src =
                        source.src;

                    slice.image.dataset.src =
                        source.src;

                }

            }
        );

    }


    /* =====================================================
       HIDE SLICES
    ===================================================== */

    function hideSlices() {

        slices.forEach(
            slice => {

                slice.element.style.opacity =
                    "0";

                slice.element.style.transform =
                    "translate3d(0,105%,0)";

            }
        );

    }


    /* =====================================================
       BOTTOM → TOP
    ===================================================== */

    function showSlices(
        nextIndex,
        rawProgress
    ) {

        prepareImage(
            nextIndex
        );


        const progress =
            easeInOut(
                clamp(
                    rawProgress,
                    0,
                    1
                )
            );


        slices.forEach(
            (slice, index) => {

                /*
                 * IMPORTANT:
                 *
                 * bottom slice first
                 * top slice last
                 */

                const reverseIndex =
                    SLICE_COUNT -
                    1 -
                    index;


                /*
                 * small stagger
                 */

                const stagger =
                    reverseIndex *
                    .07;


                let local =
                    (
                        progress -
                        stagger
                    ) /
                    (
                        1 -
                        stagger
                    );


                local =
                    clamp(
                        local,
                        0,
                        1
                    );


                local =
                    easeOut(
                        local
                    );


                /*
                 * Bottom → top
                 */

                const y =
                    105 *
                    (1 - local);


                slice.element.style.transform =
                    `translate3d(0,${y}%,0)`;


                slice.element.style.opacity =
                    local > 0
                        ? "1"
                        : "0";

            }
        );

    }


    /* =====================================================
       RENDER
    ===================================================== */

    function render(
        scrollProgress
    ) {

        /*
         * INTRO + 5 SCENES
         */

        const position =
            scrollProgress *
            totalScenes;


        /*
         * INTRO AREA
         */

        if (
            position < .95
        ) {

            intro.classList.add(
                "is-visible"
            );


            /*
             * Intro fades away
             */

            const introFade =
                clamp(
                    position / .95,
                    0,
                    1
                );


            intro.style.opacity =
                `${1 - introFade}`;


            intro.style.transform =
                `scale(${1 + introFade * .035})`;


            setScene(0);

            resetWords();

            hideSlices();

            return;

        }


        /*
         * Hide intro permanently
         */

        intro.style.opacity =
            "0";

        intro.style.transform =
            "scale(1.035)";


        /*
         * Convert remaining position
         * into five image cycles.
         */

        const scenePosition =
            (
                position -
                .95
            ) /
            (
                totalScenes -
                .95
            ) *
            (
                totalScenes -
                1
            );


        let index =
            Math.floor(
                scenePosition
            );


        index =
            clamp(
                index,
                0,
                totalScenes - 1
            );


        const local =
            scenePosition -
            index;


        /* =================================================
           LAST IMAGE
        ================================================= */

        if (
            index >=
            totalScenes - 1
        ) {

            setScene(
                totalScenes - 1
            );


            /*
             * Final words
             */

            if (
                local > .48
            ) {

                scenes[
                    totalScenes - 1
                ].classList.add(
                    "words-active"
                );

            }
            else {

                resetWords();

            }


            hideSlices();

            return;

        }


        /* =================================================
           CURRENT IMAGE
        ================================================= */

        setScene(index);


        /*
         * -----------------------------------------------
         * PHASE 1
         *
         * Image + content
         * -----------------------------------------------
         */

        if (
            local < .30
        ) {

            resetWords();

            hideSlices();

        }


        /*
         * -----------------------------------------------
         * PHASE 2
         *
         * Image clean
         * -----------------------------------------------
         */

        else if (
            local < .56
        ) {

            resetWords();

            hideSlices();

        }


        /*
         * -----------------------------------------------
         * PHASE 3
         *
         * WORDS
         * -----------------------------------------------
         */

        else if (
            local < .74
        ) {

            hideSlices();


            scenes[index]
                .classList.add(
                    "words-active"
                );

        }


        /*
         * -----------------------------------------------
         * PHASE 4
         *
         * BOTTOM → TOP
         *
         * NEXT IMAGE
         * -----------------------------------------------
         */

        else {

            scenes[index]
                .classList.remove(
                    "words-active"
                );


            const transitionProgress =
                (
                    local -
                    .74
                ) /
                .26;


            showSlices(
                index + 1,
                transitionProgress
            );


            /*
             * Once complete:
             *
             * hide transition
             * activate actual image
             */

            if (
                transitionProgress >=
                .98
            ) {

                hideSlices();

                setScene(
                    index + 1
                );

                resetWords();

            }

        }


        /* =================================================
           IMAGE SLOW ZOOM
        ================================================= */

        scenes.forEach(
            (scene, sceneIndex) => {

                const img =
                    scene.querySelector(
                        ".mp4-image img"
                    );


                if (!img) return;


                if (
                    sceneIndex === index
                ) {

                    const scale =
                        1 +
                        (
                            local *
                            .018
                        );


                    img.style.transform =
                        `scale(${scale})`;

                }

            }
        );

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    let target = 0;

    let current = 0;

    let running = false;


    function loop() {

        target =
            getProgress();


        current +=
            (
                target -
                current
            ) * .09;


        render(
            current
        );


        if (
            Math.abs(
                target -
                current
            ) > .00035
        ) {

            requestAnimationFrame(
                loop
            );

        }
        else {

            running = false;

        }

    }


    function requestRender() {

        if (running) return;

        running = true;

        requestAnimationFrame(
            loop
        );

    }


    /* =====================================================
       EVENTS
    ===================================================== */

    window.addEventListener(
        "scroll",
        requestRender,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestRender,
        {
            passive: true
        }
    );


    /* =====================================================
       START
    ===================================================== */

    intro.classList.add(
        "is-visible"
    );


    setScene(0);

    resetWords();

    hideSlices();

    requestRender();


})();
/* =========================================================
   MPOWER TALK — UPCOMING EVENTS
   EXPANDING CARDS + STAGGERED EVENT INFO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const stage =
            document.getElementById(
                "mp5CardStage"
            );


        if (!stage) {
            return;
        }


        const cards =
            Array.from(
                stage.querySelectorAll(
                    ".mp5-event-card"
                )
            );


        if (!cards.length) {
            return;
        }


        let activeIndex = 0;


        /* =================================================
           RESET ANIMATIONS
        ================================================= */

        function resetCardAnimations(card) {

            const animated =
                card.querySelectorAll(
                    `
                    .mp5-event-label,
                    .mp5-event-status,
                    .mp5-event-main,
                    .mp5-event-kicker,
                    .mp5-event-details h3,
                    .mp5-event-meta,
                    .mp5-event-bottom
                    `
                );


            animated.forEach(
                element => {

                    element.style.animation =
                        "none";

                }
            );


            /*
             * Force browser to restart
             * the animation.
             */

            void card.offsetWidth;


            animated.forEach(
                element => {

                    element.style.animation =
                        "";

                }
            );

        }


        /* =================================================
           ACTIVATE CARD
        ================================================= */

        function activateCard(index) {

            if (
                index < 0 ||
                index >= cards.length
            ) {

                return;

            }


            if (
                index === activeIndex &&
                cards[index].classList.contains(
                    "is-active"
                )
            ) {

                return;

            }


            /*
             * Remove active state
             */

            cards.forEach(
                card => {

                    card.classList.remove(
                        "is-active"
                    );

                }
            );


            /*
             * New active card
             */

            const nextCard =
                cards[index];


            nextCard.classList.add(
                "is-active"
            );


            activeIndex =
                index;


            /*
             * Restart text animation
             * after card expansion starts.
             */

            setTimeout(
                () => {

                    resetCardAnimations(
                        nextCard
                    );

                },
                120
            );

        }


        /* =================================================
           CARD CLICK
        ================================================= */

        cards.forEach(
            (card, index) => {

                card.addEventListener(
                    "click",
                    () => {

                        activateCard(
                            index
                        );

                    }
                );


                /*
                 * Keyboard accessibility
                 */

                card.setAttribute(
                    "tabindex",
                    "0"
                );


                card.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                            "Enter" ||
                            event.key ===
                            " "
                        ) {

                            event.preventDefault();


                            activateCard(
                                index
                            );

                        }

                    }
                );

            }
        );


        /* =================================================
           INITIAL CARD
        ================================================= */

        cards.forEach(
            card => {

                card.classList.remove(
                    "is-active"
                );

            }
        );


        cards[0].classList.add(
            "is-active"
        );


        activeIndex = 0;


        /*
         * Initial text reveal
         */

        setTimeout(
            () => {

                resetCardAnimations(
                    cards[0]
                );

            },
            180
        );


    }
);
/* =========================================================
   MPOWER TALK — PAST EVENTS
   SMOOTH COVER FLOW ENGINE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const section =
            document.getElementById(
                "past-events"
            );

        const carousel =
            document.getElementById(
                "mp6PastCarousel"
            );


        if (
            !section ||
            !carousel
        ) {
            return;
        }


        const cards =
            Array.from(
                carousel.querySelectorAll(
                    ".mp6-past-card"
                )
            );


        const dots =
            Array.from(
                section.querySelectorAll(
                    ".mp6-past-dots button"
                )
            );


        if (!cards.length) {
            return;
        }


        let activeIndex = 0;

        let autoplay = null;

        let isAnimating = false;


        /* =====================================================
           POSITION
        ===================================================== */

        function getPosition(
            index
        ) {

            const total =
                cards.length;

            let position =
                index -
                activeIndex;


            if (
                position >
                total / 2
            ) {

                position -= total;

            }


            if (
                position <
                -total / 2
            ) {

                position += total;

            }


            return position;

        }


        /* =====================================================
           RENDER
        ===================================================== */

        function render() {

            cards.forEach(
                (
                    card,
                    index
                ) => {

                    const position =
                        getPosition(
                            index
                        );


                    card.classList.remove(
                        "is-active",
                        "is-prev",
                        "is-next",
                        "is-far-prev",
                        "is-far-next",
                        "is-hidden"
                    );


                    if (
                        position === 0
                    ) {

                        card.classList.add(
                            "is-active"
                        );

                    }

                    else if (
                        position === -1
                    ) {

                        card.classList.add(
                            "is-prev"
                        );

                    }

                    else if (
                        position === 1
                    ) {

                        card.classList.add(
                            "is-next"
                        );

                    }

                    else if (
                        position === -2
                    ) {

                        card.classList.add(
                            "is-far-prev"
                        );

                    }

                    else if (
                        position === 2
                    ) {

                        card.classList.add(
                            "is-far-next"
                        );

                    }

                    else {

                        card.classList.add(
                            "is-hidden"
                        );

                    }

                }
            );


            dots.forEach(
                (
                    dot,
                    index
                ) => {

                    dot.classList.toggle(
                        "is-active",
                        index === activeIndex
                    );

                }
            );

        }


        /* =====================================================
           MOVE
        ===================================================== */

        function goTo(
            newIndex
        ) {

            if (
                isAnimating
            ) {
                return;
            }


            const total =
                cards.length;


            activeIndex =
                (
                    newIndex +
                    total
                ) %
                total;


            isAnimating = true;


            render();


            /*
             * Keep lock only during
             * the visual transition.
             */

            setTimeout(
                () => {

                    isAnimating = false;

                },
                900
            );

        }


        /* =====================================================
           NEXT
        ===================================================== */

        function next() {

            goTo(
                activeIndex + 1
            );

        }


        /* =====================================================
           PREVIOUS
        ===================================================== */

        function previous() {

            goTo(
                activeIndex - 1
            );

        }


        /* =====================================================
           CARD CLICK
        ===================================================== */

        cards.forEach(
            (
                card,
                index
            ) => {

                card.addEventListener(
                    "click",
                    () => {

                        const position =
                            getPosition(
                                index
                            );


                        if (
                            position === 0
                        ) {

                            return;

                        }


                        goTo(
                            index
                        );


                        restartAutoplay();

                    }
                );

            }
        );


        /* =====================================================
           DOT CLICK
        ===================================================== */

        dots.forEach(
            (
                dot,
                index
            ) => {

                dot.addEventListener(
                    "click",
                    () => {

                        goTo(
                            index
                        );


                        restartAutoplay();

                    }
                );

            }
        );


        /* =====================================================
           TOUCH SWIPE
        ===================================================== */

        let touchStartX = 0;

        let touchStartY = 0;


        carousel.addEventListener(
            "touchstart",
            event => {

                const touch =
                    event.changedTouches[0];


                touchStartX =
                    touch.clientX;

                touchStartY =
                    touch.clientY;

            },
            {
                passive: true
            }
        );


        carousel.addEventListener(
            "touchend",
            event => {

                const touch =
                    event.changedTouches[0];


                const diffX =
                    touch.clientX -
                    touchStartX;


                const diffY =
                    touch.clientY -
                    touchStartY;


                /*
                 * Ignore vertical scrolling.
                 */

                if (
                    Math.abs(diffX) <
                    Math.abs(diffY)
                ) {

                    return;

                }


                if (
                    Math.abs(diffX) <
                    45
                ) {

                    return;

                }


                if (
                    diffX < 0
                ) {

                    next();

                }

                else {

                    previous();

                }


                restartAutoplay();

            },
            {
                passive: true
            }
        );


        /* =====================================================
           AUTOPLAY
        ===================================================== */

        function startAutoplay() {

            stopAutoplay();


            autoplay =
                setInterval(
                    () => {

                        next();

                    },
                    5000
                );

        }


        function stopAutoplay() {

            if (
                autoplay
            ) {

                clearInterval(
                    autoplay
                );

                autoplay = null;

            }

        }


        function restartAutoplay() {

            startAutoplay();

        }


        /* =====================================================
           PAUSE WHILE HOVERING
        ===================================================== */

        section.addEventListener(
            "mouseenter",
            stopAutoplay
        );


        section.addEventListener(
            "mouseleave",
            startAutoplay
        );


        /* =====================================================
           INITIAL
        ===================================================== */

        render();

        startAutoplay();

    }
);
/* =========================================================
   MPOWER TALK — PAST PODCAST INTERACTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const section =
            document.getElementById(
                "past-podcast"
            );

        if (!section) {
            return;
        }


        const featuredImage =
            section.querySelector(
                "#mp8-featured-img"
            );

        const featuredImageBox =
            section.querySelector(
                ".mp8-featured-image"
            );

        const details =
            section.querySelector(
                ".mp8-featured-details"
            );

        const date =
            section.querySelector(
                "#mp8-featured-date"
            );

        const title =
            section.querySelector(
                "#mp8-featured-title"
            );

        const guest =
            section.querySelector(
                "#mp8-featured-guest"
            );

        const location =
            section.querySelector(
                "#mp8-featured-location"
            );

        const duration =
            section.querySelector(
                "#mp8-featured-duration"
            );

        const description =
            section.querySelector(
                "#mp8-featured-description"
            );

        const thumbnails =
            Array.from(
                section.querySelectorAll(
                    ".mp8-thumb"
                )
            );

        const thumbnailWrap =
            section.querySelector(
                ".mp8-thumbnails-wrap"
            );


        if (
            !featuredImage ||
            !featuredImageBox ||
            !details ||
            !thumbnails.length
        ) {
            return;
        }


        let activeIndex = 0;

        let changing = false;


        /* =================================================
           CHANGE FEATURED PODCAST
        ================================================= */

        function changePodcast(
            index
        ) {

            if (
                changing ||
                index === activeIndex
            ) {
                return;
            }


            const selected =
                thumbnails[index];

            if (!selected) {
                return;
            }


            changing = true;


            /* -----------------------------
               Start exit animation
            ----------------------------- */

            featuredImageBox
                .classList
                .add(
                    "is-changing"
                );

            details
                .classList
                .add(
                    "is-changing"
                );


            /* -----------------------------
               After small transition
            ----------------------------- */

            setTimeout(
                () => {

                    const newImage =
                        selected.dataset.image;

                    const newDate =
                        selected.dataset.date;

                    const newTitle =
                        selected.dataset.title;

                    const newGuest =
                        selected.dataset.guest;

                    const newLocation =
                        selected.dataset.location;

                    const newDuration =
                        selected.dataset.duration;

                    const newDescription =
                        selected.dataset.description;


                    /* image */

                    featuredImage.src =
                        newImage;


                    /* date */

                    date.textContent =
                        newDate;


                    /* title */

                    title.innerHTML =
                        newTitle
                            .split("|")
                            .join("<br>");


                    /* guest */

                    guest.textContent =
                        newGuest;


                    /* location */

                    location.textContent =
                        newLocation;


                    /* duration */

                    duration.textContent =
                        newDuration;


                    /* description */

                    description.textContent =
                        newDescription;


                    /* active thumb */

                    thumbnails.forEach(
                        thumb => {

                            thumb.classList
                                .remove(
                                    "is-active"
                                );

                        }
                    );


                    selected.classList
                        .add(
                            "is-active"
                        );


                    activeIndex =
                        index;


                    /* ---------------------
                       Enter animation
                    --------------------- */

                    requestAnimationFrame(
                        () => {

                            featuredImageBox
                                .classList
                                .remove(
                                    "is-changing"
                                );

                            details
                                .classList
                                .remove(
                                    "is-changing"
                                );

                        }
                    );


                    /* ---------------------
                       Mobile thumbnail
                       auto-scroll
                    --------------------- */

                    if (
                        window.innerWidth <=
                        700 &&
                        thumbnailWrap
                    ) {

                        const thumbLeft =
                            selected.offsetLeft;

                        const thumbWidth =
                            selected.offsetWidth;

                        const wrapWidth =
                            thumbnailWrap
                                .clientWidth;


                        thumbnailWrap.scrollTo(
                            {
                                left:
                                    thumbLeft -
                                    (
                                        wrapWidth -
                                        thumbWidth
                                    ) / 2,

                                behavior:
                                    "smooth"
                            }
                        );

                    }


                    setTimeout(
                        () => {

                            changing =
                                false;

                        },
                        450
                    );

                },
                300
            );

        }


        /* =================================================
           THUMBNAIL CLICK
        ================================================= */

        thumbnails.forEach(
            (
                thumb,
                index
            ) => {

                thumb.addEventListener(
                    "click",
                    () => {

                        changePodcast(
                            index
                        );

                    }
                );

            }
        );


        /* =================================================
           KEYBOARD SUPPORT
        ================================================= */

        section.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    changePodcast(
                        (
                            activeIndex +
                            1
                        ) %
                        thumbnails.length
                    );

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    changePodcast(
                        (
                            activeIndex -
                            1 +
                            thumbnails.length
                        ) %
                        thumbnails.length
                    );

                }

            }
        );


        /* =================================================
           PRELOAD IMAGES
        ================================================= */

        thumbnails.forEach(
            thumb => {

                const image =
                    new Image();

                image.src =
                    thumb.dataset.image;

            }
        );

    }
);
/* =========================================================
   MP9 — TESTIMONIAL STACK
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".mp9-testimonials");

    if (!section) return;

    const pages = Array.from(
        section.querySelectorAll(".mp9-page")
    );

    const nextBtn = section.querySelector(".mp9-next");
    const prevBtn = section.querySelector(".mp9-prev");

    if (!pages.length) return;


    let currentIndex = 0;
    let isAnimating = false;


    function updateStack() {

        pages.forEach((page, index) => {

            page.classList.remove(
                "is-active",
                "is-behind-1",
                "is-behind-2",
                "is-behind-3"
            );

            let position =
                (index - currentIndex + pages.length)
                % pages.length;


            if (position === 0) {

                page.classList.add("is-active");

            } else if (position === 1) {

                page.classList.add("is-behind-1");

            } else if (position === 2) {

                page.classList.add("is-behind-2");

            } else if (position === 3) {

                page.classList.add("is-behind-3");

            }

        });

    }


    function goNext() {

        if (isAnimating) return;

        isAnimating = true;


        const activePage = pages[currentIndex];

        activePage.classList.add("is-exiting");


        setTimeout(() => {

            activePage.classList.remove("is-exiting");

            currentIndex =
                (currentIndex + 1) % pages.length;

            updateStack();

            setTimeout(() => {

                isAnimating = false;

            }, 80);

        }, 620);

    }


    function goPrevious() {

        if (isAnimating) return;

        isAnimating = true;


        currentIndex =
            (currentIndex - 1 + pages.length)
            % pages.length;


        const newActive = pages[currentIndex];

        newActive.style.transition = "none";

        newActive.style.transform =
            "translate(-120%, -25px) rotate(-9deg)";

        newActive.style.opacity = "0";

        newActive.classList.remove(
            "is-active",
            "is-behind-1",
            "is-behind-2",
            "is-behind-3"
        );

        newActive.classList.add("is-active");


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                newActive.style.transition = "";

                newActive.style.transform = "";

                newActive.style.opacity = "";

                updateStack();

            });

        });


        setTimeout(() => {

            isAnimating = false;

        }, 650);

    }


    nextBtn?.addEventListener(
        "click",
        goNext
    );


    prevBtn?.addEventListener(
        "click",
        goPrevious
    );


    /* keyboard */

    document.addEventListener("keydown", (event) => {

        if (!section.matches(":hover")) return;

        if (event.key === "ArrowRight") {

            goNext();

        }

        if (event.key === "ArrowLeft") {

            goPrevious();

        }

    });


    /* initial stack */

    updateStack();

});
/* =========================================================
   MP11 — FINAL CTA REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const mp11 = document.querySelector(".mp11-cta");

  if (!mp11) return;

  const revealMP11 = () => {
    const rect = mp11.getBoundingClientRect();

    if (
      rect.top < window.innerHeight * 0.85 &&
      rect.bottom > 0
    ) {
      mp11.classList.add("is-visible");
    }
  };

  window.addEventListener("scroll", revealMP11, {
    passive: true
  });

  revealMP11();


  /* Button arrow micro interaction */

  const buttons = mp11.querySelectorAll(".mp11-btn");

  buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
      button.classList.add("is-hovered");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("is-hovered");
    });

  });

});
/* =====================================================
   MP12 — FOOTER REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const footer = document.querySelector(".mp12-footer");

  if (!footer) return;

  const revealFooter = () => {

    const rect = footer.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.9) {

      footer.classList.add("is-visible");

      window.removeEventListener(
        "scroll",
        revealFooter
      );

    }

  };

  window.addEventListener(
    "scroll",
    revealFooter,
    { passive: true }
  );

  revealFooter();

});