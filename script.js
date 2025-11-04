// Highlight current page in navigation dynamically
document.querySelectorAll("nav a").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// Display current year automatically in footer
const footer = document.querySelector("footer p");
if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} Tejaswi | All rights reserved`;
}
