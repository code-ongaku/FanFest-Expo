export default function Backdrop({children, handleClick}) {
    return (
        <div onClick={handleClick} className="fixed top-0 left-0 bg-[#111111e1] w-screen h-screen flex justify-center items-center z-10">
            {children}
        </div>
    )
};
