# 🖥️ VS Code Clone

<div align="center">

![VS Code Clone](https://img.shields.io/badge/VS%20Code-Clone-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A beautiful, feature-rich Visual Studio Code clone built with modern web technologies.

[Features](#-features) • [Demo](#-demo) • [Installation](#-installation) • [Technologies](#-technologies) • [Project Structure](#-project-structure) • [Contributing](#-contributing)

</div>

---

## 📖 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Installation](#-installation)
- [Technologies](#-technologies)
- [Dependencies](#-dependencies)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [State Management](#-state-management)
- [Available Scripts](#-available-scripts)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 📁 File Explorer
- **Recursive File Tree** - Navigate through a hierarchical folder structure
- **Expand/Collapse Folders** - Click to toggle folder visibility with smooth animations
- **File/Folder Icons** - Dynamic icons based on file extensions (supports 500+ file types!)
- **Visual Feedback** - Clear indication of selected files and folders

### 📑 Tab Management
- **Multiple Tabs** - Open and manage multiple files simultaneously
- **Active Tab Indicator** - Visual highlight showing the currently active file
- **Close Tabs** - Individual tab closing with automatic focus management
- **Tab Persistence** - Tabs maintain state during session

### 🎨 Syntax Highlighting
- **Code Preview** - Beautiful syntax highlighting for code files
- **Line Numbers** - Easy code navigation with line numbers
- **Dark Theme** - Eye-friendly Atom One Dark theme
- **Multiple Languages** - Support for JavaScript, TypeScript, HTML, CSS, and more

### 🖱️ Context Menu
- **Right-Click Actions** - Context menu for quick actions
- **Close Tab** - Close specific tabs via context menu
- **Close All Tabs** - Quickly close all open tabs
- **Smart Positioning** - Context menu appears at cursor position

### 📐 Resizable Panels
- **Adjustable Layout** - Drag to resize the file explorer panel
- **Collapsible Sidebar** - Minimize the file tree for more coding space
- **Persistent Layout** - Panel sizes are saved automatically

### 🎯 Additional Features
- **Welcome Screen** - Beautiful welcome tab when no files are open
- **Responsive Design** - Works seamlessly on different screen sizes
- **Modern UI** - Clean, VS Code-inspired interface

---

## 🎬 Demo

When you open the application, you'll see:

1. **Left Panel** - File explorer with expandable folder tree
2. **Right Panel** - Code preview area with syntax highlighting
3. **Top Bar** - Open file tabs for quick navigation

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** or **pnpm**

### Step-by-Step Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ghaida-jaaisa/VS-Clone.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd VS-Clone
   ```

3. **Install dependencies**

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

   Using pnpm:
   ```bash
   pnpm install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 🛠️ Technologies

This project is built with a modern tech stack:

| Technology | Version | Description |
|------------|---------|-------------|
| **React** | 19.2.0 | UI library for building component-based interfaces |
| **TypeScript** | 5.9.3 | Type-safe JavaScript for better developer experience |
| **Vite** | 7.2.5 | Next-generation frontend build tool |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS framework |
| **Redux Toolkit** | 2.11.2 | State management solution |
| **React Redux** | 9.2.0 | Official React bindings for Redux |

---

## 📦 Dependencies

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@reduxjs/toolkit` | ^2.11.2 | Simplified Redux state management |
| `@tailwindcss/vite` | ^4.1.18 | Tailwind CSS integration for Vite |
| `react` | ^19.2.0 | Core React library |
| `react-dom` | ^19.2.0 | React DOM rendering |
| `react-redux` | ^9.2.0 | React-Redux bindings |
| `react-resizable-panels` | ^4.4.1 | Resizable panel layout components |
| `react-syntax-highlighter` | ^16.1.0 | Syntax highlighting for code display |
| `tailwindcss` | ^4.1.18 | Utility-first CSS framework |
| `uuid` | ^13.0.0 | Unique ID generation |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@eslint/js` | ^9.39.1 | ESLint JavaScript configuration |
| `@types/node` | ^24.10.1 | TypeScript definitions for Node.js |
| `@types/react` | ^19.2.5 | TypeScript definitions for React |
| `@types/react-dom` | ^19.2.3 | TypeScript definitions for React DOM |
| `@types/react-syntax-highlighter` | ^15.5.13 | TypeScript definitions for syntax highlighter |
| `@vitejs/plugin-react` | ^5.1.1 | Vite plugin for React |
| `eslint` | ^9.39.1 | JavaScript/TypeScript linter |
| `eslint-plugin-react-hooks` | ^7.0.1 | ESLint rules for React Hooks |
| `eslint-plugin-react-refresh` | ^0.4.24 | ESLint plugin for React Refresh |
| `globals` | ^16.5.0 | Global identifiers for linting |
| `typescript` | ~5.9.3 | TypeScript language |
| `typescript-eslint` | ^8.46.4 | TypeScript ESLint integration |
| `vite` | npm:rolldown-vite@7.2.5 | Build tool |

---

## 📁 Project Structure

```
VS-Clone/
├── 📄 index.html              # HTML entry point
├── 📄 package.json            # Project dependencies and scripts
├── 📄 vite.config.ts          # Vite configuration
├── 📄 tsconfig.json           # TypeScript configuration
├── 📄 tsconfig.app.json       # App-specific TypeScript config
├── 📄 tsconfig.node.json      # Node-specific TypeScript config
├── 📄 eslint.config.js        # ESLint configuration
├── 📄 README.md               # Project documentation
│
├── 📁 public/                 # Static assets
│   └── 📁 icons/              # 500+ file type icons (SVG)
│
└── 📁 src/                    # Source code
    ├── 📄 main.tsx            # Application entry point
    ├── 📄 App.tsx             # Root component
    ├── 📄 App.css             # App-specific styles
    ├── 📄 index.css           # Global styles
    │
    ├── 📁 app/                # Redux store configuration
    │   ├── 📄 store.ts        # Redux store setup
    │   └── 📁 features/       # Redux slices
    │       └── 📄 fileTreeSlice.ts  # File tree state management
    │
    ├── 📁 components/         # React components
    │   ├── 📄 FileSyntaxHighlighter.tsx  # Code syntax highlighting
    │   ├── 📄 IconImg.tsx              # Icon image component
    │   ├── 📄 OpenedFilesBar.tsx       # Tab bar component
    │   ├── 📄 OpenedFilesBarTab.tsx    # Individual tab component
    │   ├── 📄 Preview.tsx              # File preview container
    │   ├── 📄 RecursiveComponent.tsx   # File tree renderer
    │   ├── 📄 RenderFileIcon.tsx       # Dynamic file icon renderer
    │   ├── 📄 ResizablePanel.tsx       # Resizable layout component
    │   ├── 📄 WelcomeTab.tsx           # Welcome screen
    │   │
    │   ├── 📁 SVG/            # SVG icon components
    │   │   ├── 📄 Bottom.tsx      # Bottom arrow icon
    │   │   ├── 📄 CloseIcon.tsx   # Close (X) icon
    │   │   ├── 📄 File.tsx        # Generic file icon
    │   │   ├── 📄 Folder.tsx      # Folder icon
    │   │   └── 📄 Right.tsx       # Right arrow icon
    │   │
    │   └── 📁 ui/             # UI components
    │       └── 📄 ContextMenu.tsx  # Right-click context menu
    │
    ├── 📁 constant/           # Constants and configurations
    │   └── 📄 index.ts        # File extension icon mappings
    │
    ├── 📁 data/               # Mock/demo data
    │   └── 📄 fileTree.tsx    # Sample file tree structure
    │
    ├── 📁 interfaces/         # TypeScript interfaces
    │   └── 📄 index.ts        # Type definitions
    │
    ├── 📁 styles/             # Additional styles
    │   └── 📄 index.ts        # Style constants
    │
    └── 📁 utils/              # Utility functions
        └── 📄 functions.ts    # Helper functions
```

---

## 🧩 Components

### Core Components

| Component | Description |
|-----------|-------------|
| `App.tsx` | Main application component that orchestrates the layout |
| `ResizablePanel.tsx` | Creates the resizable split-panel layout |
| `RecursiveComponent.tsx` | Recursively renders the file tree structure |
| `Preview.tsx` | Container for displaying file content |
| `FileSyntaxHighlighter.tsx` | Renders code with syntax highlighting |
| `OpenedFilesBar.tsx` | Manages the tab bar for open files |
| `OpenedFilesBarTab.tsx` | Individual tab component with close functionality |
| `WelcomeTab.tsx` | Welcome screen displayed when no files are open |
| `RenderFileIcon.tsx` | Dynamically renders appropriate icons for files/folders |
| `ContextMenu.tsx` | Right-click context menu for tab actions |

### SVG Components

| Component | Description |
|-----------|-------------|
| `Bottom.tsx` | Downward arrow icon (expanded folder) |
| `Right.tsx` | Rightward arrow icon (collapsed folder) |
| `CloseIcon.tsx` | X icon for closing tabs |
| `File.tsx` | Default file icon |
| `Folder.tsx` | Default folder icon |

---

## 🗃️ State Management

This project uses **Redux Toolkit** for state management.

### Store Structure

```typescript
interface IInitialState {
  openedFiles: IFile[];      // Array of currently open files
  clickedFile: {
    activeTabId: string | null;  // ID of the active tab
    filename: string;            // Name of the active file
    fileContent: string | undefined;  // Content of the active file
  };
  tabIdToRemove: string | null;  // Tab marked for removal (context menu)
}
```

### Actions

| Action | Description |
|--------|-------------|
| `setOpenedFilesAction` | Updates the list of open files |
| `setClickedFileAction` | Sets the currently active/clicked file |
| `setTabIdToRemoveAction` | Marks a tab for removal via context menu |

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- [Visual Studio Code](https://code.visualstudio.com/) - The inspiration for this project
- [Material Icon Theme](https://github.com/PKief/vscode-material-icon-theme) - File icons
- [React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) - Code highlighting
- [React Resizable Panels](https://github.com/bvaughn/react-resizable-panels) - Panel layout

---

<div align="center">

Made with ❤️ by [Ghaida Jaaisa](https://github.com/Ghaida-jaaisa)

⭐ Star this repository if you found it helpful!

</div>
