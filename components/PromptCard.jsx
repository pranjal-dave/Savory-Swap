'use client'

import { useState,useEffect } from "react"
import Image from 'next/image'
import { useSession } from "next-auth/react"
import { usePathname,useRouter } from "next/navigation"

const PromptCard = ({recipe,handleTagClick,handleEdit,handleDelete}) => {

  const [copied, setCopied] = useState("")

  const handleCopy = () => {
    setCopied(recipe.recipe)
    navigator.clipboard.writeText(recipe.recipe)
    setTimeout(() => setCopied(""),3000)
  }

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image 
          src = {recipe.creator.image}
          alt = 'user_image'
          width = {40}
          height = {40}
          className="rounded-full object-contain"/>

          <div className="flex flex-col">
            <h3 className="font-satoshi text-gray-900 font-semibold">{recipe.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{recipe.creator.email}</p>
          </div>
        </div>
        <div className="copy_btn" onClick={handleCopy}>
          <Image
            alt = 'copy_btn'
            src = {copied === recipe.recipe
              ? '/assets/icons/tick.svg'
              : '/assets/icons/copy.svg'
            }
            width={12}
            height={12}
          /> 
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{recipe.recipe}</p>
      <p className="blue_gradient cursor-pointer text-sm font-inter"
        onClick={()=>handleTagClick && handleTagClick(recipe.tag)}
      >{recipe.tag}</p>
    </div>
  )
}

export default PromptCard
