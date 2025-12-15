export const Card = ({children} : {
    children: React.ReactNode
}) => {
    return (
        <div className="border border-gray-400 rounded-sm w-120 flex flex-col justify-center items-center">
            {children}
        </div>
    )
}