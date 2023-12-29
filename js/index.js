AOS.init();

// courses section start
const courses = [
  {
    title: "Digital Marketing",
    imgSrc: "./images/digital-marketing.jpg",
    iconClass: "fa-chart-simple",
    description:
      "Explore the diverse realm of digital marketing in our comprehensive course. Gain expertise in social media strategies, SEO essentials, and analytics, enabling you to navigate the digital landscape effectively for impactful online results.",
  },
  {
    title: "Business Analytics",
    imgSrc: "./images/business-analytics.jpg",
    iconClass: "fa-chart-pie",
    description:
      "Delve into the world of business analytics through our intensive course, honing your skills in data analysis, interpretation, and strategic decision-making. Acquire expertise in utilizing data to foster business growth.",
  },
  {
    title: "Project Management",
    imgSrc: "./images/project-management.jpg",
    iconClass: "fa-list-check",
    description:
      "Embark on mastering Project Management via our comprehensive course, exploring methodologies, tools, and strategies crucial for successful project planning, execution, and delivery.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const coursesContainer = document.getElementById("courses-container");

  // Loop through the courses array and generate HTML for each course
  courses.forEach((course, index) => {
    const courseElement = document.createElement("div");
    courseElement.className = "col-md-4";
    courseElement.setAttribute("data-aos", "zoom-in");
    courseElement.setAttribute("data-aos-duration", "1500");

    courseElement.innerHTML = `
        <div class="course">
          <div class="course-img">
            <img src="${course.imgSrc}" />
            <div class="icon"><i class="fa-solid ${course.iconClass}"></i></div>
          </div>
          <h5 class="mt-5 pt-4">0${index + 1}. ${course.title}</h5>
          <p>${course.description}</p>
        </div>
      `;

    // Append each course element to the courses container
    coursesContainer.appendChild(courseElement);
  });
});
// courses section end

// counter accomplishment start
const counters = [
  { target: 50000, label: "Awards Won", icon: "fa-trophy" },
  { target: 120, label: "Premier Corporate Partners", icon: "fa-handshake" },
  { target: 50, label: "Happy Clients", icon: "fa-face-smile" },
  { target: 5000, label: "Students Certified", icon: "fa-graduation-cap" },
];

document.addEventListener("DOMContentLoaded", function () {
  const counterSection = document.getElementById("counter-section");

  // Loop through the counters array and generate HTML for each counter
  counters.forEach((counter) => {
    const counterElement = document.createElement("div");
    counterElement.className = "col-md-3";

    counterElement.innerHTML = `
        <i class="fa-solid ${counter.icon} h1"></i>
        <h1 class="mt-3 mb-2 counter" data-target="${counter.target}">0</h1>
        <p>${counter.label}</p>
      `;

    // Append each counter element to the counter section
    counterSection.appendChild(counterElement);
  });

  // Function to increment the counters
  function incrementCounters() {
    const counterElements = document.querySelectorAll(".counter");
    const speed = 200; // Adjust the speed of counting

    counterElements.forEach((counterElement) => {
      const updateCount = () => {
        const target = +counterElement.getAttribute("data-target");
        const count = +counterElement.innerText;
        const increment = target / speed;

        if (count < target) {
          counterElement.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counterElement.innerText = target;
        }
      };

      updateCount();
    });
  }

  // Call incrementCounters when the counters section comes into view
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        incrementCounters();
        counterObserver.unobserve(entry.target);
      }
    });
  });

  const counterSectionEl = document.getElementById("categories");
  counterObserver.observe(counterSectionEl);
});
// counter accomplishment end

// testimonial start
const testimonials = [
  {
    name: "Chidinma Udeh",
    company: "MSBM",
    avatar: "images/avatar-one.jpg",
    text: "As a Product Manager, I found the online courses to be invaluable. They provided me with actionable insights and practical strategies that I could implement immediately within my role.",
  },
  {
    name: "Kevin Harts",
    company: "Google",
    avatar: "images/avatar-two.jpg",
    text: "As a Product Manager, I found the online courses to be invaluable. They provided me with actionable insights and practical strategies that I could implement immediately within my role.",
  },
  {
    name: "Genevieve Nnaji",
    company: "Amazon",
    avatar: "images/avatar-three.jpg",
    text: "As a Product Manager, I found the online courses to be invaluable. They provided me with actionable insights and practical strategies that I could implement immediately within my role.",
  },
  {
    name: "Will Smith",
    company: "Netflix",
    avatar: "images/avatar-four.jpg",
    text: "As a Product Manager, I found the online courses to be invaluable. They provided me with actionable insights and practical strategies that I could implement immediately within my role.",
  },
  {
    name: "Bill Gates",
    company: "Opay",
    avatar: "images/avatar-five.jpg",
    text: "As a Product Manager, I found the online courses to be invaluable. They provided me with actionable insights and practical strategies that I could implement immediately within my role.",
  },
  {
    name: "Hassan Lamidi",
    company: "Zojatech",
    avatar: "images/avatar-six.jpg",
    text: "As a Product Manager, I found the online courses to be invaluable. They provided me with actionable insights and practical strategies that I could implement immediately within my role.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const testimonialSection = document.getElementById("testimonial-section");

  // Loop through the testimonials array and generate HTML for each testimonial
  testimonials.forEach((testimonial, index) => {
    const testimonialElement = document.createElement("div");
    testimonialElement.className = "col-md-4";
    testimonialElement.dataset.aos = "fade-up";
    testimonialElement.dataset.aosDuration = "1000";

    testimonialElement.innerHTML = `
        <div class="testimonial p-4">
          <div class="person">
            <img src="${testimonial.avatar}" alt="" />
            <div class="text ms-3">
              <h6 class="mb-0">${testimonial.name}</h6>
              <small>${testimonial.company}</small>
            </div>
          </div>
          <p class="pt-4">${testimonial.text}</p>
          <div class="stars">
            ${'<i class="fa-solid fa-star"></i>'.repeat(5)}
          </div>
        </div>
      `;

    // Append each testimonial element to the testimonial section
    testimonialSection.appendChild(testimonialElement);
  });
});

// testimonial end

// Function to format numbers
function formatNumber(number) {
  if (number >= 50000) {
    return "50000+";
  } else if (number >= 120) {
    return "120K";
  } else if (number >= 5000) {
    return "5000+";
  } else if (number >= 50) {
    return "50M+";
  } else {
    return number;
  }
}

// Function to check if the element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function handleScroll() {
  let section_counter = document.querySelector("#categories");
  let counters = document.querySelectorAll(".counter");

  if (isElementInViewport(section_counter)) {
    let CounterObserver = new IntersectionObserver(
      (entries, observer) => {
        let [entry] = entries;
        if (!entry.isIntersecting) return;

        let speed = 200;
        counters.forEach((counter, index) => {
          function UpdateCounter() {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;
            if (initialNumber < targetNumber) {
              counter.innerText = Math.ceil(initialNumber + incPerCount);
              setTimeout(UpdateCounter, 40);
            } else {
              counter.innerText = formatNumber(targetNumber);
            }
          }
          UpdateCounter();

          if (counter.parentElement.style.animation) {
            counter.parentElement.style.animation = "";
          } else {
            counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
              index / counters.length + 0.5
            }s`;
          }
        });
        observer.unobserve(section_counter);
      },
      {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
      }
    );

    CounterObserver.observe(section_counter);
    window.removeEventListener("scroll", handleScroll);
  }
}

// Event listener for scroll
window.addEventListener("scroll", handleScroll);
