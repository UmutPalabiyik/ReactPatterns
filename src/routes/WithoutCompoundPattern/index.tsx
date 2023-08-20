import TravelerCard from "./TravelerCard"

const WithoutCompoundPattern = () => {

    const data: any = [{
        image: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 5,
        category: "Holiday",
        title: "Place A",
        price: 25
    },
    {
        image: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 3,
        category: "Holiday",
        title: "Place B",
        price: 25
    },
    {
        image: "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 4,
        category: "Holiday",
        title: "Place C",
        price: 25
    },
    {
        image: "https://images.pexels.com/photos/7602068/pexels-photo-7602068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        rating: 2,
        category: "Holiday",
        title: "Place D",
        price: 25
    },]

    return (
        <div className="p-16 flex flex-wrap justify-center gap-4">
            {
                data.map((card: any) => {
                    return (
                        <TravelerCard
                            image={card.image}
                            rating={card.rating}
                            category={card.category}
                            title={card.title}
                            price={card.price}
                            favorite
                            report
                        />
                    )
                })
            }
        </div>

    )
}

export default WithoutCompoundPattern;