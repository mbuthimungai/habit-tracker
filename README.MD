### **Habit Tracker App**

Mobile app that enables users to track, manage, and organize their habits.  
**Personal Project**

---

### **Tech-stack**

**React Native** – cross-platform mobile app framework used for building the UI and native modules.  
**TypeScript** – statically typed superset of JavaScript to ensure type safety across components and state.  
**Redux Toolkit** – official, opinionated Redux wrapper for managing global state more concisely and efficiently.  
**React Navigation** – library used for navigating between screens in a stack and tab-based flow.  
**AsyncStorage** – persistent local storage mechanism for saving user habit data locally.

---

### **Architecture**

**MVVM – Model View ViewModel**

- **Model**: Data structure representing each habit (name, category, time, reminder flag).
- **View**: Functional components built with React Native that handle user interaction and UI.
- **ViewModel (Redux Slice)**: Encapsulates business logic and state management using Redux Toolkit’s `createSlice`.

---

### **Features**

- Add, delete, and list habits dynamically.
- View habit details and reminders.
- Local data persistence using AsyncStorage (or optionally backend sync).
- Clean separation of logic via slices and reusable components.

---

### **Build Tools**

**Metro Bundler** – React Native’s development bundler.  
**ESLint & Prettier** – ensure code quality and formatting consistency.

---

![Home Screen](https://drive.google.com/uc?export=view&id=1HQYz34co09QLSX6G1POHIKsK1lXVbRtJ)
![Add Habit Screen](https://drive.google.com/uc?export=view&id=1NAZQOXuPW664gmhtn_3Nz_kRRemo9E9J)
