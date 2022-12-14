const buttonScrollToTop = document.querySelector(".buttonScrollToTop");
const rootElement = document.documentElement;

const handleScroll = () => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  
      if ((rootElement.scrollTop / scrollTotal ) > 0.95 ) 
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
    });
}

document.addEventListener("scroll", handleScroll);
buttonScrollToTop.addEventListener("click", scrollToTop);


