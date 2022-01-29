
export default function Recipe({ title, image, diets }) {
    console.log(1111111111111111111, title)
    return (
        <div>
            <img src={image} alt="image" />
            <h3>{title}</h3>

            <h3>Dietas : {diets}</h3>


        </div>
    )
}