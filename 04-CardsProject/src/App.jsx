import React from 'react'
import Cards from './Components/cards'
const App = () => {

  const cardsData = [
    {
      status: "Available",
      rate: "$10 /Hr",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      name: "John Doe",
      role: "UI/UX Designer",
      company: "Epic Coders",
      skills: ["UI", "UX", "Design", "+2"],
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      status: "Busy",
      rate: "$12 /Hr",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      name: "Alex Morgan",
      role: "Frontend Developer",
      company: "Pixel Labs",
      skills: ["React", "CSS", "JS", "+1"],
      description: "Creative frontend developer with modern UI experience."
    },
    {
      status: "Available",
      rate: "$15 /Hr",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      name: "Sophia Lee",
      role: "Product Designer",
      company: "Design Hub",
      skills: ["Figma", "UX", "Research", "+3"],
      description: "Product-focused designer with strong research skills."
    },
    {
      status: "Available",
      rate: "$18 /Hr",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      name: "Michael Chen",
      role: "Full Stack Developer",
      company: "CodeCraft",
      skills: ["Node", "React", "MongoDB", "+2"],
      description: "Full stack engineer building scalable web apps."
    },
    {
      status: "Busy",
      rate: "$20 /Hr",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      name: "Emma Watson",
      role: "UX Researcher",
      company: "User First",
      skills: ["Research", "Testing", "UX", "+1"],
      description: "User researcher focused on usability and accessibility."
    },
    {
      status: "Available",
      rate: "$14 /Hr",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      name: "Daniel Smith",
      role: "Backend Developer",
      company: "ServerSide",
      skills: ["Node", "SQL", "APIs", "+2"],
      description: "Backend developer specializing in APIs and databases."
    },
    {
      status: "Available",
      rate: "$16 /Hr",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      name: "Olivia Brown",
      role: "Visual Designer",
      company: "Brandify",
      skills: ["Branding", "Illustration", "UI", "+3"],
      description: "Visual designer creating strong brand identities."
    },
    {
      status: "Busy",
      rate: "$22 /Hr",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      name: "Chris Evans",
      role: "Mobile App Designer",
      company: "App Studio",
      skills: ["iOS", "Android", "UI", "+2"],
      description: "Mobile designer with experience in cross-platform apps."
    },
    {
      status: "Available",
      rate: "$25 /Hr",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
      name: "Noah Wilson",
      role: "AI Product Designer",
      company: "Future Labs",
      skills: ["AI UX", "Prototyping", "Figma", "+4"],
      description: "Designing intuitive experiences for AI-driven products."
    },
    {
      status: "Available",
      rate: "$30 /Hr",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      name: "Ava Johnson",
      role: "Design Lead",
      company: "Creative Studio",
      skills: ["Leadership", "UX", "Strategy", "+5"],
      description: "Design lead managing teams and complex design systems."
    }
  ];

  return (
    <div className="parent">
      {cardsData.map(function (elem, index) {
        return <Cards key={index} data={elem} />
      })}
    </div>
  )
}

export default App