export const Filter = ({filter , setFilter, setSort}) => {
    return (
        <div className="filter">
            <h2>Filrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompleta</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabetica:</p>
                    <button onClick={() => setSort("Asc")}>Asc</button>
                    <button onClick={() => setSort("Desc")}>Desc</button>
                </div>
            </div>
        </div>
    )
}