# fullstack-exp5

## Experiment 5.1: Component Lazy Loading using React.lazy and Suspense

### Aim
To improve frontend performance by implementing lazy loading of components in a Single Page Application using `React.lazy()` and `Suspense`.

### Software Requirements
- Node.js
- React (Vite)
- React Router DOM
- VS Code
- Web Browser

### Theory
Lazy loading is a technique used to improve application performance by loading components only when they are needed. In React, `React.lazy()` allows components to be imported dynamically. The `Suspense` component is used to display a fallback user interface while the component is being loaded.

This approach reduces the size of the initial bundle and enhances application performance because components are fetched only when the user navigates to them.

### Procedure
1. Created a React application using Vite.
2. Installed React Router DOM.
3. Created multiple components such as Home, About, and Contact.
4. Implemented lazy loading using `React.lazy()`.
5. Wrapped the components inside `Suspense`.
6. Added a 5‑second delay using `setTimeout()` to demonstrate the loading behavior.
7. Navigated between routes to observe how lazy loading works.

### Output
- Initially, no lazy‑loaded component is rendered.
- When navigation links are clicked, a fallback interface displaying "Loading..." appears.
- The selected component loads after a delay of 5 seconds.
- The initial bundle size of the application is reduced.

<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 47 11 AM" src="https://github.com/user-attachments/assets/75cd71a4-55ba-4376-891a-772aeef24776" />
<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 47 17 AM" src="https://github.com/user-attachments/assets/34a87a3a-71af-4c0a-a38f-4c1fd5beb946" />
<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 48 08 AM" src="https://github.com/user-attachments/assets/b8c920bc-513e-4785-830f-bf3783c39153" />

### Result
Component‑level lazy loading was successfully implemented using `React.lazy()` and `Suspense`. Components are loaded dynamically only when required, improving the overall performance of the application.

### Conclusion
Lazy loading improves frontend performance by decreasing the initial loading time and dynamically loading components when users navigate through the application.

---

## Experiment 5.2: Route-Based Lazy Loading in SPA

### Aim
To implement route‑based lazy loading in order to improve performance in a Single Page Application.

### Software Requirements
- Node.js
- React (Vite)
- React Router DOM
- VS Code
- Web Browser

### Theory
Route‑based lazy loading ensures that components related to specific routes are loaded only when a user navigates to that route. By using `React.lazy()` together with `Suspense`, page components can be imported dynamically during navigation instead of being included in the initial bundle.

This reduces the startup bundle size and improves the loading speed of the application.

### Procedure
1. Created a new React application using Vite.
2. Installed React Router DOM.
3. Developed multiple page components such as Dashboard, Profile, and Settings.
4. Applied lazy loading to the route components using `React.lazy()`.
5. Wrapped the routes inside `Suspense`.
6. Introduced a 5‑second delay using `setTimeout()` to simulate loading.
7. Navigated across routes to observe route‑based lazy loading.

### Output
- The landing page loads initially.
- Other page components are not included in the initial bundle.
- When navigating to Dashboard, Profile, or Settings, a fallback loading interface appears.
- The selected page loads after approximately 5 seconds.

<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 57 15 AM" src="https://github.com/user-attachments/assets/e1a83bb0-c405-4437-bb9a-85dd3b2bbf9b" />
<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 57 21 AM" src="https://github.com/user-attachments/assets/6995d908-3e77-4220-8b44-17f11c2d6380" />
<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 57 29 AM" src="https://github.com/user-attachments/assets/709d9429-d5a8-40e7-9cfe-c56e31f1bc4d" />
<img width="1512" height="982" alt="Screenshot 2026-03-02 at 10 57 39 AM" src="https://github.com/user-attachments/assets/a6e9d004-e01d-4d38-9819-8502d4aefc61" />

### Result
Route‑based lazy loading was implemented successfully, ensuring that page components are dynamically imported only when the corresponding route is accessed.

### Conclusion
Route‑based lazy loading improves application efficiency by minimizing the initial loading time and loading route‑specific components only when users navigate to them in a Single Page Application.
