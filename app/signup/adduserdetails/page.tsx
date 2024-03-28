'use client'
//grabbed login UI from https://tailwindui.com/components/application-ui/forms/sign-in-forms
//grabbed login logic from https://supabase.com/docs/guides/auth/auth-helpers/nextjs
import { useRouter } from 'next/navigation'
import { useState, useEffect, ChangeEvent } from 'react'
import { createClient } from '@/utils/supabase/client'

export default function adduserdetails() {
  const [username, setUsername] = useState('');
  const [image, setImage] = useState()
  const [imageName, setImageName] = useState('')
  const router = useRouter();
  const supabase = createClient();

  const handleSignUp = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if(user) console.log(user)
    if(username !== '' && image !==null && user){
        
        uploadImageToSupabaseBucket();
        const { error } = await supabase
        .from('users')
        .update({username, pfp:imageName })   
        .eq('id', user.id)
        router.push("/")
    }
    
  }

  async function uploadImageToSupabaseBucket() {
    const { data, error } = await supabase
    .storage
    .from('userprofilepictures')
    .upload(imageName, image, {
      cacheControl: '3600',
      upsert: false
    })
    console.log(error)
  }
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files[0]) {
      setImage(event.target.files[0]),
      setImageName(event.target.files[0].name)
    }
  };

    function handleProfilePictureChange(e: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div className="flex flex-col justify-center p-3">
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Confirm user.
        </h2>
        <p>Add your username and your profile picture. Other users will see you with this name.</p>
      </div>
      <div className='my-5'>
        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
          Username
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className='mb-5'>
        <label htmlFor="profile-picture" className="block text-sm font-medium leading-6 text-gray-900">
          Profile picture
        </label>
        <div className="mt-2">
          <input
            id="profile-picture"
            name="profile-picture"
            type="file"
            onChange={handleImageUpload} 
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        </div>
        <div><button onClick={handleSignUp} className='py-2 px-3 text-white rounded-full bg-gradient-to-br from-blue-700 to-purple-700'>Confirm</button></div>
      
    </div>
  </div>

    
  )
}