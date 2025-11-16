const config = {
  // Your Name and Title (from Resume)
  title: "Jaiganesh Singaravelan | Python Backend Developer",
  description: {
    // New description based on your resume summary
    long: "Explore the portfolio of Jaiganesh Singaravelan, a Python Backend Developer specializing in Django, DRF, scalable APIs, and WebSocket integrations. Discover my projects, skills, and experience in backend architecture.",
    short:
      "Portfolio of Jaiganesh Singaravelan, a Python Backend Developer specializing in Django, DRF, and scalable APIs.",
  },
  // New keywords based on your skills
  keywords: [
    "Jaiganesh Singaravelan",
    "portfolio",
    "Python",
    "Backend Developer",
    "Django",
    "DRF",
    "REST API",
    "PostgreSQL",
    "WebSockets",
    "scalability",
    "API development",
  ],
  // Your Name (from Resume)
  author: "Jaiganesh Singaravelan",
  // Your Email (from Resume)
  email: "jaiganeshsingaravelan@gmail.com",

  // IMPORTANT: Replace this with your website's URL after you deploy it
  site: "https://[YOUR_PORTFOLIO_URL_HERE]",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  // --- THIS SECTION IS NOW FIXED ---
  social: {
    // I've added your LinkedIn link!
    linkedin: "https://www.linkedin.com/in/jaiganeshsingaravelan006/",

    // I've added your GitHub link!
    github: "https://github.com/jaiganesh0081",

    // --- ADDED THESE BACK TO PREVENT THE CRASH ---
    // They all point to your GitHub as a safe, valid link.
    // You can remove the components rendering these links later if you wish.
    twitter: "https://github.com/jaiganesh0081",
    instagram: "https://github.com/jaiganesh0081",
    facebook: "https://github.com/jaiganesh0081",
  },
};
export { config };