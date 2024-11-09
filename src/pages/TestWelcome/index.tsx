import nameLogo from '../../assets/CoreMatch_horizontal.png'

const TestWelcomePage = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className='flex flex-col gap-2 items-center'>
                <div className="w-14 h-14 rounded-lg bg-black"></div>
                <img src={nameLogo} alt="name logo here" />
            </div>
        </div>
    )
}

export default TestWelcomePage