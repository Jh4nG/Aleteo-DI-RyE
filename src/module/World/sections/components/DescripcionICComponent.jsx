import { ViewImage360Component } from "../../../../components/ViewImage360"

export const DescripcionICComponent = ({
    img360,
    imgAntigua,
    descriptionNew,
    descriptionAntigua
})=> {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <h4>Fotografía 360°</h4>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <h4>Fotografía de archivo</h4>
                </div>
                <div className="col-12">
                    <ViewImage360Component 
                        img360={img360}
                        imgAntigua={imgAntigua}
                    />
                </div>

                <div className="col-6 d-flex justify-content-center">
                    <h4>{descriptionNew}</h4>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <h4>{descriptionAntigua}</h4>
                </div>
            </div>
        </div>
    )
}