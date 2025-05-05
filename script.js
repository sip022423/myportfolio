document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const closeButton = document.getElementById("close-mobile");
  const nav = document.getElementById("nav-mobile");
  const navLinks = document.querySelectorAll(".nav-link");
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Show an alert message
    alert('Your message has been sent successfully!');

    // Optionally, reset the form
    this.reset();
  });
  // Open mobile navigation
  menu.addEventListener("click", () => {
    nav.classList.add("show");
    menu.style.display = "none"; // Hide the hamburger menu
  });

  // Close mobile navigation
  closeButton.addEventListener("click", () => {
    nav.classList.remove("show");
    menu.style.display = "block"; // Show the hamburger menu
  });

  // Close mobile navigation when a nav-link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
      menu.style.display = "block"; // Show the hamburger menu
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "Web Developer",
    "Software Developer",
    "Photographer",
    "Videographer",
    "App Developer",
  ];
  const changingTextElement = document.getElementById("changing-text");
  const cursorElement = document.createElement("span");
  cursorElement.id = "cursor";
  changingTextElement.after(cursorElement);

  let currentPhraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
      // Deleting text
      changingTextElement.textContent = currentPhrase.slice(0, letterIndex--);
    } else {
      // Typing text
      changingTextElement.textContent = currentPhrase.slice(0, letterIndex++);
    }

    let typingSpeed = isDeleting ? 50 : 100; // Typing and deleting speed

    if (!isDeleting && letterIndex === currentPhrase.length) {
      // Pause for 1 second after fully typing the text
      setTimeout(() => {
        isDeleting = true; // Start deleting after the pause
        type();
      }, 1000); // Pause for 1 second
      return;
    }

    if (isDeleting && letterIndex === 0) {
      // Move to the next phrase after deleting
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, 500); // Pause before typing the next phrase
      return;
    }

    // Continue typing or deleting
    setTimeout(type, typingSpeed);
  }

  type();
});
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".skill-box").forEach((box) => {
    const percent = parseInt(box.getAttribute("data-percent"));
    const progress = box.querySelector(".progress");
    const text = box.querySelector(".percentage");
    const dashOffset = 100 - percent;

    setTimeout(() => {
      progress.style.strokeDashoffset = dashOffset;
      text.textContent = percent + "%";
    }, 300);

    const img = box.querySelector("img");
    const label = box.querySelector(".skill-name");
    if (img && label) {
      label.textContent = img.alt;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "project1",
      title: "Photography",
      description: "Capture stunning moments.",
      image: "image/camera.webp",
      subProjects: [
        {
          title: "BAGBAG",
          description: "Victoria, Sual, Pangasinan 2025",
          image:"photography/bagbag.jpg",
        },
        {
          title: "Tagalog River",
          description: "Mabini, Pangasinan 2025",
          image: "photography/wow.jpg",
        },
      ],
    },
    {
      id: "project2",
      title: "Development Projects",
      description: "Build modern and responsive system, websites, and apps.",
      image: "image/computer.png",
      subProjects: [
        {
          title: "BookMate",
          description: "A Capstone project for a book management system of Dasol Catholic School.",
          image: "development/lbms.png",
        },
        {
          title: "Matching Game",
          description: "A fun and interactive matching game built with Android Studio.",
          image: "development/matchgame.png",
        },
      ],
    },
    {
      id: "project3",
      title: "Videography",
      description: "Create cinematic videos.",
      image: "image/vid.png",
      subProjects: [
        {
          title: "",
          description: "Folder Empty",
          image: "",
        },
      ],
    },
    
  ];

  const projectsContainer = document.querySelector(".projects");

  // Dynamically generate project images with titles
  projects.forEach((project) => {
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");

    // Create clickable picture container
    const projectElement = document.createElement("div");
    projectElement.classList.add("clickable_picture");
    projectElement.setAttribute("data-project", project.id);

    // Add image to the clickable picture
    projectElement.innerHTML = `
      <img src="${project.image}" alt="${project.title}" />
      <div class="hover-description">Click to view</div>
    `;

    // Create title below the clickable picture
    const titleElement = document.createElement("p");
    titleElement.classList.add("project-title");
    titleElement.textContent = project.title;

    // Append the clickable picture and title to the wrapper
    projectWrapper.appendChild(projectElement);
    projectWrapper.appendChild(titleElement);

    // Append the wrapper to the projects container
    projectsContainer.appendChild(projectWrapper);

    // Add click event listener to open modal
    projectElement.addEventListener("click", () => {
      openProjectModal(project);
    });
  });

  // Function to open the modal and display sub-projects
  function openProjectModal(project) {
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body");

    // Generate sub-projects HTML
    const subProjectsHTML = project.subProjects
      .map(
        (subProject) => `
        <div class="sub-project">
          <img src="${subProject.image}" alt="${subProject.title}" />
          <h3>${subProject.title}</h3>
          <p>${subProject.description}</p>
        </div>
      `
      )
      .join("");

    // Populate modal content
    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <div class="sub-projects">
        ${subProjectsHTML}
      </div>
    `;

    // Show the modal
    modal.style.display = "block";
  }

  // Close modal functionality
  const closeModal = document.querySelector(".modal .close");
  closeModal.addEventListener("click", () => {
    const modal = document.getElementById("project-modal");
    modal.style.display = "none";
  });

  // Close modal when clicking outside of it
  window.addEventListener("click", (event) => {
    const modal = document.getElementById("project-modal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
