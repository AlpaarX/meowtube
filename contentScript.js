function handleNavigation() {
    console.log("Location changed to: " + location.href);
    if (location.href === "https://www.youtube.com/") {
        location.replace("https://alpaarx.github.io/MyTube-view/");
    }
}

// Call the function on initial load
handleNavigation();

//  Select logo element and replace it
function replace(from, to) {
    from.remove();
    const parent = document.querySelector("div#start");
    parent.appendChild(to);
}
// Create my logo element
function createLink() {
    const link = document.createElement("a");
    link.setAttribute("href", "https://alpaarx.github.io/MyTube-view/");

    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("images/kitty-logo.png");
    img.style.width = "150px";

    link.appendChild(img);
    return link;
}

const isElementLoaded = async (selector) => {
    while (document.querySelector(selector) === null) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    return document.querySelector(selector);
};

isElementLoaded("ytd-topbar-logo-renderer#logo").then((selector) => {
    replace(
        document.querySelector("ytd-topbar-logo-renderer#logo"),
        createLink()
    );
});
