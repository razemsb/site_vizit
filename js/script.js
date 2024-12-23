document.addEventListener("DOMContentLoaded", function () {
    function setViewportHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        document.body.classList.add("mobile-view");
    }

    setViewportHeight();

    window.addEventListener("resize", setViewportHeight);
});
