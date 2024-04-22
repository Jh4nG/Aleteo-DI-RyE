export const DescripcionNBComponent = ({
    iframe,
    description,
    addApoyo
})=> {
    return (
        <div className="container">
            <div className="col-12 iframeVideo">
                {iframe}
            </div>
            <div className="col-12">
                {description}
                <p>
                    <strong> Con el apoyo de: </strong> <br />
                    La Chimenea Cultural
                    {addApoyo}
                </p>
            </div>
        </div>
    )
}