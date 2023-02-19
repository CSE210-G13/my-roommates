import React from 'react'
import UserProfile from '@/components/UserProfile'

let user = {
  firstName: "John",
  lastName: "McRoommate",
  gender: "Male",
  college: "UCSD",
  major: "Roommate Studies",
  schoolYear: "Sophomore",
  bio: "sup, it's me john i'm out here",
  languages: ["English"],
  moveInDate: "2023-04-01",
  isPublic: true,
  contactInfo: {
    email: {
      data: "john@john.com",
      pub: false 
    },
    phone: {
      data: "555-555-5555",
      pub: false
    },
    discord: {
      data: "john#5555",
      pub: false,
    },
    instagram: {
      data: "heresjohnny",
      pub: false,
    },
    linkedin: {
      data: "",
      pub: false,
    },
    facebook: {
      data: "",
      pub: false
    }
  },
  roommatePref: {
    gender: "Male",
    college: "UCSD",
    major: "Roommate Studies",
    schoolYear: "Sophomore",
    languages: ["English"],
    moveInDate: "2023-04-01",
    bedtime: "11pm",
    okayWith: {
      children: false,
      pets: true,
      smoking: false,
      parties: true,
      alcohol: true,
      couples: false 
    },
    cleanliness: 3,
    hobbies: [
      "Reading",
      "Walking",
      "Birdwatching"
    ]
  },
  propPref: {},
  interestedProp: {},
  requests: {}
}

export default function roommates() {
  return (
    <main>
      <UserProfile user={user} />
    </main>
  )
}
