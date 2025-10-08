import {useState} from 'react'

const App = () => {
  const [height,setHeight] = useState("")
  const [weight,setweight] = useState("")
  const [result,setResult] = useState("")

  const calculateBMI = ()=>{
    if(!height || !weight){
      setResult("Please enterboth height and weight!");
      return;
    }
    const heightInMeter = height/100;
    const bmi = (weight/(heightInMeter*heightInMeter)).toFixed(1);

    let catagory = "";
    if(bmi < 18.5) catagory = "Underweight";
    else if(bmi < 25) catagory = "Normal";
    else if(bmi < 30) catagory = "Overweight";
    else catagory = "Obese";
    setResult(`Your BMI is ${bmi} : Your are ${catagory}`);
    setHeight("");
    setweight("");
  }

  return (

    <div>
      <div className="container" >
        {/* Heading */}
        <h1>BMI Calculator</h1>

        {/* Height */}
        <label htmlFor="height">Height(cm)</label>
        <input type="number" id="height" placeholder='e.g. 170' value={height} onChange={(e)=>setHeight(e.target.value)}/>

        {/* Weight */}
        <label htmlFor="weight">Weight (Kg)</label>
        <input type="number" id='weight' placeholder='e.g. 65' value={weight} onChange={(e)=> setweight(e.target.value)} />

        {/* Btn */}
        <button onClick={calculateBMI}>Calculate</button>

        {/* Result */}
        <div className="result"> {result}</div>

      </div>
    </div>
  )
}

export default App
