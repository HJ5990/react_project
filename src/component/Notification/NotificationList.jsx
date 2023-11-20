import React, { Component } from 'react';
import Notification from './Notification';

const serverNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘도 운동 화이팅입니다."
    },{
        id: 2,
        message: "휴식을 취한후 진행해 주세요"
    },{
        id: 3,
        message: "고생하셨습니다. 퇴장체크 부탁드립니다."
    }
]

let timer;

/*
    class Component
    state를 가지고 있고 이를 수정할 수 있다.
    라이프사이클에 따른 생명주기메서드를 사용할 수 있다
*/

class NotificationList extends Component {
    constructor(props){
        super(props);

        this.state = {
            notifications: []
        }
    }

    componentDidMount(){
        console.log("componentDidMount : start")
        const { notifications } = this.state;

        timer = setInterval(() => {
            // state에 저장된 배열의 길이가 서버에서 온 값의 길이보다 작으면
            if (notifications.length < serverNotifications.length) {
                const index = notifications.length;
                notifications.push(serverNotifications[index]);
                this.setState({
                    notifications: notifications,
                })
            } else {
                // 다끝나고 지워주는 코드
                this.setState({
                    notifications: [],
                })

                clearInterval(timer);
            }
            console.log("componentDidMount : end")
        },2000)
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate : start")
    }

    componentWillUnmount(){
        console.log("componentWillUnmount : end")
        if (timer)
            clearInterval(timer)
    }

    render() {
        return (
            <div>
                {
                    this.state.notifications.map((n) => {
                        return(
                            <Notification 
                                key={n.id}
                                id={n.id}
                                message={n.message}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default NotificationList;