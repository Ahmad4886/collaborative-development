# Student Profile Website — CI/CD Implementation

## 1. Project Overview

This project is a simple student profile website developed using HTML and CSS. It demonstrates collaborative software development and the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions.

The website displays student information through a structured web page. The pipeline automatically checks the project files, runs automated tests, builds the website, and deploys the application to GitHub Pages after approved changes are merged into the main branch.

## 2. Project Objectives

- Develop a simple student profile website.
- Use Git and GitHub for version control and collaboration.
- Automate code-quality checks using GitHub Actions.
- Execute automated tests whenever code changes are pushed.
- Build and package the website automatically.
- Validate Pull Requests before merging into the main branch.
- Deploy the application to GitHub Pages.
- Demonstrate basic CI/CD security practices.

## 3. Technologies Used

- **HTML5:** Defines the structure of the website.
- **CSS3:** Styles the student profile page.
- **JavaScript / Node.js:** Implements project-quality checks, automated tests, and the build script.
- **Git:** Tracks source-code changes.
- **GitHub:** Hosts the repository and manages Pull Requests.
- **GitHub Actions:** Automates CI/CD workflows.
- **GitHub Pages:** Hosts the deployed website.

## 4. Project Structure

```text
collaborative-development/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── student-profile/
│   ├── index.html
│   └── style.css
├── scripts/
│   ├── check.js
│   └── build.js
├── tests/
│   └── app.test.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 5. Continuous Integration Workflow

The `ci.yml` workflow runs automatically when code is pushed to a branch or when a Pull Request targets the `main` branch.

The workflow performs the following operations:

1. Checks out the repository.
2. Sets up the Node.js runtime.
3. Installs dependencies using `npm ci`.
4. Runs project-quality checks using `npm run lint`.
5. Executes automated tests using `npm test`.
6. Builds the website using `npm run build`.
7. Uploads the generated website as a build artifact.

If a required check, test, or build step fails, GitHub Actions reports a failed workflow.

## 6. Build Automation

The build script copies the website files into the `dist/` directory. This directory contains the files prepared for deployment.

The CI workflow uploads the generated directory as an artifact so the output can be inspected after a successful run.

## 7. Pull Request Validation

Development changes are made on a separate feature branch rather than directly on `main`.

The developer pushes the feature branch and creates a Pull Request targeting `main`. GitHub Actions automatically runs CI checks. A team member reviews the code and approves the Pull Request when the changes meet the requirements.

The changes are merged only after the required checks and reviews have been satisfied.

## 8. Continuous Deployment Workflow

The `deploy.yml` workflow runs when changes are pushed to `main`. It also supports manual execution through the GitHub Actions interface.

The workflow:

1. Checks out the source code.
2. Sets up Node.js.
3. Installs dependencies.
4. Runs quality checks and automated tests.
5. Builds the website.
6. Uploads the website as a GitHub Pages artifact.
7. Deploys the artifact to GitHub Pages.

The deployment job runs only when the validation and build job succeeds.

## 9. Security Configuration

- The CI workflow uses read-only repository permissions.
- The deployment job receives the permissions required to publish to GitHub Pages.
- No passwords, personal access tokens, or API keys are hard-coded in the workflow files.
- GitHub Actions uses built-in authentication for the GitHub Pages deployment.
- Pull Request reviews help prevent unreviewed changes from reaching the main branch.

## 10. Testing Strategy

The project uses Node.js's built-in test runner to check the existence of the HTML and CSS files, the profile heading, and the stylesheet link.

The pipeline is tested through the following experiments:

- **Successful execution:** Valid code passes the quality checks, tests, and build.
- **Deliberate failure:** A test is modified to check for a nonexistent file, causing the CI workflow to fail.
- **Correction:** The incorrect assertion is restored, and the workflow is run again to confirm success.
- **Pull Request validation:** A feature branch Pull Request triggers CI checks before merging.
- **Deployment verification:** The published website is opened in a browser to confirm that it works.

## 11. Deployment Model

This project uses **Continuous Deployment**. Eligible changes merged into the `main` branch are automatically validated and deployed to GitHub Pages.


## 13. Conclusion

This project demonstrates how GitHub Actions can automate code-quality checks, automated testing, build preparation, Pull Request validation, and deployment. It provides practical experience with collaborative development, failure detection, troubleshooting, and basic CI/CD security.