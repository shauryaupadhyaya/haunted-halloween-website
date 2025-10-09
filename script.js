// Countdown Timer
function updateCountdown() {
  const eventDate = new Date("2025-10-31T20:00:00").getTime()
  const now = new Date().getTime()
  const distance = eventDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById("days").textContent = String(days).padStart(2, "0")
  document.getElementById("hours").textContent = String(hours).padStart(2, "0")
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0")
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0")

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = '<p class="countdown-expired">The event has begun!</p>'
  }
}

// Update countdown every second
setInterval(updateCountdown, 1000)
updateCountdown()

// Random Glitch Effect
function randomGlitch() {
  const glitchElements = document.querySelectorAll(".glitch")
  glitchElements.forEach((element) => {
    if (Math.random() > 0.95) {
      element.style.animation = "none"
      setTimeout(() => {
        element.style.animation = "glitch 3s infinite"
      }, 10)
    }
  })
}

setInterval(randomGlitch, 2000)

// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Timeline Expandable Details
document.querySelectorAll(".timeline-item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("expanded")
  })
})

// FAQ Accordion
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement
    const isActive = faqItem.classList.contains("active")

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active")
    })

    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add("active")
    }
  })
})

// RSVP Buttons
const rsvpYes = document.getElementById("rsvp-yes")
const rsvpNo = document.getElementById("rsvp-no")
const rsvpMessage = document.getElementById("rsvp-message")

rsvpYes.addEventListener("click", () => {
  rsvpYes.classList.add("clicked")
  rsvpMessage.textContent = "🎃 Brave soul! We'll see you on Halloween night! 🎃"
  rsvpMessage.style.color = "var(--accent-orange)"

  // Remove animation class after animation completes
  setTimeout(() => {
    rsvpYes.classList.remove("clicked")
  }, 600)
})

rsvpNo.addEventListener("click", () => {
  rsvpMessage.textContent = "👻 The spirits are disappointed... but we understand. 👻"
  rsvpMessage.style.color = "var(--accent-purple)"
})

// Contact Form Submission
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault()
  alert("Message sent! The spirits will respond soon... 👻")
  e.target.reset()
})

// Ghost Cursor Trail Effect
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.95) {
    const ghost = document.createElement("div")
    ghost.textContent = "👻"
    ghost.style.position = "fixed"
    ghost.style.left = e.clientX + "px"
    ghost.style.top = e.clientY + "px"
    ghost.style.pointerEvents = "none"
    ghost.style.fontSize = "20px"
    ghost.style.zIndex = "9999"
    ghost.style.animation = "fadeOut 2s forwards"
    document.body.appendChild(ghost)

    setTimeout(() => {
      ghost.remove()
    }, 2000)
  }
})

// Add fadeOut animation
const style = document.createElement("style")
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
`
document.head.appendChild(style)
