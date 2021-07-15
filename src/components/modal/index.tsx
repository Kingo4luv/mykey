const ModalLayout : React.FC = ({children}) => {
    
    return(
        <div className="w-full fixed inset-0 max-h-screen nin-h-screen h-screen bg-black bg-opacity-50 z-50">
            <div className="w-full h-full flex justify-center items-center p-2">
                {children}
            </div>
        </div>
    )
}


export default ModalLayout;