import { Schema,model,models } from "mongoose";

const RecipeSchema = new Schema({

    creator:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    recipe:{
        type:String,
        required: [true, 'Recipe is required']
    },
    tag:{
        type:String,
        required:[true,'Tag is required']
    }
})

const Recipe = models.Recipe || model('Recipe',RecipeSchema)

export default Recipe