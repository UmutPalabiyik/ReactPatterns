const Header = () => {

    const patterns = [{
        name: "Compund Pattern",
        path: "compound-pattern"
    }]
    return (
        <div className="h-14 flex items-center gap-2 px-4 p-3 bg-slate-800">
            {
                patterns.map(({ name, path }: any) => <li className="text-white font-poppins list-none">
                    <a href={`/${path}`}>{name}</a>
                </li>)
            }
        </div>
    )
}

export default Header;