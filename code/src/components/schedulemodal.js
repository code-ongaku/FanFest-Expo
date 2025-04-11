import Backdrop from "./backdrop"

export default function ScheduleModal({openScheduleModal, isAddedSchedule, params}) {
    const addToSchedule = () => {
        openScheduleModal()
        isAddedSchedule()
    }
    return(
        <Backdrop handleClick={openScheduleModal}>
            <div onClick={(event) => event.stopPropagation()} className="bg-white w-[90%] h-[25%] rounded-lg flex flex-col items-center justify-center gap-4 text-[#7E52A0] p-3 text-center">
                <h1>Would you like to add {params.title} to your schedule?</h1>
                <div className="flex gap-10 mt-3">
                    <button onClick={addToSchedule} className="bg-[#7E52A0] text-white rounded-lg px-6 py-2">Yes</button>
                    <button onClick={openScheduleModal} className="bg-[#7E52A0] text-white rounded-lg px-6 py-2">No</button>
                </div>
            </div>
        </Backdrop>
    )
};