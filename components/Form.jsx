import Link from 'next/link'
import React from 'react'

const Form = ({type,post,setPost,submitting,handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>

      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Post</span>
        <p className='max-w-md desc text-left'>
          {type} and share amazing recipes with the world, and feel free to provide the recipes in detail.
        </p>

        <form
        onSubmit={handleSubmit}
        className='mt-10 w-full flex flex-col max-w-2xl gap-7 glassmorphism'>
          <label>
            <span className='font-satoshi text-base font-semibold text-gray-700'>Your Recipe</span>
          </label>

          <textarea  
            value={post.recipe}
            onChange={(e)=> setPost({...post,recipe: e.target.value})}
            className='form_textarea'
            required
            placeholder='Write your recipe here...'
          />

          <label>
            <span className='font-satoshi text-base font-semibold text-gray-700'>Tag (e.g. #MangoCake, #Crossaint, #5minute)</span>
          </label>

          <input  
            value={post.tag}
            onChange={(e)=> setPost({...post,tag: e.target.value})}
            className='form_input'
            required
            placeholder='#tag'
          />

        <div className='flex-end mx-3 mb-5 gap-4'>

          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
          type='submit'
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
          {submitting? `${type}...`:type}
          </button>

        </div>

        </form>
      </h1>

    </section>
  )
}

export default Form