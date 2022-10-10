const buttonScrollToTop = document.querySelector(".buttonScrollToTop");
const rootElement = document.documentElement;

const handleScroll = () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    if ((rootElement.scrollTop / scrollTotal ) > 0.80 ) 
    {
        // Show button
        buttonScrollToTop.classList.add("showButton");
      } else 
      {
        // Hide button
        buttonScrollToTop.classList.remove("showButton");
      }
}

const scrollToTop = () => {
    rootElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

document.addEventListener("scroll", handleScroll);
buttonScrollToTop.addEventListener("click", scrollToTop);


