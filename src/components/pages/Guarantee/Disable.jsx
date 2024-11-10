import { useEffect, useState } from 'react'
import './CurrentEventsItem.scss'

const CurrentEventsItem = () => {

   const [timeLeft, setTimeLeft] = useState(5*60)

   const getPadTime = (time) => time.toString().padStart(2, '0')

   const minutes = getPadTime(Math.floor(timeLeft / 60))
   const seconds = getPadTime(timeLeft - minutes * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : setDisabled(false) || 5*60))
        }, 1000)
        return () => clearInterval(interval) 
    }, [])

    const [appState, changeState] = useState({
        
        objects: [
            {id: 1, title: 'Apple iPhone 13 Pro Max 256Gb (небесно-голубой)', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
            {id: 2, title: '500 Stars', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false},
            {id: 3, title: 'Sony PlayStation 5 Digital Edition  ', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png', statusItem: false}
        ]
    })


    const toggleActive = (index) => {
        let arrayCopy = [...appState.objects]

        arrayCopy[index].statusItem 
            ? (arrayCopy[index].statusItem = false) 
            : (arrayCopy[index].statusItem = true)
            setDisabled(true)

            changeState({...appState, objects: arrayCopy})
    }

    const toggleActiveStyles = (index) => {
        if (appState.objects[index].statusItem) {
            return 'current__events__hot-price disabled'
        } else {
            return 'current__events__hot-price'
        }
    }

    const toggleActiveStylesBtns = (index) => {
        if (appState.objects[index].statusItem) {
            return 'current__events__btn-green disabled'
        } else {
            return 'current__events__btn-green'
        }
    }

    const [disabled, setDisabled] = useState(false)

    return (
        <>
        <div className='current__events__wrapper'>
            {appState.objects.map((item, index) => 
                <div className="current__events__hot-price__item" key={index}>
                    <div className={toggleActiveStyles(index)}>
                        <h5 className="current__events__card-title__large">Hot Price</h5>
                    </div>
                    <div className="current__events__image">
                        <img src={item.avatar} alt='user' className="rounded-circle" width='75' height='75'/>
                    </div>
                    <div className="current__events__info">
                        <h4 className="current__events__title__middle">{item.title}</h4>
                    </div>
                    
                    <div className="current__events__timer">
                        <span>{minutes}</span>
                        <span>:</span>
                        <span>{seconds}</span>
                    </div>
                    
                    
                    <button className={toggleActiveStylesBtns(index)} onClick={() => toggleActive(index)} disabled={disabled}>СДЕЛАТЬ ХОД</button>
                        
                </div>
                
            )}
            </div>
        </>
    )
}

export default CurrentEventsItem
reactjsbuttonmapreact-hookcolor