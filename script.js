// script.js
// Add event listener to Know More links
document.addEventListener("DOMContentLoaded", function() {
    const knowMoreLinks = document.querySelectorAll(".know-more");
    knowMoreLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            // Open course details page
            const courseId = link.parentNode.dataset.courseId;
            window.location.href = `course-details.html?courseId=${courseId}`;
        });
    });
});

// Add JavaScript for dynamic features like loading images or handling course details page
// For example, you can use JavaScript to load images dynamically in the photo gallery
const galleryContainer = document.querySelector(".gallery-container");
galleryContainer.addEventListener("scroll", function() {
    const images = galleryContainer.querySelectorAll("img");
    images.forEach(function(image) {
        if (image.offsetTop <= galleryContainer.scrollTop + galleryContainer.offsetHeight) {
            image.src = `images/${image.dataset.image}`;
        }
    });
});

// You can also use JavaScript to handle the course details page
// For example, you can use JavaScript to display the course details based on the courseId parameter
const courseIdParam = new URLSearchParams(window.location.search).get("courseId");
if (courseIdParam) {
    const courseDetailsContainer = document.querySelector(".course-details-container");
    fetch(`courses/${courseIdParam}.json`)
        .then(response => response.json())
        .then(courseData => {
            courseDetailsContainer.innerHTML = `
                <h2>${courseData.title}</h2>
                <p>${courseData.description}</p>
                <ul>
                    <li>Duration: ${courseData.duration}</li>
                    <li>Fee: ${courseData.fee}</li>
                </ul>
            `;
        })
        .catch(error => console.error(error));
}