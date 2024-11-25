import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => { // Fixed toggleTheme spelling
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}> {/* Updated toggleTheme */}
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
}

export { useTheme, ThemeProvider }


// In React, when you create a provider component like ThemeProvider, passing children as an argument is essential because it allows any nested components (children) to have access to the context values provided by ThemeContext.Provider.

// Here's why:
// children in React:

// children is a special prop in React that represents all the components or elements nested inside your component. It’s automatically passed to any component that wraps other components or elements.
// Example:

// jsx
// Copy code
// <ThemeProvider>
//   <App />  {/* This is the "children" */}
// </ThemeProvider>
// Why pass children as an argument:

// When you use a context provider (<ThemeContext.Provider>), it wraps child components, giving them access to the context values (in this case, isDarkMode and toggleTheme).
// By passing children to the ThemeProvider component, you're saying, "Render whatever is inside <ThemeProvider> along with providing the context values to those children."
// Access to the context in children components:

// Any component wrapped by ThemeProvider can now access the isDarkMode and toggleTheme values using useContext(ThemeContext).
// Example:
// jsx
// Copy code
// const App = () => {
//   const { isDarkMode, toggleTheme } = useTheme();

//   return (
//     <div style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
//       <p>The current theme is {isDarkMode ? 'Dark' : 'Light'}</p>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//     </div>
//   );
// };

// // Wrapping App component with ThemeProvider
// <ThemeProvider>
//   <App />  {/* This is passed as children */}
// </ThemeProvider>
// children prop: In the ThemeProvider, we pass {children} inside the ThemeContext.Provider so that the App component (and any other nested components) gets rendered and has access to the context.