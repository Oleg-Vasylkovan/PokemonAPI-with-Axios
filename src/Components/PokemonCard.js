const PokemonCard = props =>{
    const {name} = props;
    return(
        <div className="card">
            <div className="card-body">
                <h2 className="card-title">Pokemon Name: {name.name}</h2>
            </div>
        </div>
    )
}

export default PokemonCard;