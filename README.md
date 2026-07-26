# 🧮 JavaScript Calculator

A modern, responsive calculator built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. This project performs essential arithmetic operations while providing a clean user interface, keyboard support, and error handling—all without using any external libraries or frameworks.

---

## 📸 Preview

<img width="731" height="580" alt="Screenshot 2026-07-26 140926" src="https://github.com/user-attachments/assets/56801bdd-9cd0-4f44-ad87-14c7527eacd9" />

---

## 🚀 Features

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- 📊 Percentage calculations
- 🔢 Decimal number support
- ⌫ Delete (Backspace)
- 🧹 Clear All (AC)
- ⌨️ Keyboard support
- 📱 Responsive design
- ⚠️ Division-by-zero error handling
- 🎨 Modern and clean user interface
- ⚡ Fast and lightweight (no frameworks)

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 📂 Project Structure

```text
calculator-app/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

---

## 📋 How It Works

The calculator maintains three main pieces of information:

- **Current Operand** – The number currently being entered.
- **Previous Operand** – The previous number entered before selecting an operator.
- **Operation** – The selected mathematical operator (`+`, `-`, `×`, `÷`).

When the **equals (`=`)** button is pressed:

1. The previous and current operands are converted into numbers.
2. The selected operation is performed.
3. The result replaces the current operand.
4. The calculator resets for the next calculation.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|------|--------|
| `0 - 9` | Enter numbers |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `Enter` | Calculate |
| `=` | Calculate |
| `Backspace` | Delete last digit |
| `Escape` | Clear calculator |
| `%` | Percentage |

---

## 🎯 Supported Operations

| Operation | Example | Result |
|-----------|---------|--------|
| Addition | 8 + 4 | 12 |
| Subtraction | 15 - 7 | 8 |
| Multiplication | 9 × 5 | 45 |
| Division | 24 ÷ 6 | 4 |
| Percentage | 50% | 0.5 |

---

## 📱 Responsive Design

The calculator is fully responsive and works well on:

- Desktop computers
- Laptops
- Tablets
- Mobile phones

The layout automatically adjusts to different screen sizes while maintaining usability.

---

## 📚 Concepts Practiced

This project is excellent for reinforcing fundamental front-end development concepts.

### HTML

- Semantic HTML
- Buttons
- Data attributes
- Containers
- IDs and Classes

### CSS

- Flexbox
- CSS Grid
- Responsive Design
- Hover Effects
- Active States
- Shadows
- Border Radius
- Gradients
- Typography

### JavaScript

- DOM Manipulation
- Event Listeners
- Variables
- Functions
- Conditional Statements
- Switch Statements
- String Manipulation
- Number Conversion
- Error Handling
- Keyboard Events
- Updating the DOM

---

## 💻 Installation

### Clone the repository

```bash
git clone https://github.com/Forte-Romeo/calculator-javascript.git
```

### Navigate into the project

```bash
cd calculator-javascript
```

### Open the project

Simply open the `index.html` file in your preferred web browser.

No installation or dependencies are required.

---

## ▶️ Usage

1. Open the calculator in your browser.
2. Click the number buttons or use your keyboard.
3. Select a mathematical operator.
4. Enter the second number.
5. Press **=** or **Enter** to calculate the result.
6. Use **AC** to reset or **⌫** to delete the last digit.

---

## ⚠️ Error Handling

The calculator includes protection against common errors.

- Prevents multiple decimal points in a number.
- Displays an error when attempting to divide by zero.
- Prevents invalid calculations.
- Handles floating-point precision using JavaScript rounding.

---

## 🔮 Possible Future Improvements

Some features that could be added in future versions include:

- Scientific calculator mode
- Calculation history
- Memory buttons (MC, MR, M+, M-)
- Theme switcher (Light/Dark Mode)
- Sound effects
- Parentheses support
- Expression parser (instead of step-by-step evaluation)
- Copy result to clipboard
- Calculation animations

---

## 🎓 Learning Outcomes

By completing this project, you will gain practical experience with:

- Building responsive layouts
- Styling interfaces with CSS Grid and Flexbox
- Managing application state
- Handling user interactions
- Writing reusable JavaScript functions
- Working with the DOM
- Supporting keyboard input
- Implementing basic calculator logic

---

## 🤝 Contributing

Contributions are welcome.

If you have ideas for improvements or new features:

1. Fork the repository.
2. Create a new branch.
3. Commit your changes.
4. Open a Pull Request.

---

## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project for personal or commercial purposes.

---

## 👨‍💻 Author

**Ferguson (Forte) Romeo**

Information Technology Student | Aspiring Software + AI Engineer | Entrepreneur

GitHub: https://github.com/Forte-Romeo

---

⭐ If you found this project helpful, consider giving it a star on GitHub!
