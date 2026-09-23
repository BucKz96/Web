import Header from './components/Header.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'


function App() {

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Nav />
      <Header />     

      <div className="container">
        <div className="row">
          <Article 
            title="Festival Paris"
            img={{
              src: "https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324_1280.jpg",
              alt: "Festival Paris"
            }}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi.
                        Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?"
            categories={["Concert", "Festival", "Musique"]}
            tags={[
              {id: 1, name: "été", slug: "ete"},
              {id: 2, name: "2 jours", slug: "2_jours"},
              {id: 3, name: "Paris", slug: "paris"},
            ]}
            number={9}
            bool={true}          
          />

          <Article 
            title="Escapade en mer"
            img={{
              src: "https://cdn.pixabay.com/photo/2023/10/11/13/41/ship-8308680_1280.jpg",
              alt: "Escapade en mer"
            }}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi.
                        Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?"
            categories={["Mer", "Bateau", "Vacances"]}
            tags={[
              {id: 1, name: "Escapade", slug: "escapade"},
              {id: 2, name: "Tourisme", slug: "tourisme"},
              {id: 3, name: "Méditerranée", slug: "mediterranee"},
            ]}          
          />

          <Article 
            title="Festival Electro"
            img={{
              src: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
              alt: "Festival Electro"
            }}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi.
                        Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?"
            categories={["Concert", "Festival", "Musique"]}
            tags={[
              {id: 1, name: "Electro", slug: "electro"},
              {id: 2, name: "Montpellier", slug: "Montpellier"},
              {id: 3, name: "Dj", slug: "dj"},
            ]}
         
          />

          <Article 
            title="Randonnée en montagne"
            img={{
              src: "https://cdn.pixabay.com/photo/2021/02/07/05/15/road-5990128_1280.jpg",
              alt: "Randonnée en montagne"
            }}
            text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam facere sequi a illum quam minima dignissimos, molestiae, cum enim reiciendis quod. Vel veniam ratione provident repudiandae praesentium iste ducimus animi.
                        Corporis nobis quidem beatae. Quis sed cumque quibusdam. Et qui animi cupiditate fuga beatae dolores, ut iusto eligendi ex ratione tenetur. Explicabo nulla distinctio voluptas, alias cum earum dolor necessitatibus?"
            categories={["Randonnée", "Montagne", "Loisir"]}
            tags={[
              {id: 1, name: "Escapade", slug: "escapade"},
              {id: 2, name: "Tourisme", slug: "tourisme"},
              {id: 3, name: "Sud", slug: "sud"},
            ]}
        
          />
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
