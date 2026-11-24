import { useState } from 'react'
import './App.css'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { CiLinkedin } from 'react-icons/ci'
import { RxPeople } from 'react-icons/rx'
import { GoBook } from 'react-icons/go'
import { MdCorporateFare } from 'react-icons/md'
import { RiGovernmentLine } from 'react-icons/ri'
import { FiMessageSquare } from 'react-icons/fi'
import { LuBriefcase } from 'react-icons/lu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='flex justify-center gap-8 h-20 flex-wrap'>
      <li className='list-none flex justify-center items-center text-xl gap-2'><RxPeople />Success Stories</li>
      <li className='list-none flex justify-center items-center text-xl gap-2'><GoBook />Blog</li>
      <li className='list-none flex justify-center items-center text-xl gap-2'><LuBriefcase />Placement Partners</li>
      <li className='list-none flex justify-center items-center text-xl gap-2'><MdCorporateFare />Corporate</li>
      <li className='list-none flex justify-center items-center text-xl gap-2'><RiGovernmentLine />Government</li>
      <li className='list-none flex justify-center items-center text-xl gap-2'><FiMessageSquare />Online Counselling</li>

    </nav>
    <div className='bg-lime-200 h-100 flex flex-col items-center gap-4 justify-center rounded-b-4xl'>
      <h1 className='text-green-800 text-center text-4xl font-bold font-weight-300 w-4/6'>Artificial Intelligence is Taking over CyberSecurity</h1>
      <p className='font-normal font-weight:300 text-2xl w-4/6'>Artificial Intelligence (AI) drives innovations that enhance threat discovery, vulnerability analysis, code reviewing, and time-consuming tasks automation, enabling companies to adapt to emerging digi</p>
    </div>
    <div className='flex justify-center my-16'>
    <img src="https://www.mindrisers.com.np/media/static/Images/blog/banner/viber_image_2026-07-31_14-34-55-881.jpg" alt="photo"/>
    </div>
    <section className='flex justify-center gap-5 flex-flow'>
      <div className='flex flex-col gap-6 items-center px-4 mx-7'>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm0C-5j5mYPP_uZDRCdDAApFEyzKCbBj9k-3GO4-5VhA&s=10" alt="facebook_logo" width="50px" className='border rounded' />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE264cyqlcIpV9jQn_DWUOoxyXlu1oTEMExotZtozbPQ&s=10" alt="twitter_logo" width="45px" className='border rounded'/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRUhPwGF_h1Kxz8w1srAGz6z6cmCcD38nakJsVqIabxozz_sdctf9gVvc&s=10" alt="linkedin_logo" width="70px" /> */}

          <li className='list-none border p-2 rounded-lg border-lightgray-500'><FaFacebook className='w-7 h-7'/></li>
          <li className='list-none border p-2 rounded-lg border-lightgray-500'><FaXTwitter className='w-7 h-7'/></li>
          <li className='list-none border p-2 rounded-lg border-lightgray-500'><CiLinkedin className='w-7 h-7'/></li>
        <h1 className='text-2xl font-bold font-weight: 700'>866</h1>
        <h1 className='text-xl'>views</h1>
      </div>
      <div className='w-3/6 flex flex-col gap-6 text-xl'>
      <div className=' flex justify-between'>
        <p className='text-green-900 text-3xl text-semi-bold'>Astha Chhatri - Author</p>
        <p className='text-lg'>2026-08-04</p>
      </div>
      <h1>In our previous blog, we discussed how Mindrisers’ Cybersecurity Training with AI curriculum has been updated to include hands-on components in Web Security, Mobile Application Security, Cloud Security, and AI for Security. [Explore : Mindrisers’ Updated Cybersecurity Course: AI-Integrated Training for the Future ] </h1>
      <h1>As the field of cybersecurity grows increasingly complex, evolving with new technology, vulnerabilities, trends, and employer needs, cybersecurity training programs must also adapt to prepare students for the latest developments. Before making any updates, the team at Mindrisers Institute of Technology analyzed how the changes would benefit the students and the curriculum. The result is a revised cybersecurity training program that enables students to gain valuable and relevant skills that will prepare them for the modern IT workplace and future cybersecurity roles.</h1>
      <h1>In particular, Mindrisers focused on providing an education in the most relevant and desirable skills to students in order to prepare them for their future careers.</h1>
      <h1 className='text-green-900 font-bold text-2xl'>1. The Growing Role of AI in Cybersecurity</h1>
      <p>Artificial Intelligence (AI) drives innovations that enhance threat discovery, vulnerability analysis, code reviewing, and time-consuming tasks automation, enabling companies to adapt to emerging digital threats and improve overall cybersecurity resilience. Therefore, it has become essential for security professionals to learn and understand how to leverage and benefit from AI-enabled solutions. To address this need, Mindrisers’s upgraded Cybersecurity Training with AI has integrated the concept of artificial intelligence into the syllabus. The program includes AI-related 
        topics like source code analysis, finding vulnerabilities, penetration testing, and cyber research, enabling students to recognize the impact of AI on the cybersecurity field and be able to embrace cutting-edge technology in their practice. </p>
      </div>
      <div className='w-80 text-xl px-5 flex flex-col gap-10'>
        <h1 className='text-bold text-3xl'>Recent</h1>
        <ul className='flex gap-2'>
          <li className='bg-gray-300 rounded-xl h-10 w-30 flex justify-center items-center p-1 text-2xl font-bold'>01</li>
          <li>IT Career After SEE and +2 in Nepal: A Practical Guide for Grade 11–12 Students (2027)</li>
        </ul>
        <ul className='flex gap-2'>
          <li className='bg-gray-300 rounded-xl h-10 w-25 flex justify-center items-center p-1 text-2xl font-bold'>02</li>
          <li>Complete Guide: To Starting an IT Career in Nepal Without a Degree</li>
        </ul>
        <ul className='flex gap-2'>
          <li className='bg-gray-300 rounded-xl h-10 w-30 flex justify-center items-center p-1 text-2xl font-bold'>03</li>
          <li>From Classroom Learning to Real-World Experience: My First Step into Digital Marketing</li>
        </ul>
        <ul className='flex gap-2'>
          <li className='bg-gray-300 rounded-xl h-10 w-30 flex justify-center items-center p-1 text-2xl font-bold'>04</li>
          <li>Inside Mindrisers Cybersecurity Course: Modules, Tools & Career Paths Explained</li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default App
