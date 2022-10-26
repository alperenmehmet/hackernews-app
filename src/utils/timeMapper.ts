import moment from 'moment'

export const dateMapper = (date: any) => {
  const newDate = moment.unix(date)
  const timeAgo = moment(newDate).toNow()
  return timeAgo
}
