'use strict'

const Redis = use('Redis')

Redis.subscribe('music', async (track) => {
  console.log('received track', track)
})