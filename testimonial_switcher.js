const testimonials = [
    {
        name: "Tom",
        image: "./Images/men-1-image.jpg",
        testimonial: "   CyberSec offered a variety of courses tailored to all skill levels. Its blend of visual and textual material kept me engaged, and the interactive exercises let me put theory into practice. It truly empowers learners like me to chase their education dreams!",
    },

    {
        name: "Josh",
        image: "./Images/men-image.jpg",
        testimonial: "The customer support team at CyberSec is incredibly responsive and helpful. They go above and beyond to ensure a smooth learning experience. Their dedication to excellence sets them apart from other platforms, giving us confidence to reach out whenever we need guidance.",

    },

    {
        name: "Sara",
        image: "./Images/female-image.jpg",
        testimonial: "The website offers excellent cybersecurity courses with an interactive approach. Short and easily understandable lessons are tailored to all levels of knowledge. I recommend it to anyone looking for an effective and engaging way to improve their cybersecurity skills.",

    },

    {
        name: "Ash",
        image: "./Images/female-1-image.jpg",
        testimonial: "This platform made learning cybersecurity a breeze. The courses are concise, easy to follow, and hands-on labs provide practical skills. I highly recommend it for a seamless and enjoyable cybersecurity learning experience.",

    },
];


//Aktualny slide
let i = 0;
//Vsetky slidy
let j = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let quotaContainer = document.getElementById("quota-container")
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
});
let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
  `;

  quotaContainer.innerHTML = `
    <span>${testimonials[i].testimonial}</span>
  `
 
};


window.onload = displayTestimonial;