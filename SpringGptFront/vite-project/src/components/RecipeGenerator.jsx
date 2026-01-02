import React from "react";

 function RecipeGenerator() {
  const [ingredients, setIngredients] = React.useState("");
  const[cusine,setCuisine]=React.useState("");
  const[dietaryRestrictions,setDietaryRestrictions]=React.useState("");
  const[recipe,setRecipe]=React.useState("");

  const createRecipe=async()=>{
    try{
      const response=await fetch(`http://localhost:8080/recipe-creator?ingredients=${ingredients}&dietaryRestrictions=${dietaryRestrictions}&cuisine=${cuisine}`)
      const data=await response.text();
      setRecipe(data);
        }catch(error){
        console.error("Error generating recipe:",error);
        }
  }

  return (
    <div>
      <h2>Recipe Generator Component</h2>

      <input 
      type="text" 
      value={ingredients}
      onChange={(e) => setIngredients(e.target.value)}
      placeholder="Enter ingredients (comma separated)" 
      />


      <input 
      type="text" 
      value={cusine}
      onChange={(e) => setCuisine(e.target.value)}
      placeholder="Enter cuisine type (optional)" 
      />



      <input 
      type="text" 
      value={dietaryRestrictions}
      onChange={(e) => setDietaryRestrictions(e.target.value)}
      placeholder="Enter dietary restrictions (optional)" 
      />

      <button onClick={createRecipe}>Generate Recipe</button>

      <div className="output">
        <p>{recipe}</p>
      </div>
        
      </div>
  );
}

export default RecipeGenerator;