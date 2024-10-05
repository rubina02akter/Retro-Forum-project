const latestCards = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
  const data = await res.json()
  const cards = data
  // console.log(cards)
 console.log(cards);
}

latestCards();