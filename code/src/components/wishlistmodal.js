import Backdrop from "./backdrop"

export default function WishlistModal({openWishlistModal, isAddedWishlist, params}) {
    const addToWishlist = () => {
        openWishlistModal()
        isAddedWishlist()
    }
    return(
        <Backdrop handleClick={openWishlistModal}>
            <div onClick={(event) => event.stopPropagation()} className="bg-white w-[90%] h-[25%] rounded-lg flex flex-col items-center justify-center gap-4 text-[#7E52A0] p-3 text-center">
                <h1>Would you like to add {params.title} to your wishlist?</h1>
                <div className="flex gap-10 mt-3">
                    <button onClick={addToWishlist} className="bg-[#7E52A0] text-white rounded-lg px-6 py-2">Yes</button>
                    <button onClick={openWishlistModal} className="bg-[#7E52A0] text-white rounded-lg px-6 py-2">No</button>
                </div>
            </div>
        </Backdrop>
    )
};
