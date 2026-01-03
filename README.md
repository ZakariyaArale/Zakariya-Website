# Personal Portfolio Website

This is my personal profile template, built to highlight my portfolio, technical skills, and professional experience using modern frameworks such as React, Tailwind CSS, and Vite.  

This project is a free template that can be used by anyone. However, If you plan to deploy this website, make sure to **replace avatars**, update **testimonials**, and modify the **resume** (unless you have explicit consent to use them).

---

## Key Components

- **public** — All project images used across the website  
  - **projects** — Project images  
  - **avatar** — Profile images  
- **src** — Application entry point and global styles  
  - **components**
    - **buttons** — Reusable button components  
    - **animations** — Animation utilities and components  
  - **layout**
    - **Navbar** — Website navigation bar  
    - **Footer** — Website footer  
  - **sections** — Main sections of the website  
    - **Hero**  
    - **Projects**  
    - **Skills**  
    - **Testimonials**  
    - **Contact**

---

## Running the Website Locally

- **Create a Local Copy**
  ```bash
  git clone https://github.com/ZakariyaArale/Zakariya-Website.git
  cd Zakariya-Website
  ```
- **Install Dependency and run**
   ```bash
   npm install
   npm run dev
  ```
  The website will be available at: https://localhost:5173

This project uses EmailJS for sending emails via the contact form. To set it up:
  - Create an EmailJS Account
  - Configure Email Service
      - Go to Email Services tab
      - Click Add New Service
      - Save your Service ID somewhere safe
  - Configure Email Template
      - Go to Email Template tab
      - Click Add New Template
      - Open Template Settings
      - Save your Template ID somewhere safe
  - Configure Account
      - Go to Account tab
      - Click Add New Template
      - Open Template Settings
      - Save your Public Key somewhere safe
  - Create a .env file in the root directory of your project and add:
    ```bash
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id 
    VITE_EMAILJS_PUBLIC_KEY=your_public_key 
    ```
    Make sure to replace the placeholders with your actual EmailJS credentials. The file .env is already in .gitignore so you dont have to worry about accidentally pushing API keys to github.

---

## Deployment (GitHub Pages)

  1. Create a git repo for your updated website 
  2. Configure Git (if not already set)
      ``` bash
      git config --global user.name "Your Name"
      git config --global user.email "your-email@example.com"
      ```
      Make sure to replace the placeholders with your actual git credentials 
  
  3. Install gh-pages
      ``` bash
      npm install gh-pages
      ```
  4. Update package.json and vite.config.js
     - For package.json at line 2 change homepage to "https://ZakariyaArale.github.io/Zakariya-Website/" to "https://your-username.github.io/your-repo/"
     - vite at line 9 change "/Zakariya-Website/" to your repo name
  5. Deploy the Website
      Run the following 
      ```bash
      npm run deploy
      ```
      Your website will be live at:
      https://your-username.github.io/your-repo-name
      
      Again placeholders will be your acutal git user and repo

  
