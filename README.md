# Expense Tracker

A simple and intuitive React application to help you track, search, categorize, sort, and visualize your expenses. This app provides a clean UI to input expense data, view totals, and display a pie chart breakdown by category.

---

## Features

- Add expenses with name, description, amount, category, and date
- Real-time search filtering
- Category filtering
- Sort by category or amount
- Pie chart visualization of category spending
- Remove individual expense entries
- Total expenses display

---

## Project Structure

```
src/
│
├── App.jsx               # Main component with state logic
├── data/
│   └── data.js           # Initial expense data
├── ExpenseForm.jsx       # Form to add new expenses
├── ExpenseTable.jsx      # Table displaying expenses
├── searchBox.jsx         # Input fields for search, filter, and sort
├── styles/
│   ├── App.css
│   ├── ExpenseTable.css
│   ├── ExpenseForm.css
│   └── searchBox.css
└── index.js              # Entry point
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
# or
npm start
```

---

## Built With

- React – JavaScript UI library
- Vite – Development tooling
- @mui/x-charts – For rendering the PieChart
- Bootstrap Icons – For delete/trash icons

---

## Example Expense Object

```js
{
  id: 1712923456789,
  name: "Groceries",
  description: "Weekly shopping",
  category: "Food & Groceries",
  amount: 3500,
  date: "2024-04-12"
}
```

---

## Screenshots

> Include screenshots of:
- The chart + form section
- The table with rows
- The search and sort filters in use

---

## License

This project is open-source and available under the MIT License.

---

## Acknowledgements

- Pie Chart powered by MUI X Charts
- Icons by Bootstrap Icons
