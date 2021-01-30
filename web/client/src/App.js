import React from 'react';

import rosneft_logo from './materials/Header/rosneft_logo.svg';
import hexagon2 from './materials/Header/hexagon-gradient-4.svg';
import hexagon1 from './materials/Header/hexagon-gradient-2.1.svg';

import year_image from './materials/Marathon/Vector.svg';
import big_hexagon from './materials/Marathon/Hexagon-Vector.svg';
import little_hexagon from './materials/Marathon/Little-hexagon.svg';
import three_lines from './materials/Marathon/Three-lines.svg';
import marathon_back from './materials/Marathon/Marathon-back.svg';
import vk_logo from './materials/Marathon/Vk-logo.svg';
import facebook_logo from './materials/Marathon/Facebook-logo.svg';
import instagram_logo from './materials/Marathon/Instagram-logo.svg';

import date_img from './materials/Annonces/date.svg'
import award_img from './materials/Annonces/award.svg'
import place_img from './materials/Annonces/place.svg'
import hexagon_gradient1 from './materials/Annonces/background-image-1.svg'
import hexagon_gradient2 from './materials/Annonces/background-image-2.svg'

import print1 from './materials/print-1.svg'
import print2 from './materials/print-2.svg'
import print3 from './materials/print-3.svg'

import './App.css';

function Header() {
    return (
        <header className="main-header">
        <div className="links">
            <img src={rosneft_logo} className="logo-img" alt="logo" />
            <img src={hexagon1} className="hexagon1" alt="hexagon" />
            <img src={hexagon2} className="hexagon2" alt="hexagon" />
            <a className="header-link" href="#" rel="noopener noreferrer">Главная</a>
            <a className="header-link" href="#" rel="noopener noreferrer">Организаторы</a>
            <a className="header-link" href="#" rel="noopener noreferrer">Правила</a>
            <a className="header-link" href="#" rel="noopener noreferrer">#ПульсМарафон</a>
            <a className="header-link" href="#" rel="noopener noreferrer" style={{paddingRight: '40px'}}>rn.digital</a>
        </div>
        </header>
    )
}

function News(props) {
    return (
        <div class="news-block">
            <div class="news-header">
                {props.header}
            </div>
            <div class="news-content">
                {props.content}
            </div>
            <a class="read-further" href={props.link}>
                Читать дальше
            </a>
        </div>
    )
}

function Marathon() {
        return (
            <div className="marathon">
                <div className="marathon-logo">
                    <div className="main-txt">
                        Марафон <br /> ИТ-соревнований
                    </div>
                    <img className="year-img" src={year_image} alt="2020" />
                    <img className="big-hexagon" src={big_hexagon} alt="hexagon" />
                    <img className="three-lines" src={three_lines} alt="3 lines" />
                    <img className="little-hexagon" src={little_hexagon} alt="hexagon" />
                    <div className="sub-txt">
                        Роснефть приглашает разработчиков и аналитиков принять участие в одном из трёх соревнований
                    </div>
                </div>
                <img className="marathon-back" src={marathon_back} alt="hexagon" />
                <div className="news">
                    <div className="news-main-header">
                        #ПульсМарафон
                    </div>
                    <News 
                        header="Отложение высвобождает пегматитовый сталагмит"
                        content="Базис эрозии, основываясь большей частью на сейсмических данных, глобален. Эоловое засоление ослабляет комплекс.  Лагуна, так же, как и в других..."
                        link="#"
                    />
                    <News 
                        header="Плато смещает аллит, что, однако, не уничтожило доледниковую"
                        content="Пока магма остается в камере, углефикация сдвигает меловой мусковит. Вулканическое стекло, скажем, за 100 тысяч лет, сменяет глетчерный приток, причем, вероятно..."
                        link="#"
                    />
                    <a className="to-all-news" href="#">Ко всем новостям</a>
                    <div className="contacts">
                        <p>По всем вопросам: </p>
                        <a className="mail-link" href="#">rd.knpk@bnipi.rosneft.ru</a>
                    </div>
                    <div className="social-media">
                        <a className="social-link" href="#"><img className="social-logo" src={vk_logo} alt="vk" /></a>
                        <a className="social-link" href="#"><img className="social-logo" src={facebook_logo} alt="facebook" /></a>
                        <a className="social-link" href="#"><img className="social-logo" src={instagram_logo} alt="instagram" /></a>
                    </div>
                </div>
                
            </div>
        )
}

class GradientButton extends React.Component {
    constructor(props) {
        super(props)
        this.background = props.background
        this.finalBackground = props.finalBackground
        this.text = props.text
        this.state = {degs: 0}
        this.intId = 0
    }

    componentWillUnmount() {
        if (this.intId !== 0) {
            clearInterval(this.intId)
            this.intId = 0
        }
    }

    startGradient() {
        if (this.intId !== 0) {
            clearInterval(this.intId)
            this.intId = 0
        }
        this.intId = setInterval(() => {
            if (this.state.degs < 100) {
                this.setState(state => ({
                    degs: state.degs + 2
                }))
            }
            else {
                clearInterval(this.intId)
                this.intId = 0
            }
        }, 1)
    }

    stopGradient() {
        if (this.intId !== 0) {
            clearInterval(this.intId)
            this.intId = 0
        } 
        this.intId = setInterval(() => {
            if (this.state.degs > 0) {
                this.setState(state => ({
                    degs: state.degs - 2
                }))
            }
            else {
                clearInterval(this.intId)
                this.intId = 0
            }
        }, 1)
    }
    
    render() {
        let back;
        if (this.state.degs !== 0) {
            back = `linear-gradient(90deg, ${this.finalBackground} ${this.state.degs}%, ${this.background} 100%)`
        }
        else {
            back = 'none'
        }
        return(
            <a className="details" href="#" 
            style={
                { background: back}
            }
            onMouseOver = {(event) => {
                this.startGradient();
            }}
            onMouseLeave = {(event) => {
                this.stopGradient();
                event.target.style.border = '2px solid rgba(35, 31, 32, 0.2)';
            }}
            onClick = {(event) => {
                event.target.style.border = '2px solid black'
            }}
            >{this.text}</a>
        )
    }
}

function Annonce(props) {
    return(
        <div className="annonce-block">
            <img className="challenge-logo" src={require("./materials/Annonces/" + props.logo).default} alt="logo" />
            <img className="logo-background" src={require('./materials/Annonces/' + props.logoBackground).default} alt="hexagon" />
            <div className="challenge-description">
                <p className="challenge-tittle">{props.tittle}</p>
                <p className="challenge-subtittle">{props.subtittle}</p>
                <div className="challenge-info">
                    <div className="challenge-info-images">
                        <img className="info-item" src={date_img} alt="date" />
                        <img className="info-item" src={place_img} alt="place" />
                        <img className="info-item" src={award_img} alt="date" />
                    </div>
                    <div className="challenge-info-captures">
                        <span className="capture-item">{props.date}</span>
                        <span className="capture-item">{props.place}</span>
                        <span className="capture-item">{props.award}</span>
                    </div>
                </div>
                <GradientButton 
                    background='rgba(255, 255, 255, 0)' 
                    finalBackground='#ffffff'
                    text='Подробнее'
                />
            </div>
            <img className="challenge-background" src={require("./materials/Annonces/" + props.background).default} alt="background" />
        </div>
    )
}


function App() {

    let annoncesInfo = [
        {
            tittle: 'Хакатон трёх городов',
            subtittle: 'Хакатон для молодых аналитиков и разработчиков. Постройте оптимальный путь по сложной поверхности',
            date: '24–25 сентября',
            place: 'Уфа, Самара и Казань',
            award: 'Призовой фонд — 289 000 ₽'
        },

        {
            tittle: 'Хакатон по робототехнике',
            subtittle: 'Хакатон для программистов-робототехников. Разработайте роботизированное решение для выполнения производственной операции',
            date: '16–17 октября',
            place: 'Уфа',
            award: 'Призовой фонд — 139 000 ₽'
        },

        {
            tittle: 'Rosneft Proppant Check Challenge',
            subtittle: 'Международные IT-соревнования в области ML. Определите размер зёрен пропанта по фотографии',
            date: 'Сентябрь–ноябрь, финал — 28 ноября',
            place: 'Москва', 
            award: 'Призовой фонд — 1 142 000 ₽'
        }
    ]

    let annoncesList = Array.from(Array(annoncesInfo.length).keys()).map(i => 
            <Annonce
                key={i}
                logo={`challenge-logo-${i + 1}.svg`}
                logoBackground={`hexagon-gradient-${i + 1}.svg`}
                tittle={annoncesInfo[i].tittle}
                subtittle={annoncesInfo[i].subtittle}
                date={annoncesInfo[i].date}
                place={annoncesInfo[i].place}
                award={annoncesInfo[i].award}
                background={`background-${i + 1}.svg`}
            />
    )
    return (
        <div style={{height: '100%', position: 'relative'}}>
            <Header />
            <img className="print-1" src={print1} alt="vector" />
            <img className="print-2" src={print2} alt="vector" />
            <img className="print-3" src={print3} alt="vector" />
            <div className="content" style={{verticalAlign: 'top', display: 'flex'}}>
                <Marathon />
                <div className="annonces-list">
                    <img className="hexagon-gradient-1" src={hexagon_gradient1} alt="" />
                    <img className="hexagon-gradient-2" src={hexagon_gradient2} alt="" />
                    { annoncesList }
                </div>
            </div>
        </div>
    )
}

export default App
