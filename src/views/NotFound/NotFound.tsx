import './NotFound.style.scss'

const NotFound = () => {
  const img404: string[] = [
    "/assets/404/lavarestformelle.webp",
    "https://img-9gag-fun.9cache.com/photo/a8qynQV_700bwp.webp",
    "assets/404/jpn_backto_ger.webp",
    "https://media.tenor.com/7gQkxPeaocYAAAAd/mbappe-mbappe-laugh.gif",
    "https://media.tenor.com/WeR1fN4iik8AAAAd/neymar-neymar-jr.gif",
    "https://media.tenor.com/WJbXIiTBusYAAAAC/vini-neymar-paqueta-dance.gif",
    "https://media.tenor.com/lpy9YSehZA4AAAAC/wheresmessi-messi.gif",
    "https://media.tenor.com/fvEBqAU209oAAAAC/harry-kane-penalty-miss.gif"
  ]

  const min: number = 0;
  const max: number = img404.length-1;
  const rdm: number = Math.floor(Math.random() * (max - min + 1)) + min

  return (
    <div className="notfound">
      <h2>404</h2>
      <img src={`${img404[rdm]}`} alt="page not found" />
    </div>
  )
}

export default NotFound