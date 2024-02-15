document.addEventListener("DOMContentLoaded", function () {
  // Fetch personal information from the API
  fetch("http://localhost:3000/api/personal_info")
    .then((response) => response.json())
    .then((data) => {
      // Extract values from the API response
      const fullName = data[0].full_name;
      const rolePosition = data[0].role_position;
      const bio = data[0].bio;
      const startDate = new Date(data[0].start_date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
      const jobTitle = data[0].role_position;
      const companyName = data[0].job_type;
      const jobDescription = data[0].job_description;
      const skills = data[0].skills;
      const projects = data[0].projects;
      const projectNames = projects.split(","); // Assuming projects is a comma-separated list

      // Update the HTML to display the API values
      const h1Element = document.querySelector("#sidebar h1");
      const h2Element = document.querySelector("#sidebar h2");
      const bioParagraph = document.querySelector("#about-us p");
      const expParagraph = document.querySelector("#experience #details p");
      const expYear = document.querySelector("#experience #year p");
      const expJobTitle = document.querySelector("#experience #details h3");
      const expCompanyName = document.querySelector("#experience #details h4");
      const expDescription = document.querySelector("#experience #details p");
      const expSkills = document.querySelector("#experience #details #skills1");
      const projectContainer = document.querySelector("#projects #prcon");
      const projectTitle = projectContainer.querySelector("h3");
      const projectDesc = projectContainer.querySelector("p");
      const projectName = projectNames.length > 0 ? projectNames[0].trim() : "";
      const projectDescription = data[0].projects_description;

      h1Element.textContent = fullName;
      h2Element.textContent = rolePosition;
      bioParagraph.textContent = bio;
      expParagraph.textContent = `${jobTitle} at ${companyName}. ${jobDescription}`;
      expYear.textContent = startDate;
      expJobTitle.textContent = jobTitle;
      expCompanyName.textContent = companyName;
      expDescription.textContent = jobDescription;
      // Clear existing skills
      expSkills.innerHTML = "";
      // Add new skills
      skills.split(",").forEach((skill) => {
        const skillParagraph = document.createElement("p");
        skillParagraph.textContent = skill.trim();
        expSkills.appendChild(skillParagraph);
      });

      projectTitle.textContent = projectName;
      projectDesc.textContent = projectDescription;

      // Fetch information for the second project using the correct key
      const projectContainer2 = document.querySelector("#projects #prcon2");
      const projectTitle2 = projectContainer2.querySelector("h3");
      const projectDesc2 = projectContainer2.querySelector("p");
      const secondProjectName =
        projectNames.length > 1 ? projectNames[1].trim() : "";
      const secondProjectDescription = data[0].ProjectDescriptionTwo;

      projectTitle2.textContent = secondProjectName;
      projectDesc2.textContent = secondProjectDescription;

      // Fetch information for the third project using the correct key
      const projectContainer3 = document.querySelector("#projects #prcon3");
      const projectTitle3 = projectContainer3.querySelector("h3");
      const projectDesc3 = projectContainer3.querySelector("p");
      const thirdProjectName =
        projectNames.length > 2 ? projectNames[2].trim() : "";
      const thirdProjectDescription = data[0].ProjectDescriptionThree;

      projectTitle3.textContent = thirdProjectName;
      projectDesc3.textContent = thirdProjectDescription;
    })
    .catch((error) => {
      console.error("Error fetching personal information:", error);
    });
});
