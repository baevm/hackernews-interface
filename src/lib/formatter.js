import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const formatTime = (ts) => {
  
  return dayjs(ts * 1000).fromNow()
}
