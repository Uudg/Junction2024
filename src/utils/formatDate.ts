export function fDate(dateString: string) {
    // Parse the input date string
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day); // month is 0-indexed

    // Format the date
    return new Intl.DateTimeFormat("de-DE", {
        dateStyle: "long",
    }).format(date);
}
