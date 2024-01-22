import { useEffect } from "react";
import CustomButton from "./CustomButton";

const ShowModal = (props) => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, []);

    return (
        <>
            <div className="showModalWrapper" onClick={props.closeModal}></div>
            <div className="modalContainer">
                <div className="closeBtnContainer">
                    <CustomButton 
                        customWrapperStyle={{paddingTop: '0px'}}
                        onClick={props.closeModal}
                        buttonText='Close'
                    />
                </div>
                <div className="modalContent">
                {props.imageList.map((item) => {
                    return(
                        <div className="modalContentImageContainer" key={item.id} onClick={() => {
                            props.pickImage(item.dishImage);
                            props.closeModal();
                        }}>
                            <img src={`/images/${item.dishImage}`} alt={item.alt} />
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default ShowModal;