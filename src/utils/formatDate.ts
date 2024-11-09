export function fDate(date: Date) {
    return new Intl.DateTimeFormat('de-DE', {
        dateStyle: 'long',
  }).format(date)
}