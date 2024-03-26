export const DescripcionRyEComponent = ({
    iframe,
    description
})=> {
    return (
        <div className="container">
            <div className="col-12 iframeVideo">
                {iframe}
            </div>
            <div className="col-12">
                {description}
            </div>
        </div>
    )
}