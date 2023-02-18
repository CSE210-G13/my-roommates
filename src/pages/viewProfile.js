import React from 'react'
import UserProfile from '@/components/UserProfile'

let user = {
  name: "John McRoommate",
  summary: "2nd year - UCSD - majoring in roommate studies",
  bio: "sup, it's me john i'm out here",
}

export default function roommates() {
  return (
    <main>
      <UserProfile user={user} />
    </main>
  )
}
