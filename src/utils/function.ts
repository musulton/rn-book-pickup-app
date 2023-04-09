export const colors = [
    "#4DB6AC", "#81C784", "#AED581", "#DCE775", "#FFD54F", "#FFB74D", "#FF8A65"
]

export const dummyCoverBook = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB88clyXTOSsZbv3HvgH1OpTSF5aIEsXstUg&usqp=CAU",
    "https://marketplace.canva.com/EAD7WdPHbx8/1/0/1003w/canva-colorful-abstract-adventure-children%27s-book-cover-yT1fFarv3nc.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpP-TqlC_wJRlyQ8P0tlAZ58v2S_LkvxSJgQ&usqp=CAU",
    "https://edit.org/photos/img/blog/d3s-design-book-covers.jpg-840.jpg",
    "https://marketplace.canva.com/EAD7YHrjZYY/1/0/1003w/canva-blue-illustrated-stars-children%27s-book-cover-haFtaSNXXF4.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEKWppnfGbh9laMb4SxyDc7RpnbSLFlgRFw&usqp=CAU",
    "https://cdn.cp.adobe.io/content/2/rendition/bf935818-f7a5-47e6-8c6d-73cc144ff0fe/artwork/78968917-3b52-4f57-84b9-b6a52d7d6d9d/version/0/format/jpg/dimension/width/size/400"
]

export const getRandomColor = (): string => {
    const randomPick = Math.floor(Math.random() * colors.length);
    return colors[randomPick]
}

export const getDummyCoverImg = (): string => {
    const randomPick = Math.floor(Math.random() * dummyCoverBook.length);
    return dummyCoverBook[randomPick]
}

export const getTomorrowDate = (): Date => {
    const today = new Date()
    const tomorrow = today.setDate(today.getDate() + 1)

    return new Date(tomorrow)
}
