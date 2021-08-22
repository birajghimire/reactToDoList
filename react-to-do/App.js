import React from "react"
import { useState } from "react";


const App = () => {
  let [title, setToDo] = useState('');
  let [date, setDate] = useState('');
  let [category, setCategory] = useState('');
  let [title1, setToDo1] = useState('');
  let [date1, setDate1] = useState('');
  let [category1, setCategory1] = useState('');
  let [title2, setToDo2] = useState('');
  let [date2, setDate2] = useState('');
  let [category2, setCategory2] = useState('');
  let [title3, setToDo3] = useState('');
  let [date3, setDate3] = useState('');
  let [category3, setCategory3] = useState('');
  let [title4, setToDo4] = useState('');
  let [date4, setDate4] = useState('');
  let [category4, setCategory4] = useState('');
  


  return (
    <div style = {{padding: "10px 20px", textAlign: "center", color: "black",border: "solid", backgroundColor: "gray"}}>
      <h2 style={{fontSize: 50, }}>Biraj's 2021 To Do List</h2>
      
      {/*Task1 To-do*/}
      <form>
        <label>1. Please Enter To Do: </label>
        <input 
        placeholder= "Enter Here"
          type="text" 
          required 
          value={title}
          onChange={(e) => setToDo(e.target.value)}
        />
        <select
          value={title}
          onChange={(e) => setToDo(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Play Basketball">Play Basketball</option>
          <option value="Eat Dinner">Eat Dinner</option>
          <option value="Go Outside">Go Outside</option>
          <option value="Go to Sleep">Go to Sleep</option>
          <option value="Meet Friends">Meet Friends</option>
        </select>
         
        {/*Task1 Date*/}
        <label>Please Enter the Date:</label>
        <input
        placeholder= "MM/DD/YYYY"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
   <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
          <option value="">Optional</option>
          <option value="Christmas">Christmas</option>
          <option value="Thanksgiving">Thanksgiving</option>
          <option value="Easter">Easter</option>
        </select>
    
        {/*Task1 Category*/} 
        <label>Category:</label>
        <input
        placeholder= "Enter Type of Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Sports">Sports</option>
          <option value="Gym">Gym</option>
        </select>
        <ul style = {{padding: "10px 20px", textAlign: "center", listStyle: "none",}}>
        <li> {<input type="checkbox"/>} Task: {title} | Date: {date} | Category: {category}</li>
        </ul>
      </form>

      <form>
        {/*Task2 To-do*/}
        <label>2. Please Enter To Do: </label>
        <input 
        placeholder= "Enter Here"
          type="text" 
          required 
          value={title1}
          onChange={(e) => setToDo1(e.target.value)}
        />
        <select
          value={title1}
          onChange={(e) => setToDo1(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Play Basketball">Play Basketball</option>
          <option value="Eat Dinner">Eat Dinner</option>
          <option value="Go Outside">Go Outside</option>
          <option value="Go to Sleep">Go to Sleep</option>
          <option value="Meet Friends">Meet Friends</option>
        </select>
         
        {/*Task2 Date*/}
        <label>Please Enter the Date:</label>
        <input
        placeholder= "MM/DD/YYYY"
          required
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        />
   <select
          value={date1}
          onChange={(e) => setDate1(e.target.value)}
        >
          <option value="">Optional</option>
          <option value="Christmas">Christmas</option>
          <option value="Thanksgiving">Thanksgiving</option>
          <option value="Easter">Easter</option>
        </select>
    
        {/*Task2 Category*/} 
        <label>Category:</label>
        <input
        placeholder= "Enter Type of Category"
          value={category1}
          onChange={(e) => setCategory1(e.target.value)}
        />
        <select
          value={category1}
          onChange={(e) => setCategory1(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Sports">Sports</option>
          <option value="Gym">Gym</option>
        </select>
        <ul style = {{padding: "10px 20px", textAlign: "center", listStyle: "none"}}>
        <li>{<input type="checkbox"/>} Task: {title1} | Date: {date1} | Category: {category1}</li>
        </ul>
      </form>

         {/*Task3 Todo*/}
      <form>
        <label>3. Please Enter To Do: </label>
        <input 
        placeholder= "Enter Here"
          type="text" 
          required 
          value={title2}
          onChange={(e) => setToDo2(e.target.value)}
        />
        <select
          value={title2}
          onChange={(e) => setToDo2(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Play Basketball">Play Basketball</option>
          <option value="Eat Dinner">Eat Dinner</option>
          <option value="Go Outside">Go Outside</option>
          <option value="Go to Sleep">Go to Sleep</option>
          <option value="Meet Friends">Meet Friends</option>
        </select>
         
        {/*Task3 Date*/}
        <label>Please Enter the Date:</label>
        <input
        placeholder= "MM/DD/YYYY"
          required
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        />
   <select
          value={date2}
          onChange={(e) => setDate2(e.target.value)}
        >
          <option value="">Optional</option>
          <option value="Christmas">Christmas</option>
          <option value="Thanksgiving">Thanksgiving</option>
          <option value="Easter">Easter</option>
        </select>
    
        {/*Task3 Category*/} 
        <label>Category:</label>
        <input
        placeholder= "Enter Type of Category"
          value={category2}
          onChange={(e) => setCategory2(e.target.value)}
        />
        <select
          value={category2}
          onChange={(e) => setCategory2(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Sports">Sports</option>
          <option value="Gym">Gym</option>
        </select>
        <ul style = {{padding: "10px 20px", textAlign: "center", listStyle: "none"}}>
        <li>{<input type="checkbox"/>} Task: {title2} | Date: {date2} | Category: {category2}</li>
        </ul>
      </form>

      <form>
          {/*Task4 Date*/}
        <label>4. Please Enter To Do: </label>
        <input 
        placeholder= "Enter Here"
          type="text" 
          required 
          value={title3}
          onChange={(e) => setToDo3(e.target.value)}
        />
        <select
          value={title3}
          onChange={(e) => setToDo3(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Play Basketball">Play Basketball</option>
          <option value="Eat Dinner">Eat Dinner</option>
          <option value="Go Outside">Go Outside</option>
          <option value="Go to Sleep">Go to Sleep</option>
          <option value="Meet Friends">Meet Friends</option>
        </select>
         
        {/*Task4 Date*/}
        <label>Please Enter the Date:</label>
        <input
        placeholder= "MM/DD/YYYY"
          required
          value={date3}
          onChange={(e) => setDate3(e.target.value)}
        />
   <select
          value={date3}
          onChange={(e) => setDate3(e.target.value)}
        >
          <option value="">Optional</option>
          <option value="Christmas">Christmas</option>
          <option value="Thanksgiving">Thanksgiving</option>
          <option value="Easter">Easter</option>
        </select>
    
        {/*Task4 Category*/} 
        <label>Category:</label>
        <input
        placeholder= "Enter Type of Category"
          value={category3}
          onChange={(e) => setCategory3(e.target.value)}
        />
        <select
          value={category3}
          onChange={(e) => setCategory3(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Sports">Sports</option>
          <option value="Gym">Gym</option>
        </select>
        <ul style = {{padding: "10px 20px", textAlign: "center", listStyle: "none"}}>
        <li>{<input type="checkbox"/>} Task: {title3} | Date: {date3} | Category: {category3}</li>
        </ul>
      </form>
       
      <form>
           {/*Task5 Date*/}
        <label>5. Please Enter To Do: </label>
        <input 
        placeholder= "Enter Here"
          type="text" 
          required 
          value={title4}
          onChange={(e) => setToDo4(e.target.value)}
        />
        <select
          value={title4}
          onChange={(e) => setToDo4(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Play Basketball">Play Basketball</option>
          <option value="Eat Dinner">Eat Dinner</option>
          <option value="Go Outside">Go Outside</option>
          <option value="Go to Sleep">Go to Sleep</option>
          <option value="Meet Friends">Meet Friends</option>
        </select>
         
        {/*Task5 Date*/}
        <label>Please Enter the Date:</label>
        <input
        placeholder= "MM/DD/YYYY"
          required
          value={date4}
          onChange={(e) => setDate4(e.target.value)}
        />
   <select
          value={date4}
          onChange={(e) => setDate4(e.target.value)}
        >
          <option value="">Optional</option>
          <option value="Christmas">Christmas</option>
          <option value="Thanksgiving">Thanksgiving</option>
          <option value="Easter">Easter</option>
        </select>
    
        {/*Task5 Category*/} 
        <label>Category:</label>
        <input
        placeholder= "Enter Type of Category"
          value={category4}
          onChange={(e) => setCategory4(e.target.value)}
        />
        <select
          value={category4}
          onChange={(e) => setCategory4(e.target.value)}
        >
           <option value="">Optional</option>
          <option value="Sports">Sports</option>
          <option value="Gym">Gym</option>
        </select>
        <ul style = {{padding: "10px 20px", textAlign: "center", listStyle: "none"}}>
        <li> {<input type="checkbox"/>} Task: {title4} | Date: {date4} | Category: {category4}</li>
        </ul>

      </form>

      <form>
        <label>Please Click the Button Below to Erase All Content </label>
        <form>
        <label> - - - - - - - - - - - - -</label>
        </form>
        
        <div className="hi"><button>Reset To-Do List</button></div>
        </form>
  </div>
  )
  }
  export default App