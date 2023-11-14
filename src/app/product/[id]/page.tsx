type DetailProductPageProps = {params: {slug:string}}

export default function DetailProductPage(props: DetailProductPageProps) {
    const {params} = props
    return (
        <div>
            <h1>Detail Product Page</h1>
            {params.slug}
        </div>
    )
}