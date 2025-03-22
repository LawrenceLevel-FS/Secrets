# non-shared files
To get this project to work, first create a .env file

## Setup
1. Clone the repository.
2. Create a `.env` file in the root directory.
``` bash
touch .env
```
 ``` bash
  SECRET="" #add your secret here
   ```
``` bash
npm install #install the dependencies
npm run start #run the application
```

**The dot in front of a file signifies that it's a hidden file or directory**

## Final thoughts
- **Hardcoded Secret** – ☹️ High risk, exposed in code – ☹️ would not recommend.  
- **Shared Secret in Repo** – 😑 Risky, GitHub did not warn – ☹️ would not recommend.  
- **Non-Shared Secret** – 😀 Secure, best practice – 😀 Recommended.
