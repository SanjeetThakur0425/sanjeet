const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header_container img", {
    duration: 1000,
  });
  
  ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  

//about container
ScrollReveal().reveal(".about_image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  
  ScrollReveal().reveal(".about_content h3", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about_content .section_header", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about_content .section_subheader", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".about_content .about_grid", {
    ...scrollRevealOption,
    delay: 2000,
  });