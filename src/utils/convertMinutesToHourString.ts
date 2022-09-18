export function convertMinutesToHourString(minutes: number) {
    const hours = Math.floor(minutes / 60)
    const minutesRest = minutes % 60

    const hoursToReturn = `${String(hours).padStart(2, '0')}:${String(minutesRest).padEnd(2, '0')}`

    return hoursToReturn
}