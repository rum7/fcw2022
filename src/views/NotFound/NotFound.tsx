import './NotFound.style.scss'

const NotFound = () => {
  const img404: string[] = [
    "https://im.ezgif.com/tmp/ezgif-1-6847bdd35b.webp",
    "https://img-9gag-fun.9cache.com/photo/a8qynQV_700bwp.webp",
    "https://im.ezgif.com/tmp/ezgif-1-28ba37d077.webp",
    "https://media.tenor.com/7gQkxPeaocYAAAAd/mbappe-mbappe-laugh.gif",
    "https://media.tenor.com/WeR1fN4iik8AAAAd/neymar-neymar-jr.gif",
    "https://media.tenor.com/WJbXIiTBusYAAAAC/vini-neymar-paqueta-dance.gif",
    "https://im.ezgif.com/tmp/ezgif-1-ad40fec23c.gif",
    "https://im.ezgif.com/tmp/ezgif-1-1d2db58c0e.gif"
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