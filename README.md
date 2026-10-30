## ⚡ Dev Stack

**Dev Stack** is a technology discovery web application where developers can explore different web development technologies, learn about their features, and build their own technology stack by selecting their preferred tools.


**Live Demo |** [Dev Stack](https://dev-stack-web.surge.sh/)


---



#### 📁 Project Structure

```text
dev-stack/
├── public/
│   └── CNAME
│   └── stacks-data.json
├── src/
│   ├── assets/
│   │   ├── logo-text.png
│   │   └── banner-stack.png
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Technologies/
│   │   │   ├── TechnologiesSection.jsx
│   │   │   ├── TechnologyCard.jsx
│   │   │   └── StackCard.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

<br>




### 📌 About the Project

Dev Stack is designed to help developers discover and organize technologies used in modern web development.

Users can explore technology cards containing essential information such as descriptions, categories, difficulty levels, ratings, and popularity badges. They can also select their preferred technologies and organize them in a personal stack panel.

The project focuses on practicing **React components, props, state management, Promise handling, Suspense, dynamic rendering, array methods, and interactive UI development**.

---



### ✨ Key Features

- **Technology Explorer** — Explore different web development technologies.
- **Dynamic Technology Cards** — Display technology information from JSON data.
- **Technology Details** — View descriptions, categories, difficulty levels, and ratings.
- **Personal Stack** — Add selected technologies to your own stack.
- **Remove Technology** — Remove individual technologies from the selected stack.
- **Clear Stack** — Remove all selected technologies at once.
- **Responsive Design** — Optimized layouts for mobile, tablet, and desktop screens.

---





### ⚙️ Technology Stack

| Technology | Purpose |
|:---|:---|
| **HTML5** | Semantic structure |
| **Tailwind CSS** | Responsive styling and layouts |
| **DaisyUI** | Reusable UI components |
| **JavaScript (ES6)** | Application logic and interactivity |
| **React** | Component-based UI development |
| **Vite** | Development server and build tool |
| **JSON** | Storing AI model data |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Surge** | Project deployment |

---



### 🔌 Data Integration

The project uses a locally stored `stacks.json` file containing information about different web development technologies.

Each technology object includes properties such as:

| Property | Description |
|:---|:---|
| `id` | Unique technology identifier |
| `image` | Technology logo or image |
| `title` | Technology name |
| `description` | Short technology overview |
| `badge` | Popularity or status label |
| `category` | Technology category |
| `level` | Learning difficulty |
| `rating` | Technology rating |

The data is retrieved using JavaScript's `fetch()` method and handled through **Promises, async/await, React's `use()`, and Suspense** to render technology cards dynamically.

---

<br>


#### || Prevent Duplicate Technology Stack Entries

```jsx
isAdded={isInStack.find(item => item.id === stack.id)}
```





### 🧩 Development Tools

- **Visual Studio Code** — Code editor
- **Chrome DevTools** — Debugging and inspecting the application
- **Git Bash** — Running commands and managing Git
- **GitHub** — Hosting and managing source code
- **Surge** — Deploying the project

---



### || Stack Management

The personal stack panel allows users to organize their preferred technologies.

- `map()` — Render selected technologies dynamically.
- `find()` — Check whether a technology already exists in the stack.
- `filter()` — Remove a selected technology from the stack.
- `useState()` — Manage the selected technology list.
- `setIsInStack([])` — Clear all selected technologies.




<br>




## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.