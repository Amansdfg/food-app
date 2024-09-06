'use server';
import { saveMeal } from "./meals";
import { redirect } from 'next/navigation';
function isTextInValid(text){
  return(!text.trim()|| text.trim==='');
}
export async function shareMeal(prevFrom,formData){
    const meal={
      title:formData.get("title"),
      image:formData.get("image"),
      summary:formData.get("summary"),    
      instructions:formData.get("instructions"),
      creator:formData.get("name"),
      creator_email:formData.get("email"),  
    };
    if(isTextInValid(meal.title)||  
    isTextInValid(meal.summary)||
    isTextInValid(meal.instructions)||
    isTextInValid(meal.creator)||
    isTextInValid(meal.creator_email)||
    meal.creator_email.include("@")||
    meal.image|| meal.image.size===0){
      return {message:"Invalid input"};
    }  
    await saveMeal(meal);
    redirect('/meals')
  }
