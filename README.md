 Student Roster Card Renderer

This project solves the problem of rendering a list of currently enrolled students as reusable card components using React Native and JSX.

 Problem

The IT313 registrar has given us a list of students. The task is to build a small Expo app that renders each student as a reusable card component, styled like a real class roster app.

 Component structure

- `StudentCard` receives `name`, `course`, `units`, and `isFullLoad` as props.
- The component destructures those props in its function signature and renders them inside JSX.
- A `Full Load` label appears only when `isFullLoad` is `true` using a conditional JSX expression.
- `StudentRoster` stores the `students` array, renders the roster header, and maps over the array to render one `StudentCard` for each student.
- The roster includes a button to reverse the students array and demonstrates why a stable `key` such as `student.id` is important in React.

 React key note

Before the final version, it is helpful to temporarily swap the list key from `student.id` to the array index and then reverse the roster. When the list ordering changes, React can reuse the wrong element and the UI may appear stale or update incorrectly. Restoring `student.id` keeps each card stable and properly matched to the correct student.

 Run the app

From the project folder, run:

npm install
npm start


```bash
npx expo start
```

Then open the Expo development server in a web browser or on a simulator/device.
