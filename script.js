/* TYPING EFFECT */
const texts = [
    "ECE Student",
    "Python Developer",
    "Frontend Developer",
    "Machine Learning Enthusiast"
];

let i = 0, j = 0, deleting = false;

function typing() {
    let current = texts[i];

    document.getElementById("typing").textContent =
        deleting ? current.substring(0, j--) : current.substring(0, j++);

    if (!deleting && j === current.length) deleting = true;
    if (deleting && j === 0) {
        deleting = false;
        i = (i + 1) % texts.length;
    }

    setTimeout(typing, 120);
}
typing();

/* MOBILE NAV */
document.getElementById("menu-toggle").onclick = () => {
    document.querySelector(".nav-links").classList.toggle("active");
};

/* DARK / LIGHT MODE */
const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
    document.body.classList.toggle("light");
    toggle.textContent =
        document.body.classList.contains("light") ? "☀️" : "🌙";
};
