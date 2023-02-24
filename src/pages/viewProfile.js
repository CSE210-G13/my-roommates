import React from 'react'
import UserProfile from '@/components/UserProfile'

let user = {
  firstName: "John",
  lastName: "McRoommate",
  gender: "Male",
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Duck_%2827479065157%29.jpg/640px-Duck_%2827479065157%29.jpg",
  college: "Warren",
  major: "Roommate Studies",
  schoolYear: "Sophomore",
  bio: "sup, it's me john i'm out here",
  languages: ["English"],
  isProfilePublic: true,
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
      pub: true,
    },
    linkedin: {
      data: "johnnyprofessional",
      pub: true,
    },
    facebook: {
      data: "",
      pub: false
    }
  },
  lifestyle: {
    bedtime: "11pm",
    okayWith: {
      children: false,
      pets: true,
      smoking: false,
      parties: true,
      alcohol: true,
      couples: false 
    },
    hobbies: [
      "Reading",
      "Walking",
      "Birdwatching"
    ],
  },
  propPref: {
    budget: [0, 1000],
    distance: [0, 15],
    petFriendly: false,
    smokingBanned: true,
    numBedrooms: 2,
    numBathrooms: 1,
    amenities: {
      ac: true,
      pool: false,
      gym: true,
      parking: false,
      inUnitLaundry: true,
      transportation: true,
    }
  },
  interestedProp: Array.from(Array(10), (_,i) => i).map((x) => `Property ${x}`),
  requests: {}
}

export default function roommates() {
  return (
    <main>
      <UserProfile user={user} />
    </main>
  )
}