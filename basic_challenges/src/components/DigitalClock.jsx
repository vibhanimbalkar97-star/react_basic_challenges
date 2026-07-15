
const DigitalClock = () => {

    const

  return (
    <div>
        
    </div>
  )
}

export default DigitalClock




// > **Create a Digital Clock in React.**

// What should you think before writing code?

// Don't open VS Code immediately.

// Think for 30 seconds.

// ```text
// Need current time?

// ↓

// Need to display it

// ↓

// Need it to update every second

// ↓

// Need Date()

// ↓

// Need state

// ↓

// Need useEffect

// ↓

// Need setInterval

// ↓

// Need cleanup
// ```

// Now start coding.

// ---

// # Step 1: Show Current Time Only

// Interviewer:

// > First, just show the current time.

// ### Think

// Current time changes.

// If data changes in UI,

// What do we use?

// ✅ State

// ### Code

// ```jsx
// import { useState } from "react";

// function App() {
//   const [time] = useState(new Date());

//   return (
//     <h1>{time.toLocaleTimeString()}</h1>
//   );
// }

// export default App;
// ```

// ---

// ### Interviewer asks

// Why `new Date()`?

// Answer

// > JavaScript provides the Date object. `new Date()` gives the current date and time.

// ---

// ### Interviewer asks

// Why useState?

// Answer

// > Because time is dynamic. React displays dynamic values using state.

// ---

// But...

// Current output

// ```text
// 10:30:15 AM
// ```

// After one second

// Still

// ```text
// 10:30:15 AM
// ```

// Problem!

// ---

// # Step 2: Update Every Second

// Interviewer

// > Good.

// Now update it every second.

// ---

// Think

// How can something repeat every second?

// JavaScript provides

// ```js
// setInterval()
// ```

// ---

// Syntax

// ```js
// setInterval(() => {

// },1000)
// ```

// 1000 ms

// =

// 1 second

// ---

// Now where should we write setInterval?

// Wrong

// ```jsx
// function App(){

// setInterval(()=>{

// },1000)

// }
// ```

// Why wrong?

// Every render

// ↓

// New interval

// ↓

// Again render

// ↓

// Again interval

// ↓

// Hundreds of intervals

// ❌

// ---

// So interviewer asks

// > Where should we write it?

// Answer

// Inside

// ```jsx
// useEffect()
// ```

// Because

// We want to create interval only once.

// ---

// Code

// ```jsx
// useEffect(() => {

// }, []);
// ```

// ---

// Why empty dependency?

// Because

// We want effect only once.

// ---

// # Step 3: Update State

// Now interval should update time.

// ```jsx
// setInterval(() => {

// setTime(new Date())

// },1000)
// ```

// ---

// Complete code

// ```jsx
// import { useEffect, useState } from "react";

// function App() {

// const [time,setTime]=useState(new Date());

// useEffect(()=>{

// setInterval(()=>{

// setTime(new Date())

// },1000)

// },[])

// return(

// <h1>{time.toLocaleTimeString()}</h1>

// )

// }
// ```

// ---

// Interviewer

// Will this work?

// Answer

// Yes.

// But...

// There is another problem.

// ---

// # Step 4: Cleanup

// Interviewer

// What happens if component unmounts?

// Interval still runs.

// Memory leak.

// Need cleanup.

// ---

// How?

// Store interval id.

// ```jsx
// const interval = setInterval(() => {

// },1000)
// ```

// ---

// Cleanup

// ```jsx
// return ()=>{

// clearInterval(interval)

// }
// ```

// ---

// Now code

// ```jsx
// useEffect(()=>{

// const interval=setInterval(()=>{

// setTime(new Date())

// },1000)

// return ()=>{

// clearInterval(interval)

// }

// },[])
// ```

// ---

// Interviewer asks

// Why clearInterval?

// Answer

// To stop the interval when the component unmounts and prevent memory leaks.

// ---

// # Step 5 (Feature Added)

// Interviewer

// Now show

// ```text
// 10:35:40
// ```

// without

// ```text
// AM
// ```

// Think

// Need 24-hour format.

// Google?

// No.

// JavaScript already has

// ```js
// toLocaleTimeString()
// ```

// Pass options

// ```jsx
// time.toLocaleTimeString("en-GB")
// ```

// Output

// ```text
// 22:35:40
// ```

// ---

// # Step 6

// Interviewer

// Now show only

// ```text
// 10:35
// ```

// No seconds.

// Answer

// ```jsx
// time.toLocaleTimeString([],{

// hour:"2-digit",

// minute:"2-digit"

// })
// ```

// ---

// # Step 7

// Interviewer

// Now show

// ```text
// 10:35:20 AM
// ```

// Answer

// Default

// ```jsx
// time.toLocaleTimeString()
// ```

// ---

// # Step 8

// Interviewer

// Now show

// ```text
// Monday
// ```

// Use

// ```jsx
// time.toLocaleDateString([],{

// weekday:"long"

// })
// ```

// Output

// ```text
// Monday
// ```

// ---

// # Step 9

// Interviewer

// Now show

// ```text
// 15 July 2026
// ```

// Answer

// ```jsx
// time.toLocaleDateString()
// ```

// ---

// # Step 10

// Interviewer

// Now show

// ```text
// Monday

// 15 July 2026

// 10:45:50 AM
// ```

// Now your UI becomes

// ```jsx
// <div>

// <h1>

// {time.toLocaleTimeString()}

// </h1>

// <p>

// {time.toLocaleDateString()}

// </p>

// <p>

// {time.toLocaleDateString([],{

// weekday:"long"

// })}

// </p>

// </div>
// ```

// ---

// # Step 11 (Tricky Question)

// Interviewer

// Can we use

// ```jsx
// setTimeout()
// ```

// instead of

// ```jsx
// setInterval()
// ```

// Answer

// Yes.

// But

// `setTimeout` runs only once.

// Need recursion.

// ```jsx
// setTimeout(()=>{

// setTime(new Date())

// },1000)
// ```

// For continuous updates, `setInterval` is simpler.

// ---

// # Step 12 (Very Common Question)

// Interviewer

// Why useState?

// Why not

// ```jsx
// let time=new Date()
// ```

// Answer

// Changing a normal variable doesn't trigger a React re-render.

// State updates cause React to render the UI again.

// ---

// # Step 13 (Another Tricky Question)

// Interviewer

// Can we remove

// ```jsx
// useEffect()
// ```

// No.

// Because

// Every render would create a new interval.

// Eventually hundreds of intervals would run simultaneously.

// ---

// # Final Interview Thinking

// Whenever you're asked to build a **Digital Clock**, don't panic.

// Think like this:

// ```text
// Current Time

// ↓

// Need Date()

// ↓

// Need State

// ↓

// Need UI

// ↓

// Need update every second

// ↓

// setInterval()

// ↓

// Where?

// ↓

// useEffect()

// ↓

// Cleanup?

// ↓

// clearInterval()
// ```

// ---

// # 🎯 What the interviewer is actually testing

// They are **not** testing whether you remember `toLocaleTimeString()`.

// They are testing whether you understand **React's flow**:

// * ✅ When should data be stored in `state`?
// * ✅ When should `useEffect` be used?
// * ✅ Why does `setInterval` belong inside `useEffect`?
// * ✅ Why is cleanup (`clearInterval`) necessary?
// * ✅ Can you add new features without rewriting everything?

