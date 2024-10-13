const meowTubeUrl = "https://alpaarx.github.io/MeowTube-view/";

// Handle navigation
function handleNavigation() {
    if (location.href === "https://www.youtube.com/") {
        location.replace(meowTubeUrl);
    }
}

//  Select logo element and replace it
function replace(from, to) {
    from.remove();
    const parent = document.querySelector("div#start");
    parent.appendChild(to);
}
// Create my logo element
function createLink() {
    const link = document.createElement("a");
    link.setAttribute("href", meowTubeUrl);

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("images/kitty-logo.png");
    img.style.width = "150px";

    link.appendChild(img);
    return link;
}

// Check if element is loaded
const isElementLoaded = async (selector) => {
    while (document.querySelector(selector) === null) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
};

// Call the function on initial load
handleNavigation();

// Check if element logo is loaded
isElementLoaded("ytd-topbar-logo-renderer#logo").then((selector) => {
    replace(
        document.querySelector("ytd-topbar-logo-renderer#logo"),
        createLink()
    );
});
