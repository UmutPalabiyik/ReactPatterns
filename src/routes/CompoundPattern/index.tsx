import Traveler from "./Traveler"
import { products } from "./data"

const CompoundPattern = () => {

    const data: any = [{
        src: "https://images.pexels.com/photos/586687/pexels-photo-586687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "pic1"
    },
    {
        src: "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "pic2"
    },
    {
        src: "https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "pic3"
    },
    {
        src: "https://images.pexels.com/photos/7602068/pexels-photo-7602068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "pic4"
    },]

    return (
        <div className="p-16 flex flex-wrap justify-center gap-4">
            {
                data.map(({ src, alt }: any) => {
                    return (
                        <Traveler src={src} alt={alt}>
                            <Traveler.Toggle />
                            <Traveler.List >
                                <Traveler.Item>Favorite</Traveler.Item>
                                <Traveler.Item>Delete</Traveler.Item>
                            </Traveler.List>
                        </Traveler>
                    )
                })
            }
        </div>

    )


}

export default CompoundPattern

