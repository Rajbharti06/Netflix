// FAQ Toggle Functionality with animation and icon toggle
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    // Close any other open items
    document.querySelectorAll(".faq-item").forEach(i => {
      if (i !== item) {
        i.classList.remove("open");
        i.querySelector(".faq-content")?.remove();
        i.querySelector("span").textContent = "+";
      }
    });

    // Toggle this item
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      item.querySelector(".faq-content")?.remove();
      item.querySelector("span").textContent = "+";
    } else {
      item.classList.add("open");
      const answer = document.createElement("div");
      answer.className = "faq-content";
      answer.textContent = getFaqAnswer(item.textContent.trim());
      item.appendChild(answer);
      item.querySelector("span").textContent = "×";
    }
  });
});

// Example answers — you can customize this function
function getFaqAnswer(question) {
  switch (true) {
    case question.startsWith("What is Netflix?"):
      return "Netflix is a streaming service offering a wide variety of TV shows, movies, anime, documentaries and more.";
    case question.startsWith("How much does Netflix cost?"):
      return "Plans start at ₹149 per month. Cancel anytime.";
    case question.startsWith("Where can I watch?"):
      return "You can watch Netflix on smartphones, tablets, smart TVs, laptops, and streaming devices.";
    case question.startsWith("How do I cancel?"):
      return "You can cancel your Netflix account anytime from your account settings.";
    case question.startsWith("What can I watch on Netflix?"):
      return "Netflix offers thousands of TV shows, movies, documentaries, and more.";
    case question.startsWith("Is Netflix good for kids?"):
      return "Yes! Netflix has a Kids experience with age-appropriate content.";
    default:
      return "Answer coming soon.";
  }
}
