const Header = () => {

    const patterns = [{
        name: "Compound Pattern",
        path: "compound-pattern"
    }]
    return (
        <div className="h-14 flex items-center gap-2 px-4 p-3 bg-slate-800">
            {
                patterns.map(({ name, path }: any) => <li className="text-white font-poppins list-none hover:scale-[1.05] transition delay-50 duration-300 ease-in-out">
                    <a href={`/${path}`}>{name}</a>
                </li>)
            }
        </div>
    )
}

export default Header;