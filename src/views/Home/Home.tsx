import data_infos from '../../data/db-infos.json'
import Table from '../../components/Table/Table'

import './Home.style.scss'

const Home = () => {
  const article = Object.values(data_infos.article)

  const tournament_details_title: string = Object.entries(data_infos)[1][0].replaceAll("_"," ")
  const tournament_details_content: [string, string][] = Object.entries(data_infos.tournament_details[0])

  const final_positions_title: string = Object.entries(data_infos)[2][0].replaceAll("_"," ")
  const final_positions_content: [string, string][] = Object.entries(data_infos.final_positions[0])

  const tournament_statistics_title: string = Object.entries(data_infos)[3][0].replaceAll("_"," ")
  const tournament_statistics_content: [string, string][] = Object.entries(data_infos.tournament_statistics[0])
  
  return (
    <div className='home'>
      <main>
        {article.map((art, index) => (
          <div key={index}>
            <h1>{art.title}</h1>
            <article>
              <img src={process.env.PUBLIC_URL + '/assets/Qatar2022.jpg'} alt="winner's trophy" />
              <p>{art.content}</p>
            </article>
          </div>
        ))}
      </main>

      <aside>
          <Table title={tournament_details_title} data={tournament_details_content} />
          <Table title={final_positions_title} data={final_positions_content} />
          <Table title={tournament_statistics_title} data={tournament_statistics_content} />
      </aside>

    </div>
  )
}

export default Home