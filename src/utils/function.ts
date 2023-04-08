export const colors = [
    "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFD54F", "#FFB74D", "#FF8A65"
]

export const getRandomColor = (): string => {
    const randomPick = Math.floor(Math.random() * colors.length);
    return colors[randomPick]
}
