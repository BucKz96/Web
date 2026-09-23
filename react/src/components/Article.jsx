// On vérifie si l'information existe et si elle existe on la parcours avec .map()
// { tags && tags.map( ...

// Plus rapide d'écriture
// { tags?.map( ... 

// La propriété key permet à react d'identifier chaque élément d'une liste pour gérer les mise à jour du DOM

function Article({title, img, text, categories, tags}) {
    return (
        <div className="col-sm-4 mb-3">
            <div className="article border">
                <div className="bloc-img">
                    <img src={img.src} className="img-fluid" alt={img.alt} />
                </div>
                <div className="bloc-article p-2">
                    <h2 className="my-3">{title}</h2>
                    { categories && categories.map((name, index) => (
                        <a href={"/keyword/" + name} className="btn btn-outline-dark me-3" key={index}>{name}</a>
                    ) )}
                    <hr />
                    { tags && tags.map((tag) => (
                        <a href={`/tag/${tag.slug}`} className="btn btn-dark me-3" key={tag.id}>{tag.name}</a>
                    ) )}
                    <hr />
                    <p>
                        {text}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Article
