import React from "react";
import appwriteService from "../appwrite/config"
import { Link } from "react-router-dom";
import { returnFirstArg } from "html-react-parser/lib/utilities";

function PostCard({ $id,title,featureImage }) {
    return
    (
     <Link  to ={`/post/$id`}
     > 
    <div className=' w-full bg-gray-100 rounded xl'>
        <div className='w-full justify-center mb-4'>
            <img src={appwriteService.getfilePreview(featureImage)} alt={title}
            className='rounded-xl' />
            
             </div>
             <h2
             className="text-xl font-bold">title</h2>
    </div>
     </Link>
    )
    
    
}
export default PostCard;