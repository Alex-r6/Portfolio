import React, { useEffect } from 'react'

export const StartMenu = ({ setRun_game }) => {
    useEffect(() => {
        const button_to_start = (e) => {
            if (e.key === 'Enter') {
                setRun_game(true)
            }
        }

        window.addEventListener("keydown", button_to_start);


        return () => {
            window.removeEventListener("keydown", button_to_start);
        };
    }, [])

    const start_game = () => {
        setRun_game(true)
    }
    return (
        <div className="load_cont_g">
            <div className="load_cont_c">
                <div className="load_cont">
                    <div className="ribbon_cont">
                        <img src="/images/social/ribbon-left.png" />
                        <div className="ribbon_text">Loading: </div>
                        <img src="/images/social/ribbon-right.png" />
                    </div>
                    <p className='press_p' onClick={start_game}> Press to start</p>
                </div>
            </div>
        </div>
    )
}
