import { connectToDB } from "@utils/database";
import Recipe from "@models/recipe";

export const POST = async(req,res) => {

    const {userId, recipe, tag} = await req.json();

    try{
        await connectToDB()

        const newRecipe = new Recipe({
            creator: userId,
            recipe,
            tag
        })

        await newRecipe.save()

        return new Response(JSON.stringify(newRecipe),{status:201})

    } catch(error){
        console.log(error)
        return new Response('Failed to add new recipe',{status:500})
    }
}