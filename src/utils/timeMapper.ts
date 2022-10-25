import { formatDistance, fromUnixTime } from 'date-fns'

export const dateMapper = (date: number) => {
  const newDate = fromUnixTime(date)
  const timeAgo = formatDistance(new Date(newDate), new Date(), {
    addSuffix: false
  })
  return timeAgo
}
