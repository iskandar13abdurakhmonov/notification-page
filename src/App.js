import { useState } from 'react'
import './App.css'

import mark from './images/avatar-mark-webber.webp'
import angela from './images/avatar-angela-gray.webp'
import jacob from './images/avatar-jacob-thompson.webp'
import rizky from './images/avatar-rizky-hasanuddin.webp'
import kimberly from './images/avatar-kimberly-smith.webp'
import nathan from './images/avatar-nathan-peterson.webp'
import anna from './images/avatar-anna-kim.webp'
import commentImage from './images/image-chess.webp'

function App() {
    const [isRead, setIsRead] = useState(true)
    const handleRead = () => {
        setIsRead(!isRead)
    }

    return (
        <div className="wrapper">
            <Main>
                <BoxContainer>
                    <NotificationBox>
                        <NotificationsHeader
                            onRead={handleRead}
                            isRead={isRead}
                        />
                        <NotificationsList>
                            <NotificationsItem isRead={isRead} />
                        </NotificationsList>
                    </NotificationBox>
                </BoxContainer>
            </Main>
        </div>
    )
}

function Main({ children }) {
    return <main className="main">{children}</main>
}

function BoxContainer({ children }) {
    return <div className="box__container">{children}</div>
}

function NotificationBox({ children }) {
    return <div className="notifications-box notifications">{children}</div>
}

function NotificationsHeader({ onRead, isRead }) {
    return (
        <div className="notifications__header header">
            <h1 className="header__title">
                Notifications{' '}
                <span className="header__count">{isRead ? '3' : '0'}</span>
            </h1>
            <button
                className="header__btn"
                onClick={() => onRead()}
            >
                Mark all as read
            </button>
        </div>
    )
}

function NotificationsList({ children }) {
    return <ul className="notifications__list">{children}</ul>
}

function NotificationsItem({ isRead }) {
    return (
        <>
            <li
                className={
                    isRead ? 'item item__isRead' : 'notifications__item item'
                }
            >
                <img
                    src={mark}
                    alt="Mark Webber"
                    className="item__profile"
                />

                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Mark Webber</span> reacted to
                        your recent post &nbsp;
                        <span className="text-info">
                            My first tournament today!
                        </span>
                    </p>

                    <span className="text-time">1m ago</span>
                </div>
                {isRead ? <NewNotificationRedDot /> : ''}
            </li>
            <li
                className={
                    isRead ? 'item item__isRead' : 'notifications__item item'
                }
            >
                <img
                    src={angela}
                    alt="Angela Gray"
                    className="item__profile"
                />

                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Angela Gray</span>
                        followed you
                    </p>

                    <span className="text-time">5m ago</span>
                </div>
                {isRead ? <NewNotificationRedDot /> : ''}
            </li>
            <li
                className={
                    isRead ? 'item item__isRead' : 'notifications__item item'
                }
            >
                <img
                    src={jacob}
                    alt="Jacob Thompson"
                    className="item__profile"
                />

                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Jacob Thompson</span>
                        has joined your group
                        <span className="text-info">Chess Club</span>
                    </p>

                    <span className="text-time">1 day ago</span>
                </div>
                {isRead ? <NewNotificationRedDot /> : ''}
            </li>
            <li className="notifications__item item">
                <img
                    src={rizky}
                    alt="Rizky Hasanuddin"
                    className="item__profile"
                />
                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Rizky Hasanuddin</span>
                        sent you a private message
                    </p>

                    <span className="text-time">5 days ago</span>

                    <p className="item__privateMessage">
                        Hello, thanks for setting up the Chess Club. I've been a
                        member for a few weeks now and I'm already having lots
                        of fun and improving my game.
                    </p>
                </div>
            </li>
            <li className="notifications__item item">
                <img
                    src={kimberly}
                    alt="Kimberly Smith"
                    className="item__profile"
                />
                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Kimberly Smith</span>
                        commented on your picture
                    </p>

                    <span className="text-time">1 week ago</span>
                </div>
                <img
                    src={commentImage}
                    alt={commentImage}
                    className="item__commentImage"
                />
            </li>
            <li className="notifications__item item">
                <img
                    src={nathan}
                    alt="Nathan Peterson"
                    className="item__profile"
                />

                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Nathan Peterson</span>
                        reacted to your recent post
                        <span className="text-info">
                            5 end-game strategies to increase your win rate
                        </span>
                    </p>

                    <span className="text-time">2 weeks ago</span>
                </div>
            </li>
            <li className="notifications__item item">
                <img
                    src={anna}
                    alt="Anna Kim"
                    className="item__profile"
                />

                <div className="item__text text">
                    <p className="text-main">
                        <span className="text-800">Anna Kim</span>
                        left the group
                        <span className="text-info">Chess Club</span>
                    </p>

                    <span className="text-time">2 weeks ago</span>
                </div>
            </li>
        </>
    )
}

function NewNotificationRedDot() {
    return <div className="new-notification-red-dot"></div>
}

export default App
