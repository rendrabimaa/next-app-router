type DetailProductPageProps = {params: {slug:string[]}}

export default function DetailProductPage(props: DetailProductPageProps) {
    const {params} = props
    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>Category: {params.slug[0]}</p>
            <p>Gender: {params.slug[1]}</p>
            <p>ID Product: {params.slug[2]}</p>
        </div>
    )
}