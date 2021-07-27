import React, { useEffect, useState } from 'react'

import './HttpApiExample.css'

/** HTTP API Example */

const selectHost = async () => {
  const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
  const res = await fetch('https://api.audius.co')
  const hosts = await res.json()
  return sample(hosts.data)
}

const HttpApiExample = () => {
  const [track, setTrack] = useState(null)

  useEffect(() => {
    const fetchTrack = async () => {
      const host = await selectHost()
      const res = await fetch(`${host}/v1/tracks/trending?limit=1&timeRange=week?app_name=EXAMPLEAPP`)
      const json = await res.json()
      const topTrack = json.data[0]
      setTrack(topTrack)
    }
    fetchTrack()
  }, [])

  return track && (
    <div className="topTrack">
      <div className="artwork">
        <img src={track.artwork['150x150']} alt='artwork' />
      </div>
      <div className="title">
        { track.title }
      </div>
      <div className="artist">
        { track.user.name }
      </div>
    </div>
  )
}


export default HttpApiExample